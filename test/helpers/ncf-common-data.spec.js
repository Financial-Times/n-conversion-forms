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

describe('ncf-common-data', () => {

	let stub;

	beforeEach(() => {
		stub = sinon.stub();
	});

	it('imports and exports the properties as defined', () => {
		const hash = { import: 'example', export: 'whatever' };
		helper({ hash, fn: stub });
		const context = stub.getCall(0).args[0];
		expect(context).to.have.property(hash.export, mockCommonModule[hash.import]);
	});

	it('can import nested properties', () => {
		const hash = { import: 'nested.property', export: 'whatever' };
		helper({ hash, fn: stub });
		const context = stub.getCall(0).args[0];
		expect(context).to.have.property(hash.export, mockCommonModule.nested.property);
	});

});
