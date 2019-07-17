/**
 * Utility for the `n-conversion-forms/partial/billing-country.html` partial
 * @example
 * const billingCountry = new BillingCountry(document);
 *
 * // Get the value on change
 * billingCountry.onChange(() => {
 * 	const selected = billingCountry.getSelected();
 * });
 */
class BillingCountry {
	/**
	 * Initalise the BillingCountry utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the country element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.element = element;
		this.$billingCountry = element.querySelector('.ncf #billingCountry');

		if (!this.$billingCountry) {
			throw new Error('Please include the billing country partial on the page');
		}
	}

	/**
	 * Register an event listener
	 * @param {Function} callback Called with event when changed
	 */
	onChange (callback=()=>{}) {
		return this.$billingCountry.addEventListener('change', callback);
	}

	/**
	 * Returns the value of the currently selected item
	 * @return {String}
	 * @throws If nothing has been selected
	 */
	getSelected () {
		const selected = this.$billingCountry.options[this.$billingCountry.selectedIndex];
		if (!selected) {
			throw new Error('No country has been selected');
		}
		return selected.value;
	}
};

module.exports = BillingCountry;
