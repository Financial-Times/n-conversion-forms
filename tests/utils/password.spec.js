const Password = require('../../utils/password');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Password', () => {
	let password;
	let passwordElement;
	let checkboxElement;
	let sandbox;

	beforeEach(() => {
		passwordElement = { type: '' };
		checkboxElement = { addEventListener: function () {}, checked: false };
		password = new Password(passwordElement);
		sandbox = sinon.createSandbox();
		sandbox.spy(password, 'toggleVisibility');
		sandbox.spy(checkboxElement, 'addEventListener');
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if password element is not supplied', () => {
			expect(() => {
				new Password();
			}).to.throw();
		});

		it('should add event listener to checkbox if passed', () => {
			new Password(passwordElement, checkboxElement);
			expect(checkboxElement.addEventListener.calledOnce).to.be.true;
		});
	});

	describe('registerVisibilityCheckbox', () => {
		it('should throw an error if checkbox element is not supplied', () => {
			expect(() => {
				password.registerVisibilityCheckbox();
			}).to.throw();
		});

		it('should add addEventListener to checkbox', () => {
			password.registerVisibilityCheckbox(checkboxElement);
			expect(checkboxElement.addEventListener.calledOnce).to.be.true;
		});

		it('should call showPassword when control is checked', () => {
			let eventListenerCallback;
			checkboxElement.checked = true;
			checkboxElement.addEventListener = (type, callback) => eventListenerCallback = callback;

			password.registerVisibilityCheckbox(checkboxElement);
			eventListenerCallback();

			expect(password.toggleVisibility.calledOnce).to.be.true;
			expect(password.toggleVisibility.getCall(0).args[0]).to.be.true;
		});

		it('should call hidePassword when control is not checked', () => {
			let eventListenerCallback;
			checkboxElement.checked = false;
			checkboxElement.addEventListener = (type, callback) => eventListenerCallback = callback;

			password.registerVisibilityCheckbox(checkboxElement);
			eventListenerCallback();

			expect(password.toggleVisibility.calledOnce).to.be.true;
			expect(password.toggleVisibility.getCall(0).args[0]).to.be.false;
		});
	});

	describe('toggleVisibility', () => {
		it('should set the input type to text', () => {
			passwordElement.type = 'password';
			password.toggleVisibility(true);
			expect(passwordElement.type).to.equal('text');
		});

		it('should set the input type to password', () => {
			passwordElement.type = 'text';
			password.toggleVisibility(false);
			expect(passwordElement.type).to.equal('password');
		});
	});
});
