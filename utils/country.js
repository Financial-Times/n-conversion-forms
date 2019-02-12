/**
 * Utility for the `n-conversion-forms/partial/country.html` partial
 * @example
 * const country = new Country(document);
 *
 * // Get the value on change
 * country.onChange(() => {
 * 	const selected = country.getSelected();
 * });
 */
class Country {
	/**
	 * Initalise the Country utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the country element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.element = element;
		this.$country = element.querySelector('.ncf #country');

		if (!this.$country) {
			throw new Error('Please include the country partial on the page');
		}
	}

	/**
	 * Register an event listener
	 * @param {Function} callback Called with event when changed
	 */
	onChange (callback=()=>{}) {
		return this.$country.addEventListener('change', callback);
	}

	/**
	 * Returns the value of the currently selected item
	 * @return {String}
	 * @throws If nothing has been selected
	 */
	getSelected () {
		const selected = this.$country.options[this.$country.selectedIndex];
		if (!selected) {
			throw new Error('No country has been selected');
		}
		return selected.value;
	}
};

module.exports = Country;
