const ApplePay = require('./apple-pay');

describe('Apple Pay', () => {
	let request;
	let window;
	let event;
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

		jest.spyOn(request, 'canMakePayment');
		jest.spyOn(request, 'show');
		jest.spyOn(window, 'PaymentRequest');
		jest.spyOn(window, 'fetch');
		jest.spyOn(event, 'complete');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('public methods', () => {
		describe('constructor', () => {
			it('throws an error if PaymentRequest not available', () => {
				window.PaymentRequest = null;
				expect(() => {
					new ApplePay(window);
				}).toThrow();
			});

			it('creates the PaymentRequest with the defaults', () => {
				new ApplePay(window);
				expect(window.PaymentRequest).toHaveBeenCalledWith(
					ApplePay.PAYMENT_METHODS,
					ApplePay.PAYMENT_DETAILS,
					ApplePay.PAYMENT_OPTIONS
				);
			});
		});

		describe('canMakePayment', () => {
			it('proxies canMakePayment to the request', () => {
				applePay = new ApplePay(window);
				applePay.canMakePayment();
				expect(request.canMakePayment).toHaveBeenCalled();
			});
		});

		describe('show', () => {
			it('proxies show to the request', () => {
				applePay = new ApplePay(window);
				applePay.show();
				expect(request.show).toHaveBeenCalled();
			});

			it('does not create new request if no details passed', () => {
				applePay = new ApplePay(window);
				applePay.show();
				expect(window.PaymentRequest).toHaveBeenCalledTimes(1);
			});

			it('creates new request if new details passed', () => {
				applePay = new ApplePay(window);
				applePay.show({ total: { label: 'new' } });
				expect(window.PaymentRequest).toHaveBeenCalledTimes(2);
			});

			it('creates new request with right parameters', () => {
				applePay = new ApplePay(window);
				applePay.show({ total: { label: 'new' } });
				expect(window.PaymentRequest).toHaveBeenCalledWith(
					applePay.methods,
					applePay.details,
					applePay.options
				);
			});

			it('setup onmerchantvalidation method', () => {
				delete request.onmerchantvalidation;
				applePay = new ApplePay(window);
				applePay.show();
				expect(request.onmerchantvalidation).toBeInstanceOf(Function);
			});
		});

		describe('handleMerchantValidation', () => {
			it('uses the production merchant validation URL by default', () => {
				applePay = new ApplePay(window);
				applePay.handleMerchantValidation(event);
				expect(window.fetch).toHaveBeenCalledWith(
					ApplePay.MERCHANT_VALIDATION_URL,
					expect.anything()
				);
			});

			it('uses the test merchant validation URL', () => {
				applePay = new ApplePay(window, ApplePay.TEST_PAYMENT_METHODS);
				applePay.handleMerchantValidation(event);
				expect(window.fetch).toHaveBeenCalledWith(
					ApplePay.TEST_MERCHANT_VALIDATION_URL,
					expect.anything()
				);
			});

			it('calls event.complete with response', async () => {
				applePay = new ApplePay(window);
				await applePay.handleMerchantValidation(event);
				expect(event.complete).toHaveBeenCalled();
			});
		});
	});

	describe('static methods', () => {
		describe('getMerchantId', () => {
			it('returns default merchant id', () => {
				expect(ApplePay.getMerchantId()).toEqual(expect.any(String));
			});

			it('returns default merchant id if methods has no data', () => {
				const methods = [{}];
				expect(ApplePay.getMerchantId(methods)).toEqual(expect.any(String));
			});

			it('returns default merchant id if methods data has not got one', () => {
				const methods = [{ data: {} }];
				expect(ApplePay.getMerchantId(methods)).toEqual(expect.any(String));
			});

			it('returns merchant id from methods data', () => {
				const methods = [{ data: { merchantIdentifier: 'test' } }];
				expect(ApplePay.getMerchantId(methods)).toEqual('test');
			});
		});

		describe('getMerchantValidationUrl', () => {
			it('returns production merchant validation url', () => {
				expect(ApplePay.getMerchantValidationUrl(ApplePay.MERCHANT_ID)).toEqual(
					ApplePay.MERCHANT_VALIDATION_URL
				);
			});

			it('returns a differnt merchant validation url for test merchant', () => {
				expect(
					ApplePay.getMerchantValidationUrl(ApplePay.TEST_MERCHANT_ID)
				).toEqual(ApplePay.TEST_MERCHANT_VALIDATION_URL);
			});

			it('defaults to the production merchant validation url', () => {
				expect(ApplePay.getMerchantValidationUrl()).toEqual(
					ApplePay.MERCHANT_VALIDATION_URL
				);
			});
		});

		describe('getPaymentDetails', () => {
			it('formats given values in payment details object', () => {
				const label = 'test';
				const value = 1.01;
				const currency = 'GBP';
				const details = ApplePay.getPaymentDetails(value, currency, label);

				expect(details.total.label).toEqual(label);
				expect(details.total.amount).toEqual({ value, currency });
			});
		});
	});
});
