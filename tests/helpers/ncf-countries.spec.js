const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();
const { expect } = require('chai');

describe('NCF Countries', () => {

	let helper;
	let stub;

	beforeEach(() => {
		stub = sinon.stub();
	});

	context('filterList', () => {

		beforeEach(() => {
			const mockBillingCountries = generateCountryArray(4, { includeAllFrequent: false });
			helper = proxyquire('../../helpers/ncf-countries', {
				'n-common-static-data': {
					billingCountries: { countries: mockBillingCountries }
				}
			});
		});

		it('filters billingCountries', () => {
			const filterList = ['C-0', 'C-2'];
			helper({ hash: { filterList }, fn: stub });
			const context = stub.getCall(0).args[0];
			expect(context.countries).to.deep.equal([{ code: 'C-0'}, { code: 'C-2'}]);
			expect(context.countries).to.not.include([{ code: 'C-1'}, { code: 'C-4'}]);
		});

	});

	context('when there are more than 50 results', () => {
		let mockBillingCountries;
		beforeEach(() => {
			mockBillingCountries = generateCountryArray(75);
			helper = proxyquire('../../helpers/ncf-countries', {
				'n-common-static-data': {
					billingCountries: { countries: mockBillingCountries }
				}
			});
		});

		it('splits the result set  on the context', () => {
			helper({ hash: {}, fn: stub });
			const context = stub.getCall(0).args[0];
			expect(context).to.have.property('ncfCountryGroups');
			expect(context.ncfCountryGroups.length).to.equal(2);

			const [frequent, alphabetical ] = context.ncfCountryGroups;

			expect(frequent.label).to.equal('Frequently Used');
			expect(frequent.countries.map(c => c.code)).to.have.members(['GBR', 'USA', 'FRA', 'CAN', 'JPN']);
			expect(alphabetical.label).to.equal('Alphabetical');
			expect(alphabetical.countries).to.deep.equal(mockBillingCountries);
		});

		it('does not split when a filter means there are less than two frequent countries', () => {
			// Get all country codes APART from 'CAN','FRA', 'JPN', 'USA' => only GBR would be returned
			const notWanted = ['CAN','FRA', 'JPN', 'USA'];
			const filterList = mockBillingCountries.filter(country => !notWanted.includes(country.code)).map(c => c.code);

			helper({ hash: { filterList }, fn: stub });
			const context = stub.getCall(0).args[0];
			expect(context).to.not.have.property('ncfCountryGroups');
			expect(context).to.have.property('countries');

			expect(context.countries.map(c => c.code)).to.not.have.members(notWanted);

		});

	});

});

function generateCountryArray (length, { includeAllFrequent = true } = {}) {
	return Array.from(Array(length), (item, index) => ({
		code: `C-${index}`
	}))
	.concat(includeAllFrequent ? [{ code: 'GBR' }, { code: 'USA' }, { code: 'FRA' }, { code: 'CAN' }, { code: 'JPN' }] : []);
}
