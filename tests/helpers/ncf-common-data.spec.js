const sinon = require('sinon');
const proxyquire = require('proxyquire').noCallThru();
const { expect } = require('chai');

const mockCommonModule = {
	example: 'example',
	another: 'sample',
	nested: {
		property: 'no-problem'
	}
};
const helper = proxyquire('../../helpers/ncf-common-data', {
	'n-common-static-data': mockCommonModule
});

describe('NCF Common Data', () => {

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

	it('imports and exports the properties as defined', () => {
		const context = {};
		const hash = { import: 'example', export: 'whatever' };
		helper.call(context, { hash, fn: stub });
		expect(context.commonData).to.have.property(hash.export, mockCommonModule[hash.import]);
	});

	it('can import nested properties', () => {
		const context = {};
		const hash = { import: 'nested.property', export: 'whatever' };
		helper.call(context, { hash, fn: stub });
		expect(context.commonData).to.have.property(hash.export, mockCommonModule.nested.property);
	});

});
