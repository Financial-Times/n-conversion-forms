const { Period } = require('@financial-times/n-pricing');

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

const ITEM_CLASS = '.ncf__payment-term__item';
const VALUE_CLASS = '.ncf__payment-term__item input';
const PRICE_CLASS = '.ncf__payment-term__price';
const TRIAL_PRICE_CLASS = '.ncf__payment-term__trial-price';
const MONTHLY_PRICE_CLASS = '.ncf__payment-term__monthly-price';

class PaymentTerm {
	/**
	 * Initalise the PaymentTerm utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the paymentTermField element not found
	 */
	constructor(element) {
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
	getSelected() {
		const checked = this.$paymentTerm.querySelector('input:checked');
		if (!checked) {
			throw new Error('No payment term has been selected');
		}
		return checked.getAttribute('value');
	}

	/**
	 * Returns country code
	 * @return {string}
	 */
	getCountryCode() {
		return this.$paymentTerm.dataset.countryCode;
	}

	/**
	 * Update country code
	 * @return {string}
	 */
	updateCountryCode(countryCode) {
		this.$paymentTerm.dataset.countryCode = countryCode;
	}

	/**
	 * Returns the base amount for the selected payment term
	 * @return {Number}
	 * @throws If no payment term has been selected
	 */
	getBaseAmount() {
		const checked = this.$paymentTerm.querySelector('input:checked');
		if (!checked) {
			throw new Error('No payment term has been selected');
		}
		return checked.dataset.baseAmount;
	}
	/**
	 * Register on change an event listener
	 * @param {Function} callback Called with event when changed
	 */
	onChange(callback = () => {}) {
		return this.$paymentTerm.addEventListener('change', callback);
	}

	isValidPeriod(period) {
		try {
			// Period should throw an error if it is not properly provided
			// in order to validate it, we just send in case type is string
			new Period(typeof period === 'string' ? period : '');
			return true;
		} catch (e) {
			return false;
		}
	}

	/**
	 * Update the payment term options
	 * @param {Array} options Array of objects contain terms information
	 */
	updateOptions(options) {
		const terms = this.$paymentTerm.querySelectorAll(ITEM_CLASS);
		for (let i = 0; i < terms.length; i++) {
			const term = terms[i];
			const value = term.querySelector(VALUE_CLASS).value;
			const price = term.querySelector(PRICE_CLASS);
			const trialPrice = term.querySelector(TRIAL_PRICE_CLASS);
			const monthlyPrice = term.querySelector(MONTHLY_PRICE_CLASS);
			const update = options.find((option) => option.value === value);

			if (!update) {
				throw new Error(`Payment term update not found for "${value}"`);
			}

			const baseAmount = update.isTrial ? update.trialAmount : update.amount;
			term.setAttribute('data-base-amount', baseAmount);

			// Update prices if they are found in the term
			if (price) {
				price.innerHTML = update.price;
			}
			if (trialPrice) {
				trialPrice.innerHTML = update.trialPrice;
			}
			if (monthlyPrice && update.monthlyPrice) {
				monthlyPrice.innerHTML = update.monthlyPrice;
			}
		}
	}
}

module.exports = PaymentTerm;
