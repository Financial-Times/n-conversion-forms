/**
 * Utility for the `n-conversion-forms/partial/payment-term.html` partial
 * @example
 * const paymentTerm = new PaymentTerm(document);
 *
 * // Return the currently selected payment term
 * paymentTerm.getSelected();
 *
 * // Update the payment term options displayed
 * const options = [{
 * 	name: 'Name of term',
 * 	value: 'Value to send',
 * 	description: 'Can contain <strong>HTML</strong>'
 * }];
 * paymentTerm.updateOptions(options);
 */

const LABEL_TITLE_CLASS = '.ncf__payment-term__label--title';
const LABEL_DESCRIPTION_CLASS = '.ncf__payment-term__label--description';

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
		const checked = this.$paymentTerm.querySelector('input:checked');
		if (!checked) {
			throw new Error('No payment term has been selected');
		}
		return checked.getAttribute('value');
	}

	/**
	 * Register on change an event listener
	 * @param {Function} callback Called with event when changed
	 */
	onChange (callback=()=>{}) {
		return this.$paymentTerm.addEventListener('change', callback);
	}

	/**
	 * Update the payment term options
	 * @param {Array} options Array of objects contain terms information
	 */
	updateOptions (options) {
		const selected = this.getSelected();
		const inputToCopy = this.$paymentTerm.querySelector('input');
		const labelToCopy = this.$paymentTerm.querySelector('label');
		const container = inputToCopy.parentElement;

		// Reduce to create an array of new input and label elements
		const newElements = options.reduce((acc, option) => {
			const input = inputToCopy.cloneNode();
			input.setAttribute('id', option.value);
			input.setAttribute('value', option.value);
			input.checked = option.value === selected;

			const label = labelToCopy.cloneNode(true);
			label.setAttribute('for', option.value);
			label.querySelector(LABEL_TITLE_CLASS).innerText = option.name;
			label.querySelector(LABEL_DESCRIPTION_CLASS).innerHTML = option.description;

			return acc.concat([input, label]);
		}, []);

		// Remove existing
		this.$paymentTerm
			.querySelectorAll('input,label')
			.forEach(element => element.remove());

		// Add new elements
		newElements
			.forEach(element => container.insertBefore(element, container.lastElementChild));
	}
}

module.exports = PaymentTerm;
