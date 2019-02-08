const PaymentTerm = require('../../utils/payment-term');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();

describe('PaymentTerm', () => {
	let paymentTerm;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			querySelector: sandbox.stub(),
			getAttribute: sandbox.stub()
		};
		documentStub = {
			querySelector: sandbox.stub()
		};
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if nothing passed', () => {
			expect(() => {
				new PaymentTerm();
			}).to.throw();
		});

		it('should throw an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new PaymentTerm(documentStub);
			}).to.throw();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.returns(elementStub);
			paymentTerm = new PaymentTerm(documentStub);
		});

		describe('getSelected', () => {
			it('should throw an error if nothing selected', () => {
				elementStub.querySelector.returns(false);
				expect(() => {
					paymentTerm.getSelected();
				}).to.throw();
			});

			it('should return the value of the selected term', () => {
				elementStub.querySelector.returns(elementStub);
				paymentTerm.getSelected();
				expect(elementStub.getAttribute.calledWith('value')).to.be.true;
			});
		});
	});
});
