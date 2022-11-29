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
	constructor(element) {
		if (!element) {
			throw new Error('Please supply the DOM element');
		}

		this.$form = element.querySelector('form.ncf');

		if (!this.$form.elements['deliveryOption']) {
			throw new Error(
				'Please include the delivery option partial on the page.'
			);
		}
	}

	/**
	 * Binds the given callback to the field's onchange event.
	 * @param {Function} callback The callback function to call when a change event occurs.
	 */
	handleDeliveryOptionChange(callback) {
		if (this.$form.elements['deliveryOption'].length === undefined) {
			this.$form.elements['deliveryOption'].addEventListener(
				'change',
				callback
			);
		} else {
			for (let option of [...this.$form.elements['deliveryOption']]) {
				option.addEventListener('change', callback);
			}
		}
	}

	/**
	 * Hide a specific radio input item.
	 */
	hideItem(itemId) {
		const labelNodes = this.$form.querySelectorAll(
			'.ncf__delivery-option__item'
		);
		const item = Array.from(labelNodes).find((node) => node.htmlFor === itemId);
		if (item) {
			item.classList.add('ncf__hidden');
		}
	}

	/**
	 * Show a specific radio input item.
	 */
	showItem(itemId) {
		const labelNodes = this.$form.querySelectorAll(
			'.ncf__delivery-option__item'
		);
		const item = Array.from(labelNodes).find((node) => node.htmlFor === itemId);
		if (item) {
			item.classList.remove('ncf__hidden');
		}
	}

	/**
	 * Mark an input item as checked
	 */
	checkItem(itemId) {
		const inputNodes = this.$form.elements['deliveryOption'];
		const item = Array.from(inputNodes).find((node) => node.id === itemId);
		if (item) {
			item.checked = true;
		}
	}
}

module.exports = DeliveryOption;
