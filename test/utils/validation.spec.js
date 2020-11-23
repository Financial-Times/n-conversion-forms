const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const DomHelper = require('../helpers/dom');

let $form;
let checkboxAddEventListener;
let checkValidityStub;
let insertBeforeStub;
let removeChildStub;
let requiredElListener;
let sandbox;
let validation;

const createElement = (config) => {
	let el = DomHelper.createElement(config, sandbox);
	let parentNode = document.createElement('div');

	sandbox.stub(parentNode, 'insertBefore').value(insertBeforeStub);
	sandbox.stub(parentNode, 'removeChild').value(removeChildStub);
	sandbox.stub(el, 'parentNode').value(parentNode);

	return {
		input: el,
		...config,
	};
};

let validateInputStub = sinon.stub();
let formInputsStub = [];
let OFormsStub = {
	default: {
		init: sinon.stub().returns({
			formInputs: formInputsStub,
		}),
	},
};

let InputStub = sinon.stub().returns({
	validate: validateInputStub,
});

const Validation = proxyquire('../../utils/validation', {
	'o-forms': OFormsStub,
	'o-forms/src/js/input': {
		default: InputStub,
	},
});

describe('Validation', () => {
	before(() => {
		const dom = new JSDOM();
		global.window = dom.window;
		global.document = dom.window.document;
	});

	after(() => {
		delete global.window;
		delete global.document;
	});

	beforeEach(() => {
		$form = document.createElement('form');
		sandbox = sinon.createSandbox();

		checkboxAddEventListener = sandbox.stub();
		checkValidityStub = sandbox.stub();
		insertBeforeStub = sandbox.stub();
		removeChildStub = sandbox.stub();
		requiredElListener = sandbox.stub();

		sandbox.spy(document, 'addEventListener');
		sandbox.spy(OFormsStub.default.init, 'constructor');
		sandbox.stub(document, 'querySelector');

		document.querySelector.withArgs('form.ncf').returns($form);

		// Clear array before moving on to the next test
		formInputsStub.splice(0, formInputsStub.length);

		formInputsStub.push(
			...[
				createElement({
					name: 'foo',
					type: 'hidden',
					checkValidity: checkValidityStub,
				}),
				createElement({ name: 'bar', checkValidity: checkValidityStub }),
				createElement({
					name: 'baz',
					required: true,
					addEventListener: requiredElListener,
					checkValidity: checkValidityStub,
				}),
				createElement({
					name: 'qoo',
					required: true,
					addEventListener: requiredElListener,
					checkValidity: checkValidityStub,
				}),
				createElement({
					name: 'checkbox',
					type: 'checkbox',
					addEventListener: checkboxAddEventListener,
					required: true,
					checkValidity: checkValidityStub,
				}),
			]
		);

		validation = new Validation(document);
		sandbox.spy(validation, 'checkFormValidity');

		validation.init();
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should call oForms to setup client side validation', () => {
			expect(OFormsStub.default.init.called).to.be.true;
		});

		it('should have a $form property exposing the form element', () => {
			expect(validation.$form).to.deep.eq($form);
		});

		it('should check validation status on init', () => {
			expect(validation.checkFormValidity.called).to.be.true;
		});
	});

	describe('init', () => {
		it('should add an event listener to all required elements', () => {
			expect(requiredElListener.getCalls().length).to.equal(2);
		});

		it('should bind to onbeforeunload by default', () => {
			expect(global.window.onbeforeunload).to.exist;
			expect(typeof global.window.onbeforeunload).to.equal('function');
		});

		it('should not bind to onbeforeunload if mutePromptBeforeLeaving = true', () => {
			delete global.window.onbeforeunload;
			const validation2 = new Validation({ mutePromptBeforeLeaving: true });
			validation2.init();

			expect(global.window.onbeforeunload).to.be.undefined;
		});

		it('should call checkElementValidity when changing a checkbox', () => {
			expect(checkboxAddEventListener.getCalls().length).to.equal(1);
			// we have to check `bound ` because we pass it with `.bind(this)`
			expect(checkboxAddEventListener.getCall(0).args[1].name).to.equal(
				'bound checkElementValidity'
			);
		});
	});

	describe('onbeforeunload', () => {
		it('should return null by default', () => {
			expect(global.window.onbeforeunload()).to.be.null;
		});

		it('should return true if the form has changed', () => {
			validation.formChanged = true;

			expect(global.window.onbeforeunload()).to.be.true;
		});
	});

	describe('checkElementValidity', () => {
		let $el;

		beforeEach(() => {
			$el = { foo: true };
		});

		it('should not call validateInput if custom validation fails', () => {
			sandbox.stub(validation, 'checkCustomValidation').returns(false);
			validation.checkElementValidity($el);

			expect(InputStub.called).to.be.false;
		});

		it('should call input.validate for the element.', () => {
			validation.checkElementValidity($el);

			expect(InputStub.calledWithNew()).to.be.true;
			expect(InputStub.getCall(0).args[0]).to.equal($el);
		});
	});

	describe('checkFormValidity', () => {
		it('should set the form as invalid if there are invalid elements.', () => {
			validation.formValid = true;

			checkValidityStub.returns(false);

			validation.checkFormValidity();

			expect(validation.formValid).to.be.false;
		});

		it('should set the form as valid if there are no invalid elements.', () => {
			validation.formValid = false;

			checkValidityStub.returns(true);

			validation.checkFormValidity();

			expect(validation.formValid).to.be.true;
		});
	});

	context('Custom Validation', () => {
		let field;

		beforeEach(() => {
			field = createElement({ name: 'foo' });
		});

		describe('addCustomValidation', () => {
			it('should store a custom validation function', () => {
				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: sandbox.stub(),
				});
				expect(validation.customValidation.size).to.equal(1);
			});

			it('should throw if a custom validation function has already been specified for a particular field', () => {
				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: sandbox.stub(),
				});

				expect(() => {
					validation.addCustomValidation({
						errorMessage: 'Oops, something else custom went wrong!',
						field,
					});
				}).to.throw();
			});

			it('should store a custom validation function that will show a custom validation message when validation fails', async () => {
				sandbox.stub(validation, 'showCustomFieldValidationError');
				sandbox.stub(validation, 'clearCustomFieldValidationError');

				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: sandbox.stub().returns(false),
				});

				// Run the stored custom validation function
				await validation.customValidation.get('foo')();

				expect(validation.showCustomFieldValidationError.called).to.be.true;
				expect(validation.clearCustomFieldValidationError.called).to.be.false;
			});

			it('should store a custom validation function that will clear a custom validation message when validation passes', async () => {
				sandbox.stub(validation, 'showCustomFieldValidationError');
				sandbox.stub(validation, 'clearCustomFieldValidationError');

				validation.addCustomValidation({
					errorMessage: 'Oops, something custom went wrong!',
					field,
					validator: sandbox.stub().returns(true),
				});

				// Run the stored custom validation function
				await validation.customValidation.get('foo')();

				expect(validation.clearCustomFieldValidationError.called).to.be.true;
			});
		});

		describe('showCustomFieldValidationError', () => {
			let messageStub = { foo: 'bar' };

			it('adds the o-form--error class to the parent', () => {
				sandbox.spy(field.input.parentNode.classList, 'add');
				validation.showCustomFieldValidationError(field.input, messageStub);

				expect(
					field.input.parentNode.classList.add.getCall(0).args[0]
				).to.equal('o-forms-input--invalid');
			});
			it('adds the message to the parent', () => {
				global.document.querySelector.returns(null);
				validation.showCustomFieldValidationError(field.input, messageStub);

				expect(insertBeforeStub.getCall(0).args[0]).to.equal(messageStub);
			});
		});

		describe('clearCustomFieldValidationError', () => {
			it('removes the message from the page', () => {
				let fieldToRemove = createElement({ name: 'foo' });

				sandbox
					.stub(validation.$form, 'querySelector')
					.returns(fieldToRemove.input);
				validation.clearCustomFieldValidationError(fieldToRemove.input);

				expect(removeChildStub.getCall(0).args[0].outerHTML).to.equal(
					field.input.outerHTML
				);
			});
			it('re-checks the element validity for standard validation rules', () => {
				sandbox.spy(validation, 'checkElementValidity');
				validation.clearCustomFieldValidationError(field.input);

				expect(validation.checkElementValidity.getCall(0).args[0]).to.equal(
					field.input
				);
			});
		});
	});
});
