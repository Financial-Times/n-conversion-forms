const expander = require('o-expander');

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
		this.$directDebitGuarantee = this.$paymentType.querySelector('.ncf #directDebitGuarantee');
		this.expander = expander.init(this.$directDebitGuarantee, {
			contentClassName: 'ncf__directdebit-guarantee-list',
			toggleSelector: '.ncf__directdebit-guarantee-toggle'
		});

		// Set up change handler to show panel and initialise the current panel
		this.onChange(this.showPanel.bind(this));
		this.showPanel();

		if (!this.$paymentType) {
			throw new Error('Please include the payment type partial on the page');
		}
	}

	/**
	 * Hides and removes from the DOM the payment type given
	 * @param {String} type Payment type to hide
	 */
	hide (type) {
		const container = this.$paymentType.querySelector(`#${type}`).parentElement;
		container.classList.add('n-ui-hide');
	}

	/**
	 * Show the payment type given, this will build the required HTML by
	 * cloning existing payment types
	 * @param {String} type Payment type to show
	 */
	show (type) {
		const container = this.$paymentType.querySelector(`#${type}`).parentElement;
		container.classList.remove('n-ui-hide');
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

	/**
	 * Show the payment types panel
	 */
	showPanel () {
		const type = this.getSelected();
		const content = this.$paymentType.querySelectorAll('.ncf__payment-type-panel');
		content.forEach(element => {
			if (element.classList.contains(`ncf__payment-type-panel--${type}`)) {
				element.classList.remove('n-ui-hide');
			} else {
				element.classList.add('n-ui-hide');
			}
		});
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
