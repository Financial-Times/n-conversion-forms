const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();
const { expect } = require('chai');

const mockBillingCountries = [{ code: 'a'}, { code: 'b'}, { code: 'c'}, { code: 'd'}];
const helper = proxyquire('../../helpers/ncf-countries', {
	'n-common-static-data': {
		billingCountries: { countries: mockBillingCountries }
	}
});

describe('NCF Countries', () => {

	let stub;

	beforeEach(() => {
		stub = sinon.stub();
	});

	it('sets countries on the context', () => {

		helper({ hash: {}, fn: stub });
		const context = stub.getCall(0).args[0];
		expect(context).to.have.property('countries', mockBillingCountries);
	});

	it('filterList filters billingCountries', () => {
		const filterList = ['b', 'c'];
		helper({ hash: { filterList }, fn: stub });
		const context = stub.getCall(0).args[0];
		expect(context.countries).to.deep.equal([{ code: 'b'}, { code: 'c'}]);
		expect(context.countries).to.not.include([{ code: 'a'}, { code: 'd'}]);

	});

});
