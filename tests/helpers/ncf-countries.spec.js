const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();
const { expect } = require('chai');

const mockBillingCountries = [{ code: 'a'}, { code: 'b'}, { code: 'c'}, { code: 'd'}];
const helper = proxyquire('../../helpers/ncf-countries', {
	'n-common-static-data': {
		billingCountries: mockBillingCountries
	}
});

describe('NCF Countries', () => {

	let stub;

	beforeEach(() => {
		stub = sinon.stub();
	});

	it('sets commonData on the context if its not set', () => {
		const context = {};
		helper.call(context, { hash: {}, fn: stub });
		expect(context).to.have.property('commonData');
	});

	it('doesnt overwrite commonData if its already set', () => {
		const preExistingCommonData = 'test';
		const context = { commonData: preExistingCommonData };
		helper.call(context, { hash: {}, fn: stub });
		expect(context).to.have.property('commonData', preExistingCommonData);
	});

	it('calls the render function with the context', () => {
		const context = {};
		helper.call(context, { hash: {}, fn: stub });
		expect(stub.calledWith(context)).to.be.true;
	});

	it('assigns billingCountries to commonData', () => {
		const context = { };
		helper.call(context, { hash: {}, fn: stub });
		expect(context.commonData).to.have.property('billingCountries', mockBillingCountries);
	});

	it('filterList filters billingCountries', () => {
		const context = { };
		const filterList = ['b', 'c'];
		helper.call(context, { hash: { filterList }, fn: stub });
		expect(context.commonData.billingCountries).to.deep.equal([{ code: 'b'}, { code: 'c'}]);
		expect(context.commonData.billingCountries).to.not.include([{ code: 'a'}, { code: 'd'}]);

	});

});
