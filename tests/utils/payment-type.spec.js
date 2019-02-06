const PaymentType = require('../../utils/payment-type');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();

describe('PaymentType', () => {
	let element;
	let paymentTypeField;
	let paymentType;
	let document;

	beforeEach(() => {
		paymentTypeField = {
			querySelector: () => element,
			append: () => {}
		};
		element = {
			remove: () => {},
			cloneNode: () => element,
			setAttribute: () => {},
			parentElement: paymentTypeField
		};
		document = {
			querySelector: () => {
				return paymentTypeField;
			}
		};
		paymentType = new PaymentType(document);
		sandbox.spy(paymentTypeField, 'append');
		sandbox.spy(paymentTypeField, 'querySelector');
		sandbox.spy(element, 'remove');
		sandbox.spy(element, 'setAttribute');
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if window not passed', () => {
			expect(() => {
				new PaymentType();
			}).to.throw();
		});

		it('should throw an error if element not passed', () => {
			expect(() => {
				document.querySelector = () => false;
				new PaymentType(document);
			}).to.throw();
		});
	});

	describe('show', () => {
		it('should append two new elements', () => {
			paymentType.show(PaymentType.CREDITCARD);
			expect(paymentTypeField.append.callCount).to.equal(2);
		});

		it('should set the correct id', () => {
			paymentType.show(PaymentType.CREDITCARD);
			expect(element.setAttribute.calledWith('id', PaymentType.CREDITCARD)).to.be.true;
		});

		it('should set the correct value', () => {
			paymentType.show(PaymentType.CREDITCARD);
			expect(element.setAttribute.calledWith('value', PaymentType.CREDITCARD)).to.be.true;
		});

		it('should set the correct for', () => {
			paymentType.show(PaymentType.CREDITCARD);
			expect(element.setAttribute.calledWith('for', PaymentType.CREDITCARD)).to.be.true;
		});

		it('should set the correct label', () => {
			paymentType.show(PaymentType.CREDITCARD);
			expect(element.innerText).to.equal(PaymentType.LABELS[PaymentType.CREDITCARD]);
		});
	});

	describe('hide', () => {
		it('should remove two elements', () => {
			paymentType.hide(PaymentType.PAYPAL);
			expect(element.remove.callCount).to.equal(2);
		});

		it('should use the correct selector', () => {
			paymentType.hide(PaymentType.PAYPAL);
			expect(paymentTypeField.querySelector.calledWithMatch(PaymentType.PAYPAL)).to.be.true;
		});
	});
});
