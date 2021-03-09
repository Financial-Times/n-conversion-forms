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
			throw new Error(
				'Please include the DOM element for this component on the page'
			);
		}

		this.inputs = this.$el.querySelectorAll('input,select');
	}

	/**
	 * Hides the form element.
	 */
	hide () {
		this.$el.classList.add('ncf__hidden');
	}

	/**
	 * Shows the form element.
	 */
	show () {
		this.$el.classList.remove('ncf__hidden');
	}

	/**
	 * Disable any inputs or selects inside form element
	 */
	disable () {
		for (let i = 0; i < this.inputs.length; i++) {
			this.inputs[i].disabled = true;
		}
	}

	/**
	 * Enable any inputs or selects inside form element
	 */
	enable () {
		for (let i = 0; i < this.inputs.length; i++) {
			this.inputs[i].disabled = false;
		}
	}

	/**
	 * Get the value of the form element
	 * Assumes the first input or select is what's required
	 */
	value () {
		return this.$el.querySelector('input,select').value;
	}

	/**
	 * Make firts input element required
	 */
	required () {
		if (this.inputs && this.inputs.length) {
			this.inputs[0].required = true;
		}
		this.$el.classList.remove('o-forms-field--optional');
	}

	/**
	 * Make firts input element not required (optional)
	 */
	optional () {
		if (this.inputs && this.inputs.length) {
			this.inputs[0].required = false;
		}
		this.$el.classList.add('o-forms-field--optional');
	}
}

module.exports = FormElement;
