const ApplePay = require('../../utils/apple-pay');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Apple Pay', () => {
	let request;
	let window;
	let event;
	let sandbox;
	let applePay;

	beforeEach(() => {
		request = { canMakePayment: function () {}, show: function () {} };
		window = {
			PaymentRequest: function () {
				return request;
			},
			fetch: function () {
				return Promise.resolve({ json: function () {} });
			},
		};
		event = { complete: function () {} };

		sandbox = sinon.createSandbox();
		sandbox.spy(request, 'canMakePayment');
		sandbox.spy(request, 'show');
		sandbox.spy(window, 'PaymentRequest');
		sandbox.spy(window, 'fetch');
		sandbox.spy(event, 'complete');
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('public methods', () => {
		describe('constructor', () => {
			it('should throw an error if PaymentRequest not available', () => {
				window.PaymentRequest = null;
				expect(() => {
					new ApplePay(window);
				}).to.throw();
			});

			it('should create the PaymentRequest with the defaults', () => {
				new ApplePay(window);
				expect(
					window.PaymentRequest.calledOnceWith(
						ApplePay.PAYMENT_METHODS,
						ApplePay.PAYMENT_DETAILS,
						ApplePay.PAYMENT_OPTIONS
					)
				).to.be.true;
			});
		});

		describe('canMakePayment', () => {
			it('should proxy canMakePayment to the request', () => {
				applePay = new ApplePay(window);
				applePay.canMakePayment();
				expect(request.canMakePayment.called).to.be.true;
			});
		});

		describe('show', () => {
			it('should proxy show to the request', () => {
				applePay = new ApplePay(window);
				applePay.show();
				expect(request.show.called).to.be.true;
			});

			it('should not create new request if no details passed', () => {
				applePay = new ApplePay(window);
				applePay.show();
				expect(window.PaymentRequest.callCount).to.equal(1);
			});

			it('should create new request if new details passed', () => {
				applePay = new ApplePay(window);
				applePay.show({ total: { label: 'new' } });
				expect(window.PaymentRequest.callCount).to.equal(2);
			});

			it('should create new request with right parameters', () => {
				applePay = new ApplePay(window);
				applePay.show({ total: { label: 'new' } });
				expect(
					window.PaymentRequest.calledWith(
						applePay.methods,
						applePay.details,
						applePay.options
					)
				).to.be.true;
			});

			it('should setup onmerchantvalidation method', () => {
				delete request.onmerchantvalidation;
				applePay = new ApplePay(window);
				applePay.show();
				expect(request.onmerchantvalidation).to.be.a('function');
			});
		});

		describe('handleMerchantValidation', () => {
			it('should use the production merchant validation URL by default', () => {
				applePay = new ApplePay(window);
				applePay.handleMerchantValidation(event);
				expect(window.fetch.calledOnceWith(ApplePay.MERCHANT_VALIDATION_URL)).to
					.be.true;
			});

			it('should use the test merchant validation URL', () => {
				applePay = new ApplePay(window, ApplePay.TEST_PAYMENT_METHODS);
				applePay.handleMerchantValidation(event);
				expect(
					window.fetch.calledOnceWith(ApplePay.TEST_MERCHANT_VALIDATION_URL)
				).to.be.true;
			});

			it('should call event.complete with response', async () => {
				applePay = new ApplePay(window);
				await applePay.handleMerchantValidation(event);
				expect(event.complete.called).to.be.true;
			});
		});
	});

	describe('static methods', () => {
		describe('getMerchantId', () => {
			it('should return default merchant id', () => {
				expect(ApplePay.getMerchantId()).to.be.a('string');
			});

			it('should return default merchant id if methods has no data', () => {
				const methods = [{}];
				expect(ApplePay.getMerchantId(methods)).to.be.a('string');
			});

			it("should return default merchant id if methods data hasn't got one", () => {
				const methods = [{ data: {} }];
				expect(ApplePay.getMerchantId(methods)).to.be.a('string');
			});

			it('should return merchant id from methods data', () => {
				const methods = [{ data: { merchantIdentifier: 'test' } }];
				expect(ApplePay.getMerchantId(methods)).to.equal('test');
			});
		});

		describe('getMerchantValidationUrl', () => {
			it('should return production merchant validation url', () => {
				expect(
					ApplePay.getMerchantValidationUrl(ApplePay.MERCHANT_ID)
				).to.equal(ApplePay.MERCHANT_VALIDATION_URL);
			});

			it('should return a differnt merchant validation url for test merchant', () => {
				expect(
					ApplePay.getMerchantValidationUrl(ApplePay.TEST_MERCHANT_ID)
				).to.equal(ApplePay.TEST_MERCHANT_VALIDATION_URL);
			});

			it('should default to the production merchant validation url', () => {
				expect(ApplePay.getMerchantValidationUrl()).to.equal(
					ApplePay.MERCHANT_VALIDATION_URL
				);
			});
		});

		describe('getPaymentDetails', () => {
			it('should format given values in payment details object', () => {
				const label = 'test';
				const value = 1.01;
				const currency = 'GBP';
				const details = ApplePay.getPaymentDetails(value, currency, label);

				expect(details.total.label).to.equal(label);
				expect(Object.values(details.total.amount)).to.deep.include(value);
				expect(Object.values(details.total.amount)).to.deep.include(currency);
			});
		});
	});
});
