/**
 * Utility for the `n-conversion-forms/partial/delivery-address-type.html` partial
 * @example
 * const deliveryAddressType = new DeliveryAdressType(document, fieldId);
 */
class DeliveryAdressType {
	/**
	 * Initalise the DeliveryAdressType utility
	 * @param {Element} element Usually the window.document
	 * @param {String} fieldId The field ID of the component
	 * @throws If the document not passed
	 * @throws When the country element not found
	 */
	constructor (element, fieldId = 'deliveryAddressTypeField') {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.element = element;
		this.$deliveryAddressType = element.querySelector(`.ncf #${fieldId}`);

		if (!this.$deliveryAddressType) {
			throw new Error('Please include the delivery address type on the page');
		}
	}

	/**
	 * Returns the value of the currently selected item
	 * @return {String}
	 * @throws If nothing has been selected
	 */
	getSelected () {
		const checked = this.$deliveryAddressType.querySelector('input:checked');
		if (!checked) {
			throw new Error('No address type has been selected');
		}
		return checked.value;
	}

	/**
	 * Register an event listener
	 * @param {Function} callback Called with event when changed
	 */
	onChange (callback) {
		return typeof callback === 'function' && this.$deliveryAddressType.addEventListener('change', callback);
	}
}

module.exports = DeliveryAdressType;
