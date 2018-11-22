const DISPLAY_NAME = 'FT.com';
const DOMAIN_NAME = 'www.ft.com';

const MERCHANT_ID = 'merchant.com.ft';
const MERCHANT_VALIDATION_URL = 'https://api.ft.com/idm/v1/apple-merchant-validation/validate';
const PAYMENT_METHOD = [{
	supportedMethods: 'https://apple.com/apple-pay',
	data: {
		version: 1,
		merchantIdentifier: MERCHANT_ID,
		merchantCapabilities: ['supports3DS'],
		supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
		countryCode: 'GB',
	}
}];

const TEST_MERCHANT_ID = 'merchant.test.env.apple.pay';
const TEST_MERCHANT_VALIDATION_URL = 'https://api-t.ft.com/idm/v1/apple-merchant-validation/validate';
const TEST_PAYMENT_METHOD = [{
	supportedMethods: 'https://apple.com/apple-pay',
	data: {
		version: 1,
		merchantIdentifier: TEST_MERCHANT_ID,
		merchantCapabilities: ['supports3DS'],
		supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
		countryCode: 'GB',
	}
}];

const PAYMENT_DETAILS = {
	total: {
		label: DISPLAY_NAME,
		amount: {
			value: 0.01,
			currency: 'GBP'
		},
	}
};

const PAYMENT_OPTIONS = {
	requestPayerName: false,
	requestPayerEmail: false,
	requestPayerPhone: false,
	requestShipping: false
};

/**
 * Light weight wrapper around PaymentRequest API for ApplePay
 * @example
 * // Setting up production
 * try {
 *     const applePay = new ApplePay(window);
 *     const canMakePayment = await applePay.canMakePayment();
 *     if (canMakePayment) {
 *         // Show payment button
 *     }
 * } catch (error) {
 *     // Browser may not support it
 * }
 *
 * // Use test by passing the test payment method
 * const applePay = new ApplePay(window, ApplePay.TEST_PAYMENT_METHOD);
 *
 * // On click of payment button you can updated payment details
 * try {
 *     const updatedPaymentDetails = ApplePay.getPaymentDetails(20.00, 'GBP', 'FT Standard');
 *     const response = await applePay.show(updatedPaymentDetails);
 *     // Send to Membership for fulfilment
 *     if (success) {
 *         response.complete('success');
 *     } else {
 *         response.complete('fail');
 *     }
 * } catch (error) {
 *     // Payment failed
 * }
 */
class ApplePay {
	/**
	 * Setup a Payment Request API request with Apple Pay defaults
	 * @param {object} window Browser window object
	 * @param {array} method PaymentRequest API payment methods array
	 * @param {object} details PaymentRequest API payment details object
	 * @param {object} options PaymentRequest API payment options object
	 * @throws If browser doesn't support PaymentRequest API
	 */
	constructor (window, method = PAYMENT_METHOD, details = PAYMENT_DETAILS, options = PAYMENT_OPTIONS) {
		this.window = window;
		this.method = method;
		this.details = details;
		this.options = options;
		this.request = new this.window.PaymentRequest(this.method, this.details, this.options);
	}

	/**
	 * Proxy call through to the request
	 * @return {promise<boolean>}
	 */
	canMakePayment () {
		return this.request.canMakePayment();
	}

	/**
	 * Display the payment screen to the user
	 * @param {object} paymentDetails Optional payment details object for update
	 * @return {promise<object>} Response object from apple pay
	 */
	show (paymentDetails) {
		// Work around to enable the update of payment details for safari
		// browsers as it seems not to be supported, regenerates PaymentRequest
		if (paymentDetails) {
			this.details = paymentDetails;
			this.request = new this.window.PaymentRequest(this.method, this.details, this.options);
		}
		this.request.onmerchantvalidation = event => this.handleMerchantValidation(event);
		return this.request.show();
	}

	/**
	 * Validate ourselves via membership
	 * @param {object} event
	 */
	async handleMerchantValidation (event) {
		const merchantId = ApplePay.getMerchantId(this.method);
		const url = ApplePay.getMerchantValidationUrl(merchantId);
		const data = {
			validationUrl: event.validationURL,
			displayName: DISPLAY_NAME,
			domainName: DOMAIN_NAME,
			merchantId
		};
		try {
			const response = await this.window.fetch(url, {
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(data)
			});
			return event.complete(response.json());
		} catch (error) {
			this.request.abort();
			throw error;
		}
	}

	/**
	 * Return merchant id from method or default to production id
	 * @param {array} method
	 * @return {string}
	 */
	static getMerchantId (methodArray = []) {
		const method = methodArray[0] || {};
		return method.data && method.data.merchantIdentifier || MERCHANT_ID;
	}

	/**
	 * Return merchant validation URL based on the merchant ID
	 * @param {string} merchantId
	 * @return {String}
	 */
	static getMerchantValidationUrl (merchantId) {
		if (merchantId === TEST_MERCHANT_ID) {
			return TEST_MERCHANT_VALIDATION_URL;
		}
		return MERCHANT_VALIDATION_URL;
	}

	/**
	 * Helper method to format payment details correctly
	 * @param {number} value Cost in 2 digit decimal number
	 * @param {string} currency ISO 3 digit currency code
	 * @param {string} label Product name
	 */
	static getPaymentDetails (value, currency, label) {
		return {
			total: {
				label,
				amount: {
					value,
					currency
				}
			}
		};
	}

	/**
	 * Expose the production merchant id
	 * @return {string}
	 */
	static get MERCHANT_ID () {
		return MERCHANT_ID;
	}

	/**
	 * Expose the production merchant validation url
	 * @return {string}
	 */
	static get MERCHANT_VALIDATION_URL () {
		return MERCHANT_VALIDATION_URL;
	}

	/**
	 * Expose production payment method
	 * @return {string}
	 */
	static get PAYMENT_METHOD () {
		return PAYMENT_METHOD;
	}

	/**
	 * Expose the test merchant id
	 * @return {string}
	 */
	static get TEST_MERCHANT_ID () {
		return TEST_MERCHANT_ID;
	}

	/**
	 * Expose the test merchant validation url
	 * @return {string}
	 */
	static get TEST_MERCHANT_VALIDATION_URL () {
		return TEST_MERCHANT_VALIDATION_URL;
	}

	/**
	 * Expose the test payment method
	 * @return {string}
	 */
	static get TEST_PAYMENT_METHOD () {
		return TEST_PAYMENT_METHOD;
	}
}

module.exports = ApplePay;
