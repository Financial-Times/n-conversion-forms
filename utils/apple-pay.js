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
 * // Use test by passing the test payment methods
 * const applePay = new ApplePay(window, ApplePay.TEST_PAYMENT_METHODS);
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
	 * @param {Window} window Browser window object
	 * @param {Array} methods PaymentRequest API payment methods array
	 * @param {Object} details PaymentRequest API payment details object
	 * @param {Object} options PaymentRequest API payment options object
	 * @throws If browser doesn't support PaymentRequest API
	 */
	constructor (window, methods = ApplePay.PAYMENT_METHODS, details = ApplePay.PAYMENT_DETAILS, options = ApplePay.PAYMENT_OPTIONS) {
		if (!window.PaymentRequest) {
			throw new Error('Browser does not support PaymentRequest API');
		}

		this.window = window;
		this.methods = methods;
		this.details = details;
		this.options = options;
		this.request = new this.window.PaymentRequest(this.method, this.details, this.options);
	}

	/**
	 * Proxy call through to the request
	 * @return {Promise<Boolean>}
	 */
	canMakePayment () {
		return this.request.canMakePayment();
	}

	/**
	 * Display the payment screen to the user
	 * @param {Object} paymentDetails Optional payment details object for update
	 * @return {Promise<Object>} Response object from apple pay
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
	 * @param {Object} event
	 */
	async handleMerchantValidation (event) {
		const merchantId = ApplePay.getMerchantId(this.method);
		const url = ApplePay.getMerchantValidationUrl(merchantId);
		const data = {
			validationUrl: event.validationURL,
			displayName: 'FT.com',
			domainName: 'www.ft.com',
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
	 * Return merchant id from methods or default to production id
	 * @param {Array} methods
	 * @return {String}
	 */
	static getMerchantId (methods = []) {
		const method = methods[0] || {};
		return method.data && method.data.merchantIdentifier || ApplePay.MERCHANT_ID;
	}

	/**
	 * Return merchant validation URL based on the merchant ID
	 * @param {String} merchantId
	 * @return {String}
	 */
	static getMerchantValidationUrl (merchantId) {
		if (merchantId === ApplePay.TEST_MERCHANT_ID) {
			return ApplePay.TEST_MERCHANT_VALIDATION_URL;
		}
		return ApplePay.MERCHANT_VALIDATION_URL;
	}

	/**
	 * Helper method to format payment details correctly
	 * @param {Number} value Cost in 2 digit decimal number
	 * @param {String} currency ISO 3 digit currency code
	 * @param {String} label Product name
	 */
	static getPaymentDetails (value, currency, label) {
		const details = ApplePay.PAYMENT_DETAILS;
		details.total.label = label;
		details.total.amount.value = value;
		details.total.amount.currency = currency;
		return details;
	}

	/**
	 * Expose the production merchant id
	 * @return {String}
	 */
	static get MERCHANT_ID () {
		return 'merchant.com.ft';
	}

	/**
	 * Expose the production merchant validation url
	 * @return {String}
	 */
	static get MERCHANT_VALIDATION_URL () {
		return 'https://api.ft.com/idm/v1/apple-merchant-validation/validate';
	}

	/**
	 * Expose production payment methods
	 * @return {Array}
	 */
	static get PAYMENT_METHODS () {
		return [{
			supportedMethods: 'https://apple.com/apple-pay',
			data: {
				version: 1,
				merchantIdentifier: 'merchant.com.ft',
				merchantCapabilities: ['supports3DS'],
				supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
				countryCode: 'GB',
			}
		}];
	}

	/**
	 * Default payment details
	 * @return {Object}
	 */
	static get PAYMENT_DETAILS () {
		return {
			total: {
				label: 'FT.com',
				amount: {
					value: 0.01,
					currency: 'GBP'
				},
			}
		};
	};

	/**
	 * Default payment options
	 * @return {Object}
	 */
	static get PAYMENT_OPTIONS () {
		return {
			requestPayerName: false,
			requestPayerEmail: false,
			requestPayerPhone: false,
			requestShipping: false
		};
	}

	/**
	 * Expose the test merchant id
	 * @return {String}
	 */
	static get TEST_MERCHANT_ID () {
		return 'merchant.test.env.apple.pay';
	}

	/**
	 * Expose the test merchant validation url
	 * @return {String}
	 */
	static get TEST_MERCHANT_VALIDATION_URL () {
		return 'https://api-t.ft.com/idm/v1/apple-merchant-validation/validate';
	}

	/**
	 * Expose the test payment methods
	 * @return {Array}
	 */
	static get TEST_PAYMENT_METHODS () {
		return [{
			supportedMethods: 'https://apple.com/apple-pay',
			data: {
				version: 1,
				merchantIdentifier: 'merchant.test.env.apple.pay',
				merchantCapabilities: ['supports3DS'],
				supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
				countryCode: 'GB',
			}
		}];
	}
}

module.exports = ApplePay;
