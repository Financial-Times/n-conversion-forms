const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

let expanderInstance = 'expanderInstance';
let initStub = sinon.stub().returns(expanderInstance);
let OExpanderStub = {
	init: initStub
};
let FormElementStub = sinon.stub();

const DirectDebitGuarantee = proxyquire('../../utils/direct-debit-guarantee', {
	'./form-element': FormElementStub,
	'o-expander': OExpanderStub
});

describe('DirectDebitGuarantee', () => {
	let document = 'document';
	let directDebitGuarantee;

	beforeEach(() => {
		sandbox = sinon.createSandbox();
		directDebitGuarantee = new DirectDebitGuarantee(document);
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should call FormElement parent class', () => {
			expect(FormElementStub.calledWithNew()).to.be.true;
		});

		it('should call initialise the expander', () => {
			expect(initStub.called).to.be.true;
		});

		it('should have an expander property exposing the expander element', () => {
			expect(directDebitGuarantee.expander).to.deep.eq(expanderInstance);
		});
	});

});
