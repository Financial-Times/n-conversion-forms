const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

let findInputsStub = sinon.stub();
let OFormsStub = sinon.stub().returns({
	findInputs: findInputsStub
});

const Validation = proxyquire('../../utils/validation', {
	'o-forms': OFormsStub
});

global.document = {};
global.window = {};

describe('Validation', () => {
	let document;
	let formElement;
	let requiredElListener;
	let submitElement;
	let sandbox;
	let checkValidityStub;
	let validation;

	beforeEach(() => {
		submitElement = {};
		formElement = {
			length: 1,
			addEventListener: () => {},
			querySelector: () => submitElement
		};
		global.document.querySelector = () => formElement;
		requiredElListener = sinon.stub();
		checkValidityStub = sinon.stub();
		sandbox = sinon.createSandbox();
		sandbox.spy(formElement, 'addEventListener');
		sandbox.spy(OFormsStub, 'constructor');
		findInputsStub.returns([
			{ name: 'foo', type: 'hidden' },
			{ name: 'bar' },
			{ name: 'baz', required: true, addEventListener: requiredElListener, checkValidity: checkValidityStub },
			{ name: 'qoo', required: true, addEventListener: requiredElListener, checkValidity: checkValidityStub }
		]);

		validation = new Validation(document);
		validation.init();
	});

	afterEach(() => {
		delete global.window.onbeforeunload;
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should call oForms to setup client side validation', () => {
			expect(OFormsStub.calledWithNew()).to.be.true;
		});

		it('should have a $form property exposing the form element', () => {
			expect(validation.$form).to.deep.eq(formElement);
		});

		it('should check validation status on init', () => {
			expect(checkValidityStub.called).to.be.true;
		});
	});

	describe('init', () => {
		it('should disable the submit button', () => {
			expect(validation.$submit.disabled).to.be.true;
		});

		it('should add an event listener to all required elements', () => {
			expect(requiredElListener.calledTwice).to.be.true;
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

	describe('checkFormValidity', () => {
		it('should disable the submit button and set the form as invalid if there are invalid elements.', () => {
			validation.formValid = true;
			validation.$submit.disabled = false;

			checkValidityStub.returns(false);
			validation.checkFormValidity();

			expect(validation.formValid).to.be.false;
			expect(validation.$submit.disabled).to.be.true;
		});

		it('should enable the submit button and set the form as valid if there are invalid elements.', () => {
			validation.formValid = false;
			validation.$submit.disabled = true;

			checkValidityStub.returns(true);
			validation.checkFormValidity();

			expect(validation.formValid).to.be.true;
			expect(validation.$submit.disabled).to.be.false;
		});
	});

});
