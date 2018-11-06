const Payment = require('../../utils/payment');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Payment', () => {
	let window;
	let sandbox;
	let payment;
	let product;
	let request;
	let button;

	beforeEach(() => {
		request = {};
		button = { classList: { add: () => true, remove: () => true }, addEventListener: () => {} };
		window = { PaymentRequest: function () { return request; }, document: { querySelector: () => button } };
		product = {value: 1.00, currency: 'GBP', label: 'Testing'};

		sandbox = sinon.createSandbox();
		sandbox.spy(button.classList, 'add');
		sandbox.spy(button.classList, 'remove');
		sandbox.spy(button, 'addEventListener');
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('Other payment methods', () => {
		it('should throw an error', () => {
			expect(() => {
				new Payment(window, 'other', product);
			}).to.throw();
		});
	});

	describe('Apple Pay payment method', () => {

		describe('constructor', () => {
			it('should not setup the request if PaymentRequest not available', () => {
				window.PaymentRequest = null;
				expect(() => {
					new Payment(window, 'apple', product);
				}).to.throw();
			});

			it('should throw an error if the button not available', () => {
				window.document.querySelector = () => false;
				expect(() => {
					new Payment(window, 'apple', product);
				}).to.throw();
			});

			it('should register a onMerchantValidation handler', () => {
				payment = new Payment(window, 'apple', product);
				expect(payment.request.onMerchantValidation).to.equal(payment.onMerchantValidation);
			});
		});

		describe('showPaymentButton', () => {
			beforeEach(() => {
				payment = new Payment(window, 'apple', product);
			});

			it('should return false if browser can not make payment', async () => {
				request.canMakePayment = () => Promise.resolve(false);
				expect(await payment.showPaymentButton()).to.be.false;
			});

			it('should hide the payment button if browser can not make payment', async () => {
				request.canMakePayment = () => Promise.resolve(false);
				await payment.showPaymentButton();
				expect(button.classList.add.called).to.be.true;
			});

			it('should return true if browser can make payment', async () => {
				request.canMakePayment = () => Promise.resolve(true);
				expect(await payment.showPaymentButton()).to.be.true;
			});

			it('should show the payment button if can make payment', async () => {
				request.canMakePayment = () => Promise.resolve(true);
				await payment.showPaymentButton();
				expect(button.classList.remove.called).to.be.true;
			});

			it('should add a click handler if can make payment', async () => {
				request.canMakePayment = () => Promise.resolve(true);
				await payment.showPaymentButton();
				expect(button.addEventListener.called).to.be.true;
			});
		});

		describe('show', () => {
			it('@todo after membership integration');
		});

		describe('onMerchantValidation', () => {
			it('@todo after membership integration');
		});
	});

	describe('Static helpers', () => {
		describe('getButtonSelector', () => {
			it('should throw if method is not apple', () => {
				expect(() => {
					Payment.getButtonSelector('other');
				}).to.throw();
			});

			it('should return apple button selector', () => {
				expect(Payment.getButtonSelector('apple')).to.be.string;
			});
		});

		describe('getPaymentMethod', () => {
			it('should throw if method is not apple', () => {
				expect(() => {
					Payment.getPaymentMethod('other');
				}).to.throw();
			});

			it('should return apple payment method', () => {
				expect(Payment.getPaymentMethod('apple')).to.have.property('supportedMethods');
			});
		});

		describe('getPaymentDetails', () => {
			it('should format given values in payment details object', () => {
				const label = 'test';
				const value = 1.01;
				const currency = 'GBP';
				const details = Payment.getPaymentDetails(value, currency, label);

				expect(details.total.label).to.equal(label);
				expect(Object.values(details.total.amount)).to.deep.include(value);
				expect(details.displayItems[0].label).to.equal(label);
				expect(Object.values(details.displayItems[0].amount)).to.deep.include(currency);
			});
		});

		describe('getPaymentOptions', () => {
			it('should return payment options', () => {
				expect(Payment.getPaymentOptions()).to.be.a('object');
			});
		});
	});
});
