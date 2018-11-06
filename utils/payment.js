const FAILURE = 'failure';
const SUCCESS = 'success';
const METHOD_APPLE_PAY = 'apple';
const SELECTOR_APPLE_PAY = '.apple-pay-button';
const CLASS_HIDDEN = 'o-normalise-visually-hidden';

/**
 * Validate ourselves with Apple through Membership and get a payment session token
 * @param {string} url Merchant validation URL
 * @return {promise<string>} session token
 */
async function fetchPaymentSession (url) {
	// Call Membership with the URL so they can validate session
	const sessionToken = await fetch('membership', url);
	return sessionToken;
}

/**
 * Process the response from Apple Pay with Membership
 * @param {object} response Apple Pay response
 * @return {promise<string>} `success` or `failure`
 */
async function processResponse (response) {
	// Call Membership with the response so they can return a status
	try {
		const status = await fetch('membership', response);
		return status ? SUCCESS : FAILURE;
	} catch (e) {
		return FAILURE;
	}
}

/**
 * Payment wrapper for Payment Request API interaction
 * @example
 * // Create a payment instance
 * try {
 *     const product = {value: 1.00, currency: 'GBP', label: 'Standard FT'};
 *     const payment = new Payment(window, Payment.METHOD_APPLE_PAY, product);
 *     const shown = await payment.showPaymentButton();
 *     if (!shown) {
 *         // User can't make a payment for example no card on account
 *     }
 * } catch (e) {
 *     // Payment Request API not supported or payment button not found
 * }
 */
class Payment {
	/**
	 * Check the Payment Request API is available and the methods button is available
	 * @param {Window} window
	 * @param {string} method
	 * @param {number} value Decimal price
	 * @param {string} currency ISO 3 digit currency code
	 * @param {string} label Name for what's being sold
	 * @throws If the payment button is not found
	 */
	constructor (window, method, {value, currency, label}) {
		if (!window.PaymentRequest) {
			// @todo for method='apple' fallback to using Apple Pay JS instead?
			throw new Error('Browser does not support Payment Request API');
		}

		// Create the payment request
		this.request = new window.PaymentRequest(
			Payment.getPaymentMethod(method),
			Payment.getPaymentDetails(value, currency, label),
			Payment.getPaymentOptions()
		);

		// Setup payment button
		this.paymentButton = window.document.querySelector(Payment.getButtonSelector(method));
		if (!this.paymentButton) {
			throw new Error('Payment button not within HTML');
		}

		// Add merchant validation listener (needed for ApplePay)
		this.request.onMerchantValidation = this.onMerchantValidation;
	}

	/**
	 * Display the payment button and attach click handler
	 * @return {promise<boolean>} Whether successful
	 */
	async showPaymentButton () {
		const canMakePayment = await this.request.canMakePayment();
		if (!canMakePayment) {
			this.paymentButton.classList.add(CLASS_HIDDEN);
			return false;
		}
		this.paymentButton.classList.remove(CLASS_HIDDEN);
		this.paymentButton.addEventListener('click', e => {
			e.preventDefault();
			this.show();
		});
		return true;
	}

	/**
	 * Call the show method on the request and process the response
	 */
	async show () {
		const response = await this.request.show();
		try {
			const status = await processResponse(response);
			response.complete(status);
		} catch (e) {
			// Handle errors
			response.complete(FAILURE);
		}
	}

	/**
	 * Handle merchant validation
	 * @param {object} event
	 */
	onMerchantValidation (event) {
		const sessionPromise = fetchPaymentSession(event.validationURL);
		event.complete(sessionPromise);
	}

	/**
	 * Apple Pay payment method
	 */
	static get METHOD_APPLE_PAY () {
		return METHOD_APPLE_PAY;
	}

	/**
	 * Return the DOM selector for the payment button
	 * @param {string} name `apple` is only supported currently
	 */
	static getButtonSelector (name) {
		if (name !== METHOD_APPLE_PAY) {
			throw new Error('Only Apple Pay is supported currently');
		}
		return SELECTOR_APPLE_PAY;
	}

	/**
	 * Return the requested payment method
	 * @param {string} name `apple` is only supported currently
	 */
	static getPaymentMethod (name) {
		if (name !== METHOD_APPLE_PAY) {
			throw new Error('Only Apple Pay is supported currently');
		}
		return {
			supportedMethods: 'https://apple.com/apple-pay',
			data: {
				version: 3,
				merchantIdentifier: 'merchant.com.example',
				merchantCapabilities: ['supports3DS', 'supportsCredit', 'supportsDebit'],
				supportedNetworks: ['amex', 'discover', 'masterCard', 'visa'],
				countryCode: 'US',
			}
		};
	}

	/**
	 * Generate the payment details object
	 * @param {number} value Decimal price
	 * @param {string} currency ISO 3 digit currency code
	 * @param {string} label Name for what's being sold
	 * @return {object}
	 */
	static getPaymentDetails (value, currency, label) {
		return {
			total: {
				label: label,
				amount: { value, currency },
			},
			displayItems: [{
				label: label,
				amount: { value, currency},
			}]
		};
	}

	/**
	 * Return the default payment options
	 * @return {object}
	 */
	static getPaymentOptions () {
		return {
			requestPayerName: false,
			requestPayerEmail: false,
			requestPayerPhone: false,
			requestShipping: false
		};
	}
}

module.exports = Payment;
