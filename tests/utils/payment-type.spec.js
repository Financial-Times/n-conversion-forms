const PaymentType = require('../../utils/payment-type');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();

describe('PaymentType', () => {
	let paymentType;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			remove: sandbox.stub(),
			append: sandbox.stub(),
			cloneNode: sandbox.stub(),
			setAttribute: sandbox.stub(),
			getAttribute: sandbox.stub(),
			querySelector: sandbox.stub()
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
				new PaymentType();
			}).to.throw();
		});

		it('should throw an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new PaymentType(documentStub);
			}).to.throw();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.returns(elementStub);
			elementStub.querySelector.returns(elementStub);
			paymentType = new PaymentType(documentStub);
		});

		describe('show', () => {
			beforeEach(() => {
				elementStub.parentElement = elementStub;
				elementStub.cloneNode.returns(elementStub);
			});

			it('should append two new elements', () => {
				paymentType.show(PaymentType.CREDITCARD);
				expect(elementStub.append.callCount).to.equal(2);
			});

			it('should set the correct id', () => {
				paymentType.show(PaymentType.CREDITCARD);
				expect(elementStub.setAttribute.calledWith('id', PaymentType.CREDITCARD)).to.be.true;
			});

			it('should set the correct value', () => {
				paymentType.show(PaymentType.CREDITCARD);
				expect(elementStub.setAttribute.calledWith('value', PaymentType.CREDITCARD)).to.be.true;
			});

			it('should set the correct for', () => {
				paymentType.show(PaymentType.CREDITCARD);
				expect(elementStub.setAttribute.calledWith('for', PaymentType.CREDITCARD)).to.be.true;
			});

			it('should set the correct label', () => {
				paymentType.show(PaymentType.CREDITCARD);
				expect(elementStub.innerText).to.equal(PaymentType.LABELS[PaymentType.CREDITCARD]);
			});
		});

		describe('hide', () => {
			it('should remove two elements', () => {
				paymentType.hide(PaymentType.PAYPAL);
				expect(elementStub.remove.callCount).to.equal(2);
			});

			it('should use the correct selector', () => {
				paymentType.hide(PaymentType.PAYPAL);
				expect(elementStub.querySelector.calledWithMatch(PaymentType.PAYPAL)).to.be.true;
			});

			it('should fail silently if the element doesn\'t exist', () => {
				elementStub.querySelector.returns(null);
				expect(() => { paymentType.hide(PaymentType.PAYPAL); }).not.to.throw();
			});
		});

		describe('getSelected', () => {
			it('should throw an error if nothing selected', () => {
				elementStub.querySelector.returns(false);
				expect(() => {
					paymentType.getSelected();
				}).to.throw();
			});

			it('should return the value of the selected term', () => {
				paymentType.getSelected();
				expect(elementStub.getAttribute.calledWith('value')).to.be.true;
			});
		});
	});
});
