const OForms = require('o-forms');

class Validation {

	/**
	 * Set up the Validation utility
	 * @param {Boolean} mutePromptBeforeLeaving (default: false) Whether to prompt the user before leaving if there have been changes in any of the fields.
	 */
	constructor ({ mutePromptBeforeLeaving } = {}) {
		this.$form = document.querySelector('form.ncf');
		this.$submit = this.$form.querySelector('[type="submit"]');
		this.oForms = new OForms(this.$form);
		this.$formFields = this.oForms.findInputs().filter($el => $el.type !== 'hidden');
		this.$requiredEls = this.$formFields.filter($el => $el.required);
		this.formValid = false;
		this.formChanged = false;
		this.formSubmit = false;
		this.mutePromptBeforeLeaving = mutePromptBeforeLeaving || false;
	}

	/**
	 * Initalise
	 */
	init () {
		if (!this.$form.length) return;

		this.$submit.disabled = true;

		for (const $el of this.$requiredEls) {
			$el.addEventListener('blur', this.checkFormValidity.bind(this), false);
		}

		this.$form.addEventListener('change', () => {
			this.formChanged = true;
		});

		this.$form.addEventListener('submit', () => {
			this.formSubmit = true;
		});

		if (!this.mutePromptBeforeLeaving) {
			window.onbeforeunload = () => {
				// Prompt the user about leaving in case they have changes they might lose.
				return this.formChanged && !this.formSubmit || null;
			};
		}
	}

	/**
	 * Update the state of the form to reflect form validity.
	 */
	checkFormValidity () {
		if (this.getInvalidEls().length === 0) {
			this.formValid = true;
			this.$submit.disabled = false;
		} else {
			this.formValid = false;
			this.$submit.disabled = true;
		}
	}

	/**
	 * Return the invalid fields on the form.
	 * @returns {DOMElements} The array-like containing the invalid form elements.
	 */
	getInvalidEls () {
		return this.$requiredEls.filter($el => !$el.checkValidity());
	}

}

module.exports = Validation;
