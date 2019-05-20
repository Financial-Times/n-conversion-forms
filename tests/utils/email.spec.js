const Email = require('../../utils/email');
const expect = require('chai').expect;
const fetchMock = require('fetch-mock');
const sinon = require('sinon');

describe('Email', () => {
	let document;
	let emailElement;
	let emailConfirmElement;
	let emailConfirmFieldElement;
	let csrfFieldElement;
	let sandbox;

	beforeEach(() => {
		emailElement = { addEventListener: ()=>{} };
		emailConfirmElement = { addEventListener: ()=>{} };
		emailConfirmFieldElement = { classList: { add: ()=>{}, remove: ()=>{} } };
		csrfFieldElement = { value: '1234567890' };

		document = {
			querySelector: (selector) => {
				if (selector.indexOf('#emailConfirmField') !== -1) {
					return emailConfirmFieldElement;
				} else if (selector.indexOf('#emailConfirm') !== -1) {
					return emailConfirmElement;
				} else if (selector.indexOf('#csrfToken') !== -1) {
					return csrfFieldElement;
				} else {
					return emailElement;
				}
			}
		};
		sandbox = sinon.createSandbox();
		sandbox.spy(emailElement, 'addEventListener');
		sandbox.spy(emailConfirmElement, 'addEventListener');
		sandbox.spy(emailConfirmFieldElement.classList, 'add');
		sandbox.spy(emailConfirmFieldElement.classList, 'remove');
	});

	afterEach(() => {
		fetchMock.restore();
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if document element isn\'t passed in.', () => {
			expect(() => {
				new Email();
			}).to.throw();
		});

		it('should throw an error if email confirm element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => { };
				new Email(document);
			}).to.throw();
		});

		it('should throw an error if email element does not exist on the page', () => {
			expect(() => {
				document.querySelector = (selector) => {
					if (selector.indexOf('#emailConfirmField') !== -1) {
						return emailConfirmFieldElement;
					}
				};
				new Email(document);
			}).to.throw();
		});

		it('should add event listener to email element', () => {
			new Email(document);
			expect(emailElement.addEventListener.calledOnce).to.be.true;
		});

		it('should add addEventListener to email confirm element', () => {
			new Email(document);
			expect(emailConfirmElement.addEventListener.calledOnce).to.be.true;
		});
	});

	describe('checkMatch', () => {
		it('should add the error class if the fields don\'t match', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = 'pass';

			let email = new Email(document);
			email.checkMatch();

			expect(emailConfirmFieldElement.classList.add.calledOnce).to.be.true;
		});

		it('should remove the error class if the fields match', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = 'password';

			let email = new Email(document);
			email.checkMatch();

			expect(emailConfirmFieldElement.classList.remove.calledOnce).to.be.true;
		});

		it('should only check if valid if emailConfirm field has a value.', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = '';

			let email = new Email(document);
			email.checkMatch();

			expect(emailConfirmFieldElement.classList.add.calledOnce).to.be.false;
			expect(emailConfirmFieldElement.classList.remove.calledOnce).to.be.false;
		});
	});

	describe('Email Exists', () => {
		const url = '/foo';
		let email;
		let onFound;
		let onNotFound;

		beforeEach(() => {
			onFound = sinon.stub();
			onNotFound = sinon.stub();

			email = new Email(document);
		});

		it('should add an additional event listener to the email field', () => {
			email.registerEmailExistsCheck(url, onFound, onNotFound);
			// Check it's called twice since by default we bind a change listener in the constructor.
			expect(emailElement.addEventListener.calledTwice).to.be.true;
		});

		it('should return the handler function so it can potentially be unregistered', () => {
			let handler = email.registerEmailExistsCheck(url, onFound, onNotFound);

			expect(typeof handler).to.equal('function');
		});

		it('should call the onNotFound callback if the email field has no value.', () => {
			email.handleEmailExistsChange(url, onFound, onNotFound);
			expect(onFound.called).to.be.false;
			expect(onNotFound.called).to.be.true;
		});

		it('should call the specified url with the correct params if the email field has a value', () => {
			fetchMock.mock(url, 200);

			emailElement.value = 'test@example.com';
			email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(fetchMock.called(url)).to.be.true;
			expect(fetchMock.lastOptions(url)).to.deep.equal({
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: 'test@example.com',
					csrfToken: '1234567890'
				})
			});
		});

		it('should call the onNotFound callback if the call to the url fails', async () => {
			fetchMock.mock(url, 500);

			emailElement.value = 'test@example.com';
			await email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(onFound.called).to.be.false;
			expect(onNotFound.called).to.be.true;
		});

		it('should call the onFound callback if the user exists', async () => {
			fetchMock.mock(url, 'true');

			emailElement.value = 'test@example.com';
			await email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(onFound.called).to.be.true;
			expect(onNotFound.called).to.be.false;
		});

		it('should call the onNotFound callback if the user doesn\'t exist', async () => {
			fetchMock.mock(url, 'false');

			emailElement.value = 'test@example.com';
			await email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(onFound.called).to.be.false;
			expect(onNotFound.called).to.be.true;
		});
	});

});
