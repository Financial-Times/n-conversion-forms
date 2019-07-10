const OForms = require('o-forms');

class Validation {

	/**
	 * Set up the Validation utility
	 * @param {Boolean} mutePromptBeforeLeaving (default: false) Whether to prompt the user before leaving if there have been changes in any of the fields.
	 */
	constructor ({ mutePromptBeforeLeaving } = {}) {
		this.$form = document.querySelector('form.ncf');
		this.oForms = new OForms(this.$form);
		this.$formFields = this.oForms.findInputs().filter($el => $el.type !== 'hidden');
		this.$requiredEls = this.$formFields.filter($el => $el.required);
		this.formValid = false;
		this.formChanged = false;
		this.formSubmit = false;
		this.mutePromptBeforeLeaving = mutePromptBeforeLeaving || false;
		this.customValidation = new Map();
	}

	/**
	 * Initalise
	 */
	init () {
		if (!this.$form) return;
		for (const $el of this.$requiredEls) {
			if (/(checkbox)/gi.test($el.type)) {
				$el.addEventListener('change', this.checkElementValidity.bind(this, $el), false);
			} else {
				$el.addEventListener('blur', this.checkFormValidity.bind(this), false);
			}
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
		this.checkFormValidity();
	}

	/**
	 * Proxy method for oForms validateForm
	 * @param {Event} event DOM event
	 */
	validateForm (event) {
		this.oForms.validateForm(event);
	}

	/**
	 * Adds a custom validation function to a given field.
	 *
	 * @param {DOMElement} field The field the custom validation is being added on to.
	 * @param {Function} validator The function that will be run to determine whether the field is valid (needs to return `true` or `false`).
	 * @param {String} errorMessage The error message to display to the user should the validation fail.
	 */
	addCustomValidation ({ field, validator, errorMessage}) {
		if (this.customValidation.get(field.name)) {
			throw new Error(`Custom validation for ${field.name} already exists.`);
		}

		this.customValidation.set(field.name, () => {
			const id = `custom-validation-for-${field.name}`;
			const $message = document.createElement('div');

			$message.id = id;
			$message.className = 'o-forms__errortext ncf__custom-validation-error';
			$message.innerText = errorMessage;

			const isValid = validator();
			if (!isValid) {
				this.showCustomFieldValidationError(field, $message);
			} else {
				this.clearCustomFieldValidationError(field);
			}
		});
	}

	/**
	 * Displays a custom validation error message to the user.
	 *
	 * @param {DOMElement} $field The field for which to show a validation error.
	 * @param {DOMElement} $message The error message to display.
	 */
	showCustomFieldValidationError ($field, $message) {
		const $parent = $field.parentNode;
		const $oFormsErrorText = $parent.querySelector('.o-forms__errortext');

		$parent.classList.add('o-forms--error');

		if (!document.querySelector(`#custom-validation-for-${$field.name}`)) {
			// In order for this error to hang around after normal oForms validation happens it
			// 	needs to exist outside the context of the field.
			$parent.insertBefore($message, $field.nextSibling);
		}

		if ($oFormsErrorText && $oFormsErrorText.parentNode.className.indexOf('ncf__custom-validation-error') === -1) {
			// If there's an oForms error we need to hide it so that we can use the `o-forms--error` class
			//  on the container to highlight the field as invalid.
			$oFormsErrorText.style.display = 'none';
		}
	}

	/**
	 * Clears a previously displayed custom validation error.
	 *
	 * @param {DOMElement} $field The field related to the error that now needs to be cleared.
	 */
	clearCustomFieldValidationError ($field) {
		const $message = this.$form.querySelector(`#custom-validation-for-${$field.name}`);
		const $oFormsErrorText = $field.parentNode.querySelector('.o-forms__errortext');

		if ($message) {
			$message.parentNode.removeChild($message);
		}
		if ($oFormsErrorText) {
			$oFormsErrorText.style.display = null;
		}

		this.checkElementValidity($field);
	}

	/**
	 * Run custom validation (if any)
	 *
	 * @returns {Boolean} whether or not the custom validation passed.
	 */
	checkCustomValidation () {
		// Debounce this to prevent custom validation running again straight away
		// through the checkFormValidity function below.
		if (!this.debounceCustomValidation) {
			this.debounceCustomValidation = true;

			this.customValidation.forEach((validator) => {
				validator();
			});

			setTimeout(() => {
				delete this.debounceCustomValidation;
			}, 100);
		}

		return !document.querySelector('.ncf__custom-validation-error');
	}

	/**
	 * Checks a single elements validity.
	 */
	checkElementValidity ($el) {
		const passedCustomValidation = this.checkCustomValidation();

		// If field fails custom validation don't `validateInput` as it may pass standard validation
		if (passedCustomValidation) {
			// Make sure the input element has been updated (for example if this is from a label click for a checkbox).
			this.oForms.validateInput($el);
		}
	}

	/**
	 * Update the state of the form to reflect form validity.
	 */
	checkFormValidity () {
		const passedCustomValidation = this.checkCustomValidation();

		if (passedCustomValidation && this.getInvalidEls().length === 0) {
			this.formValid = true;
		} else {
			this.formValid = false;
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
