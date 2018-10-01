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
		sandbox.spy(password, 'toggleMask');
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

	describe('registerMaskCheckbox', () => {
		it('should throw an error if checkbox element is not supplied', () => {
			expect(() => {
				password.registerMaskCheckbox();
			}).to.throw();
		});

		it('should add addEventListener to checkbox', () => {
			password.registerMaskCheckbox(checkboxElement);
			expect(checkboxElement.addEventListener.calledOnce).to.be.true;
		});

		it('should call toggleMask with false when control is checked', () => {
			let eventListenerCallback;
			checkboxElement.checked = true;
			checkboxElement.addEventListener = (type, callback) => eventListenerCallback = callback;

			password.registerMaskCheckbox(checkboxElement);
			eventListenerCallback();

			expect(password.toggleMask.getCall(0).args[0]).to.be.false;
		});

		it('should call toggleMask with true when control is not checked', () => {
			let eventListenerCallback;
			checkboxElement.checked = false;
			checkboxElement.addEventListener = (type, callback) => eventListenerCallback = callback;

			password.registerMaskCheckbox(checkboxElement);
			eventListenerCallback();

			expect(password.toggleMask.getCall(0).args[0]).to.be.true;
		});
	});

	describe('toggleMask', () => {
		it('should set the input type to text', () => {
			passwordElement.type = 'password';
			password.toggleMask(false);
			expect(passwordElement.type).to.equal('text');
		});

		it('should set the input type to password', () => {
			passwordElement.type = 'text';
			password.toggleMask(true);
			expect(passwordElement.type).to.equal('password');
		});
	});
});
