/**
 * Utility for the `n-conversion-forms/partial/delivery-option.html` partial
 * @example
 * const deliveryOption = new DeliveryOption(document);
 */
class DeliveryOption {
	/**
	 * Initalise the Delivery Option utility
	 * @param {Element} element Usually the window.document
	 * @throws If the element not passed
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply the DOM element');
		}

		this.$form = element.querySelector('form.ncf');

		if (!this.$form.deliveryOption) {
			throw new Error(
				'Please include the delivery option partial on the page.'
			);
		}
	}

	/**
	 * Binds the given callback to the field's onchange event.
	 * @param {Function} callback The callback function to call when a change event occurs.
	 */
	handleDeliveryOptionChange (callback) {
		if (this.$form.deliveryOption.length === undefined) {
			this.$form.deliveryOption.addEventListener('change', callback);
		} else {
			for (let option of [...this.$form.deliveryOption]) {
				option.addEventListener('change', callback);
			}
		}
	}
}

module.exports = DeliveryOption;
