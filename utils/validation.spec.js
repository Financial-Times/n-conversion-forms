jest.mock('@financial-times/o-forms');
jest.mock('@financial-times/o-forms/src/js/input');
const OForms = require('@financial-times/o-forms');
const Input = require('@financial-times/o-forms/src/js/input').default;
const ValidationUtil = require('./validation');

describe('Validation - Util', () => {
	let validation;
	beforeEach(() => {
		document.body.innerHTML = `
			<!DOCTYPE html>
			<html>
			<head></head>
			<body>
				<form class="ncf"></form>
			</body>
			</html>`;

		validation = new ValidationUtil(document);
		jest.spyOn(validation, 'checkFormValidity');
		validation.init();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('calls oForms to setup client side validation', () => {
			expect(OForms.default.init).toHaveBeenCalled();
		});

		it('checks validation status on init', () => {
			expect(validation.checkFormValidity).toHaveBeenCalled();
		});

		it('has a $form property exposing the form element', () => {
			expect(validation.$form).toBeDefined();
		});
	});

	describe('init', () => {
		it('adds an event listener to required elements', () => {
			expect(
				validation.$requiredEls[0].input.addEventListener
			).toHaveBeenCalled();
		});

		it('binds to onbeforeunload by default', () => {
			expect(global.window.onbeforeunload).toBeDefined();
			expect(global.window.onbeforeunload).toBeInstanceOf(Function);
		});

		it('does not bind to onbeforeunload if mutePromptBeforeLeaving = true', () => {
			delete global.window.onbeforeunload;
			const validationTest = new ValidationUtil({
				mutePromptBeforeLeaving: true,
			});
			validationTest.init();

			expect(global.window.onbeforeunload).not.toBeDefined();
		});
	});

	describe('onbeforeunload', () => {
		it('returns null by default', () => {
			expect(global.window.onbeforeunload()).toBe(null);
		});

		it('returns true if the form has changed', () => {
			validation.formChanged = true;

			expect(global.window.onbeforeunload()).toBe(true);
		});
	});

	describe('checkElementValidity', () => {
		let $el;

		beforeEach(() => {
			$el = { foo: true };
		});

		it('does not call validateInput if custom validation fails', () => {
			jest.spyOn(validation, 'checkCustomValidation').mockReturnValue(false);
			validation.checkElementValidity($el);

			expect(Input).not.toHaveBeenCalled();
		});

		it('calls input.validate for the element.', () => {
			validation.checkElementValidity($el);

			expect(Input).toHaveBeenCalledWith($el);
		});
	});

	describe('checkFormValidity', () => {
		it('sets the form as invalid if there are invalid elements.', () => {
			validation.formValid = true;
			validation.$requiredEls[0].input.checkValidity.mockReturnValue(false);

			validation.checkFormValidity();

			expect(validation.formValid).toBe(false);
		});

		it('sets the form as valid if there are no invalid elements.', () => {
			validation.formValid = false;

			validation.checkFormValidity();

			expect(validation.formValid).toBe(true);
		});
	});

	describe('Custom Validation', () => {
		let field;

		beforeEach(() => {
			field = validation.oForms.formInputs.find(
				(el) => el.input.name === 'foo'
			);
		});

		describe('addCustomValidation', () => {
			it('stores a custom validation function', () => {
				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: jest.fn(),
				});
				expect(validation.customValidation.size).toBe(1);
			});

			it('throws if a custom validation function has already been specified for a particular field', () => {
				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: jest.fn(),
				});

				expect(() => {
					validation.addCustomValidation({
						errorMessage: 'Oops, something else custom went wrong!',
						field,
					});
				}).toThrow();
			});

			it('stores a custom validation function that will show a custom validation message when validation fails', async () => {
				jest.spyOn(validation, 'showCustomFieldValidationError');
				jest.spyOn(validation, 'clearCustomFieldValidationError');

				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: jest.fn().mockReturnValue(false),
				});

				// Run the stored custom validation function
				await validation.customValidation.get('foo')();

				expect(validation.showCustomFieldValidationError).toHaveBeenCalled();
				expect(
					validation.clearCustomFieldValidationError
				).not.toHaveBeenCalled();
			});

			it('stores a custom validation function that will clear a custom validation message when validation passes', async () => {
				jest.spyOn(validation, 'showCustomFieldValidationError');
				jest.spyOn(validation, 'clearCustomFieldValidationError');

				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: jest.fn().mockReturnValue(true),
				});

				// Run the stored custom validation function
				await validation.customValidation.get('foo')();

				expect(validation.clearCustomFieldValidationError).toHaveBeenCalled();
			});
		});

		describe('showCustomFieldValidationError', () => {
			let messageStub = { foo: 'bar' };

			it('adds the o-form--error class to the parent', () => {
				jest.spyOn(field.input.parentNode.classList, 'add');
				validation.showCustomFieldValidationError(field.input, messageStub);

				expect(field.input.parentNode.classList.add).toHaveBeenCalledWith(
					'o-forms-input--invalid'
				);
			});

			it('adds the message to the parent', () => {
				jest.spyOn(global.document, 'querySelector').mockReturnValue(null);
				validation.showCustomFieldValidationError(field.input, messageStub);

				expect(field.input.parentNode.insertBefore).toHaveBeenCalledWith(
					messageStub,
					null
				);
			});
		});

		describe('clearCustomFieldValidationError', () => {
			beforeEach(() => {
				validation.$form = document.createElement('form');
			});

			it('removes the message from the page', () => {
				jest
					.spyOn(validation.$form, 'querySelector')
					.mockReturnValue(field.input);
				validation.clearCustomFieldValidationError(field.input);

				expect(field.parentNode.removeChild).toHaveBeenCalledWith(field.input);
			});

			it('re-checks the element validity for standard validation rules', () => {
				jest.spyOn(validation, 'checkElementValidity');
				validation.clearCustomFieldValidationError(field.input);

				expect(validation.checkElementValidity).toHaveBeenCalledWith(
					field.input
				);
			});
		});
	});
});
