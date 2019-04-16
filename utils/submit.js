/**
 * Utility for the `n-conversion-forms/partial/payment-term.html` partial
 * @example
 * const submit = new Submit(document);
 *
 * // Update the button text
 * submit.updateText('Pay with Apple Pay');
 */

const SUBMIT_BUTTON_CLASS = '.ncf__button--submit';

class Submit {
	/**
	 * Initalise the submit utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the submit element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.element = element;
		this.$submit = element.querySelector(SUBMIT_BUTTON_CLASS);

		if (!this.$submit) {
			throw new Error('Please include the submit button partial on the page');
		}
	}

	/**
	 * Update the button text
	 * @param {String}
	 */
	updateText (newText) {
		if (!newText) throw new Error('Please supply a new text value');
		return this.$submit.innerHTML = newText;
	}
}

module.exports = Submit;
