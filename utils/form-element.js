/**
 * Form element helper.
 * @example
 * new FormElement();
 *
 */
class FormElement {

	/**
	 * Constructor for the FormElement.
	 * @param {object} document The global document object
	 * @param {string} querySelector The selector for the main element used by this component.
	 */
	constructor (document, querySelector) {
		this.$document = document;

		if (!this.$document) {
			throw new Error('Please supply the document element');
		}

		this.$el = this.$document.querySelector(querySelector);

		if (!this.$el) {
			throw new Error('Please include the DOM element for this component on the page');
		}

		this.inputs = this.$el.querySelectorAll('input,select');
	}

	/**
	 * Hides the form element.
	 */
	hide () {
		this.$el.classList.add('n-ui-hide');
	}


	/**
	 * Shows the form element.
	 */
	show () {
		this.$el.classList.remove('n-ui-hide');
	}

	/**
	 * Disable any inputs or selects inside form element
	 */
	disable () {
		this.inputs.forEach(input => input.disabled = true);
	}

	/**
	 * Enable any inputs or selects inside form element
	 */
	enable () {
		this.inputs.forEach(input => input.disabled = false);
	}

}

module.exports = FormElement;
