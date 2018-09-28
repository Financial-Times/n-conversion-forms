const ShowPassword = require('../../utils/show-password');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('ShowPassword', () => {
	let password;
	let control;
	let sandbox;
	let showPassword;

	beforeEach(() => {
		password = { type: '' };
		control = { addEventListener: function () {}, checked: false };
		showPassword = new ShowPassword(password, control);
		sandbox = sinon.createSandbox();
		sandbox.spy(showPassword, 'showPassword');
		sandbox.spy(showPassword, 'hidePassword');
		sandbox.spy(control, 'addEventListener');
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if password not supplied', () => {
			expect(() => {
				new ShowPassword();
			}).to.throw();
		});

		it('should throw an error if control not supplied', () => {
			expect(() => {
				new ShowPassword(password);
			}).to.throw();
		});

		it('should add a change event listener on the control', () => {
			new ShowPassword(password, control);
			expect(control.addEventListener.calledOnce).to.be.true;
			expect(control.addEventListener.getCall(0).args[0]).to.equal('change');
		});
	});

	describe('onChange', () => {
		it('should call showPassword when control is checked', () => {
			control.checked = true;
			showPassword.onChange();
			expect(showPassword.showPassword.calledOnce).to.be.true;
			expect(showPassword.hidePassword.calledOnce).to.be.false;
		});

		it('should call hidePassword when control is not checked', () => {
			control.checked = false;
			showPassword.onChange();
			expect(showPassword.showPassword.calledOnce).to.be.false;
			expect(showPassword.hidePassword.calledOnce).to.be.true;
		});
	});

	describe('showPassword', () => {
		it('should set the input type to text', () => {
			password.type = 'password';
			showPassword.showPassword();
			expect(password.type).to.equal('text');
		});
	});

	describe('hidePassword', () => {
		it('should set the input type to password', () => {
			password.type = 'text';
			showPassword.hidePassword();
			expect(password.type).to.equal('password');
		});
	});
});
