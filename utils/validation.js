const OForms = require('o-forms').default;
const Input = require('o-forms/src/js/input').default;

class Validation {

	/**
	 * Set up the Validation utility
	 * @param {Boolean} mutePromptBeforeLeaving (default: false) Whether to prompt the user before leaving if there have been changes in any of the fields.
	 */
	constructor ({ mutePromptBeforeLeaving } = {}) {
		this.$form = document.querySelector('form.ncf');
		this.oForms = OForms.init(this.$form);
		this.$requiredEls = this.oForms.formInputs
			.filter(({input}) => input.type !== 'hidden' && input.required);
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
			if (/(checkbox)/gi.test($el.input.type)) {
				$el.input.addEventListener('change', this.checkElementValidity.bind(this, $el.input), false);
			} else {
				$el.input.addEventListener('blur', this.checkFormValidity.bind(this), false);
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
		this.oForms.validateFormInputs(event);
		this.checkCustomValidation();
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

		this.customValidation.set(field.name, async () => {
			const id = `custom-validation-for-${field.name}`;
			const $message = document.createElement('div');

			$message.id = id;
			$message.className = 'o-forms-input__error ncf__custom-validation-error';
			$message.innerHTML = errorMessage;

			const isValid = await validator();
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
		/**
		 * - remove o-forms-input--valid class from $parent
		 */

		$field.setCustomValidity($message);

		const $parent = $field.parentNode;
		const $oFormsErrorText = $parent.querySelector('.o-forms-input__error');

		$parent.classList.remove('o-forms-input--valid');
		$parent.classList.add('o-forms-input--invalid');

		if (!document.querySelector(`#custom-validation-for-${$field.name}`)) {
			// In order for this error to hang around after normal oForms validation happens it
			// 	needs to exist outside the context of the field.
			$parent.insertBefore($message, $field.nextSibling);
		}

		if ($oFormsErrorText && $oFormsErrorText.parentNode.className.indexOf('ncf__custom-validation-error') === -1) {
			// If there's an oForms error we need to hide it so that we can use the `o-forms-input--invalid` class
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
		$field.setCustomValidity('');
		const $message = this.$form.querySelector(`#custom-validation-for-${$field.name}`);
		const $oFormsErrorText = $field.parentNode.querySelector('.o-forms-input__error');

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
		if (this.customValidation.size > 0 && !this.debounceCustomValidation) {
			this.debounceCustomValidation = true;

			this.customValidation.forEach(async validator => {
				await validator();
			});

			setTimeout(() => {
				delete this.debounceCustomValidation;
			}, 500);
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
			const input = new Input($el);
			// Make sure the input element has been updated (for example if this is from a label click for a checkbox).
			input.validate();
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
		return this.$requiredEls.filter($el => !$el.input.checkValidity()).map($el => $el.input);
	}

}

module.exports = Validation;
