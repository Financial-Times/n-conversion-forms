const sandbox = require('sinon').createSandbox();
const proxyquire = require('proxyquire').noCallThru();
const { expect } = require('chai');

describe('ncf-countries', () => {
	let helper;
	let stub;
	let mockCountries;

	beforeEach(() => {
		stub = sandbox.stub();
		mockCountries = generateCountryArray(4, { includeAllFrequent: false });
		helper = proxyquire('../../helpers/ncf-countries', {
			'../utils/countries': proxyquire('../../utils/countries', {
				'n-common-static-data': {
					billingCountries: { countries: mockCountries }
				}
			})
		});
	});

	afterEach(() => {
		sandbox.reset();
	});

	describe('filter', () => {
		it('should not filter if not present', () => {
			helper({ hash: {}, fn: stub });
			const context = stub.getCall(0).args[0];

			expect(context.countries).to.deep.equal(mockCountries);
		});

		it('should not filter if not an array', () => {
			helper({ hash: { filterList: 'C-1' }, fn: stub });
			const context = stub.getCall(0).args[0];

			expect(context.countries).to.deep.equal(mockCountries);
		});

		it('should filter and return only countries in array', () => {
			helper({ hash: { filterList: ['C-1'] }, fn: stub });
			const context = stub.getCall(0).args[0];

			expect(context.countries).to.deep.equal([{ code: 'C-1'}]);
		});
	});

	describe('select', () => {
		it('should not mark any countries selected if no value passed', () => {
			helper({ hash: { }, fn: stub });
			const context = stub.getCall(0).args[0];

			context.countries.forEach(country => {
				expect(country).to.not.include({'selected': true});
			});
		});

		it('should not mark any countries selected if incorrect value passed', () => {
			helper({ hash: { value: 'Test' }, fn: stub });
			const context = stub.getCall(0).args[0];

			context.countries.forEach(country => {
				expect(country).to.not.include({'selected': true});
			});
		});

		it('should mark a country as selected if value matches code', () => {
			const value = 'C-2';
			helper({ hash: { value }, fn: stub });
			const context = stub.getCall(0).args[0];

			context.countries.forEach(country => {
				expect(country).to.include({'selected': country.code === value});
			});
		});
	});

	describe('group', () => {
		beforeEach(() => {
			mockCountries = generateCountryArray(100, { includeAllFrequent: true });
			helper = proxyquire('../../helpers/ncf-countries', {
				'../utils/countries': proxyquire('../../utils/countries', {
					'n-common-static-data': {
						billingCountries: { countries: mockCountries }
					}
				})
			});
		});

		it('should not group countries under limit', () => {
			mockCountries = generateCountryArray(10, { includeAllFrequent: true });
			helper = proxyquire('../../helpers/ncf-countries', {
				'../utils/countries': proxyquire('../../utils/countries', {
					'n-common-static-data': {
						billingCountries: { countries: mockCountries }
					}
				})
			});
			helper({ hash: { }, fn: stub });
			const context = stub.getCall(0).args[0];

			expect(context.countries[0]).to.not.have.property('label');
		});

		it('should not group if frequently used countries under limit', () => {
			helper({ hash: { filterList: ['CAN','FRA', 'JPN', 'USA'] }, fn: stub });
			const context = stub.getCall(0).args[0];

			expect(context.countries[0]).to.not.have.property('label');
		});

		it('should group countries over limits', () => {
			helper({ hash: { }, fn: stub });
			const context = stub.getCall(0).args[0];

			expect(context.countries[0]).to.have.property('label');
		});

		it('should sort the group of frequently used countries', () => {
			helper({ hash: { }, fn: stub });
			const context = stub.getCall(0).args[0];
			const correctOrder = ['GBR', 'USA', 'JPN', 'FRA', 'CAN'];
			const frequentlyUsed = context.countries[0].countries;

			frequentlyUsed.forEach((item, index) => {
				expect(correctOrder[index]).to.equal(item.code);
			});
		});

		it('it should select only one country if it exists in two places', () => {
			const value = 'GBR';
			helper({ hash: { value }, fn: stub });
			const context = stub.getCall(0).args[0];
			const frequentlyUsed = context.countries[0].countries;
			const alphabetical = context.countries[1].countries;

			expect(frequentlyUsed.find(item => item.code === value)).to.include({selected: true});
			expect(alphabetical.find(item => item.code === value)).to.include({selected: false});
		});
	});
});

function generateCountryArray (length, { includeAllFrequent = true } = {}) {
	return Array.from(Array(length), (item, index) => ({
		code: `C-${index}`
	}))
		.concat(includeAllFrequent ? [{ code: 'JPN' }, { code: 'FRA' }, { code: 'USA' }, { code: 'CAN' }, { code: 'GBR' }] : []);
}
