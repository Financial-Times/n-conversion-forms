const Password = require('../../utils/password');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Password', () => {
	let password;
	let document;
	let passwordElement;
	let checkboxElement;
	let sandbox;

	beforeEach(() => {
		passwordElement = { type: '' };
		checkboxElement = { addEventListener: () => {}, checked: false };
		document = {
			querySelector: (selector) => {
				if (selector.indexOf('#password') !== -1) {
					return passwordElement;
				} else {
					return checkboxElement;
				}
			},
		};
		password = new Password(document);
		sandbox = sinon.createSandbox();
		sandbox.spy(password, 'toggleMask');
		sandbox.spy(checkboxElement, 'addEventListener');
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it("should throw an error if document element isn't passed in.", () => {
			expect(() => {
				new Password();
			}).to.throw();
		});

		it('should throw an error if password element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => {};
				new Password(document);
			}).to.throw();
		});
	});

	describe('registerMaskCheckbox', () => {
		it('should add event listener to checkbox if it exists', () => {
			new Password(document);
			expect(checkboxElement.addEventListener.calledOnce).to.be.true;
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
