const customiseZuoraError = require('./zuora-error-map');
const FormElement = require('./form-element');
const PaymentType = require('./payment-type');
/**
 * Wrapper for the 3rd party Zuora library
 *
 * The library is inserted via a script tag in partials/zuora.html.
 *
 * 'Z' is the global of the 3rd party Zuora lib, its methods:
 * Z.submit                  submit the form, will trigger Z.runAfterRender*
 * Z.sendErrorMessageToHpm   send errors to display within the Zuora iframe
 * Z.setEventHandler         provide a handler for Direct Debit agreement checkbox in iframe
 * Z.renderWithErrorHandler  render + client side validation of iframe, then Z.runAfterRender*
 * Z.runAfterRender          run after Z.renderWithErrorHandler. *will also trigger on submit IF using Z.renderWithErrorHandler
 *
 * see docs for more: https://knowledgecenter.zuora.com/CA_Commerce/G_Hosted_Commerce_Pages/B_Payment_Pages_2.0/N_Error_Handling_for_Payment_Pages_2.0/Customize_Error_Messages_for_Payment_Pages_2.0#Render_Payment_Pages_2.0_with_Custom_Error_Handling
 *
 * @class
 */

class Zuora {
	constructor (window) {
		this.Z = window.Z;

		// `blur_mode_(enabled|disabled)` are for the DD confirmation dialog.
		this.overlay = new FormElement(window.document, '.ncf__zuora-payment-overlay');
		this.Z.setEventHandler('blur_mode_enabled', () => { this.overlay.show(); });
		this.Z.setEventHandler('blur_mode_disabled', () => { this.overlay.hide(); });
	}

	/**
	 * Will render the 3rd party Zuora iframe with client side validation and custom
	 * error messages.
	 * @param {Object} params Parameters for customizing this Payment Pages 2.0 form
	 * @param {Object} prePopulatedFields Parameters with field ids and values to be pre-populated on the form
	 * @param {Function} renderCallback A function that gets called after the form is rendered.
	 */
	render ({ params, prePopulatedFields = {}, renderCallback=()=>{} }) {
		// Using an undocumented Zuora method to attach a render callback for the iframe.
		// This method is called once when the iframe is rendered but gets removed for subsequent renderings.
		// In the Zuora code https://static.zuora.com/Resources/libs/hosted/1.3.1/zuora.js
		// it's used for handling errors but is currently not used anywhere within their code for this.
		this.Z.runAfterRender(renderCallback.bind(this));

		/**
		 * Z.renderWithErrorHandler - Zuora 3rd party method
		 * @param {Object}    params - see parent function
		 * @param {Object}    prePopulatedFields - see parent function
		 * @param {Function}  anonymous - Meant to run after init, but it doesn't seem to work ¯\_(ツ)_/¯
		 * @param {Function}  anonymous - Handles only the error responses in Payment Page request from the Z.renderWithErrorHandler function.
		 */
		this.Z.renderWithErrorHandler(
			params,
			prePopulatedFields,
			()=>{},
			(key, code, message) => {
				// Generate our custom error messages and send them to the HPM
				const errorMessage = customiseZuoraError.generateCustomErrorMessage(key, code, message);
				this.Z.sendErrorMessageToHpm(key, errorMessage);
			}
		);
	}

	/**
	 * Will attempt to submit the 3rd party Zuora iframe form and
	 * reject if the user refuses the Direct Debit mandate confirmation.
	 * @param {String} paymentType Type of payment being used
	 * @returns {Promise} Resolves when the submission has occurred, rejects if there was an error.
	 */
	submit (paymentType) {
		return new Promise((resolve, reject) => {
			// Only handle credit card and direct debit payments
			if (paymentType !== PaymentType.CREDITCARD && paymentType !== PaymentType.DIRECTDEBIT) {
				return reject(new ZuoraErrorInvalidPaymentType());
			}

			this.Z.validate(validation => {
				// Reject with an error on validation failure
				if (!validation.success) {
					return reject(new ZuoraErrorValidation());
				}

				// Submit the information to Zuora
				this.Z.submit();

				if (paymentType === PaymentType.DIRECTDEBIT) {
					// Wait for the direct debit confirmation before resolving
					this.onDirectDebitConfirmation(result => {
						if (result === true) {
							resolve(true);
						} else {
							reject(new ZuoraErrorMandateCancel());
						}
					});
				} else {
					resolve(true);
				}
			});
		});
	}

	/**
	 * Call a provided function upon the value of the direct debit
	 * agreement checkbox changing (inside the 3rd party Zuora iframe).
	 * @param {Function} callback - the callback to fire upon change
	 */
	onAgreementCheckboxChange (callback) {
		// Zuora 3rd party method, returns response to callback
		this.Z.setEventHandler('agreement_checked', () => {
			callback(true);
		});
		this.Z.setEventHandler('agreement_unchecked', () => {
			callback(false);
		});
	}

	/**
	 * Call a provided function upon the confirmation or cancellation
	 * of the direct debit mandate (inside the 3rd party Zuora iframe).
	 * @param {Function} callback - the callback to fire upon confirmation.
	 */
	onDirectDebitConfirmation (callback) {
		// Zuora 3rd party method, returns response to callback
		this.Z.setEventHandler('mandate_confirmed', () => {
			callback(true);
		});
		this.Z.setEventHandler('mandate_cancelled', () => {
			callback(false);
		});
	}

	/**
	 * Expose ZuoraErrorValidation
	 */
	static get ZuoraErrorValidation () {
		return ZuoraErrorValidation;
	}

	/**
	 * Expose ZuoraErrorMandateCancel
	 */
	static get ZuoraErrorMandateCancel () {
		return ZuoraErrorMandateCancel;
	}

	/**
	 * Expose ZuoraErrorInvalidPaymentType
	 */
	static get ZuoraErrorInvalidPaymentType () {
		return ZuoraErrorInvalidPaymentType;
	}
}

/**
 * Error classes
 */
class ZuoraErrorValidation extends Error {};
class ZuoraErrorMandateCancel extends Error {};
class ZuoraErrorInvalidPaymentType extends Error {};

module.exports = Zuora;
