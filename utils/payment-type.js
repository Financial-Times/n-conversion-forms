/**
 * Utility for the `n-conversion-forms/partial/payment-type.html` partial
 * @example
 * const paymentType = new PaymentType(document);
 *
 * // Show payment type
 * paymentType.show(PaymentType.APPLEPAY);
 *
 * // Hide payment type
 * paymentType.hide(PaymentType.CREDITCARD);
 */
class PaymentType {
	/**
	 * Initalise the PaymentType utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the paymentTypeField element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.element = element;
		this.$paymentType = element.querySelector('.ncf #paymentTypeField');

		if (!this.$paymentType) {
			throw new Error('Please include the payment type partial on the page');
		}
	}

	/**
	 * Hides and removes from the DOM the payment type given
	 * @param {String} type Payment type to hide
	 */
	hide (type) {
		const input = this.$paymentType.querySelector(`#${type}`);
		const label = this.$paymentType.querySelector(`label[for=${type}]`);

		if (input) {
			input.remove();
		}
		if (label) {
			label.remove();
		}
	}

	/**
	 * Show the payment type given, this will build the required HTML by
	 * cloning existing payment types
	 * @param {String} type Payment type to show
	 */
	show (type) {
		const inputToCopy = this.$paymentType.querySelector('input');
		const labelToCopy = this.$paymentType.querySelector('label');
		const container = inputToCopy.parentElement;
		const input = inputToCopy.cloneNode();
		const label = labelToCopy.cloneNode();

		input.setAttribute('id', type);
		input.setAttribute('value', type);
		input.removeAttribute('checked');

		label.setAttribute('for', type);
		label.innerText = PaymentType.LABELS[type];

		container.append(input);
		container.append(label);
	}

	/**
	 * Display an error message on the paymentType
	 */
	displayError () {
		this.$paymentType.classList.add('o-forms--error');
	}

	/**
	 * Remove an error from display
	 */
	removeError () {
		this.$paymentType.classList.remove('o-forms--error');
	}

	/**
	 * Register on change an event listener
	 * @param {Function} callback Called with event when changed
	 */
	onChange (callback=()=>{}) {
		return this.$paymentType.addEventListener('change', callback);
	}

	/**
	 * Returns the value of the currently selected item
	 * @return {String}
	 * @throws If nothing has been selected
	 */
	getSelected () {
		const checked = this.$paymentType.querySelector('input:checked');
		if (!checked) {
			throw new Error('No payment type has been selected');
		}
		return checked.getAttribute('value');
	}

	static get LABELS () {
		const labels = {};

		labels[this.CREDITCARD] = 'Credit / Debit Card';
		labels[this.DIRECTDEBIT] = 'Direct debit';
		labels[this.PAYPAL] = 'Paypal';
		labels[this.APPLEPAY] = 'Apple Pay';

		return labels;
	}

	static get CREDITCARD () {
		return 'creditcard';
	}

	static get DIRECTDEBIT () {
		return 'directdebit';
	}

	static get PAYPAL () {
		return 'paypal';
	}

	static get APPLEPAY () {
		return 'applepay';
	}
};

module.exports = PaymentType;
