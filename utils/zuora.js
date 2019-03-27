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
		this.overlay = new FormElement(window.document, '.ncf-zuora-blur-overlay');
		this.Z.setEventHandler('blur_mode_enabled', () => { this.overlay.show(); });
		this.Z.setEventHandler('blur_mode_disabled', () => { this.overlay.hide(); });
	}

	/**
	 * Will render the 3rd party Zuora iframe with client side validation and custom
	 * error messages.
	 * @param {Object} params Parameters for customizing this Payment Pages 2.0 form
	 * @param {Object} prePopulatedFields Parameters with field ids and values to be pre-populated on the form
	 * @param {Function} hostedPaymentPageCallback Handles only the error responses in Payment Page request from the Z.renderWithErrorHandler function
	 */
	render ({ params, prePopulatedFields, hostedPaymentPageCallback }) {
		/**
		 * Z.renderWithErrorHandler - Zuora 3rd party method
		 * @param {Object}    params - see parent function
		 * @param {Object}    prePopulatedFields - see parent function
		 * @param {Function}  hostedPaymentPageCallback - see parent function
		 * @param {Function}  anonymous - Zuora Custom Error Message Callback
		 */
		this.Z.renderWithErrorHandler(
			params,
			prePopulatedFields,
			hostedPaymentPageCallback,
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
