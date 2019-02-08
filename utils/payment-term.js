/**
 * Utility for the `n-conversion-forms/partial/payment-term.html` partial
 * @example
 * const paymentTerm = new PaymentTerm(document);
 *
 * // Show payment type
 * paymentType.show(PaymentType.APPLEPAY);
 *
 * // Hide payment type
 * paymentType.hide(PaymentType.CREDITCARD);
 */
class PaymentTerm {
	/**
	 * Initalise the PaymentTerm utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the paymentTermField element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.element = element;
		this.$paymentTerm = element.querySelector('.ncf #paymentTermField');

		if (!this.$paymentTerm) {
			throw new Error('Please include the payment term partial on the page');
		}
	}

	/**
	 * Returns the value of the currently selected item
	 * @return {String}
	 * @throws If nothing has been selected
	 */
	getSelected () {
		const checked = this.$paymentTerm.querySelector('input[checked]');
		if (!checked) {
			throw new Error('No payment term has been selected');
		}
		return checked.getAttribute('value');
	}
}

module.exports = PaymentTerm;
