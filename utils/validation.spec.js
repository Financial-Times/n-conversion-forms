jest.mock('@financial-times/o-forms', () => {
	return {
		default: {
			init: jest.fn().mockImplementation(() => {
				return { formInputs: [] };
			}),
		},
	};
});
jest.mock('@financial-times/o-forms/src/js/input', () => {
	return {
		default: {
			validate: jest.fn(),
		},
	};
});
const OForms = require('@financial-times/o-forms');
//const Input = require('@financial-times/o-forms/src/js/input');
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
	});

	describe('constructor', () => {
		it('should call oForms to setup client side validation', () => {
			expect(OForms.default.init).toHaveBeenCalled();
		});

		it.skip('should check validation status on init', () => {
			// TODO test in progress
			expect(validation.checkFormValidity).toHaveBeenCalled();
		});
	});
});
