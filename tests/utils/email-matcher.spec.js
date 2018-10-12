const EmailMatcher = require('../../utils/email-matcher');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('EmailMatcher', () => {
	let document;
	let emailElement;
	let emailConfirmElement;
	let emailConfirmFieldElement;
	let sandbox;

	beforeEach(() => {
		emailElement = { addEventListener: ()=>{} };
		emailConfirmElement = { addEventListener: ()=>{} };
		emailConfirmFieldElement = { classList: { add: ()=>{}, remove: ()=>{} } };

		document = {
			querySelector: (selector) => {
				if (selector.indexOf('#emailConfirmField') !== -1) {
					return emailConfirmFieldElement;
				} else if (selector.indexOf('#emailConfirm') !== -1) {
					return emailConfirmElement;
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
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if document element isn\'t passed in.', () => {
			expect(() => {
				new EmailMatcher();
			}).to.throw();
		});

		it('should throw an error if email confirm element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => { };
				new EmailMatcher(document);
			}).to.throw();
		});

		it('should throw an error if email element does not exist on the page', () => {
			expect(() => {
				document.querySelector = (selector) => {
					if (selector.indexOf('#emailConfirmField') !== -1) {
						return emailConfirmFieldElement;
					}
				};
				new EmailMatcher(document);
			}).to.throw();
		});

		it('should add event listener to email element', () => {
			new EmailMatcher(document);
			expect(emailElement.addEventListener.calledOnce).to.be.true;
		});

		it('should add addEventListener to email confirm element', () => {
			new EmailMatcher(document);
			expect(emailConfirmElement.addEventListener.calledOnce).to.be.true;
		});
	});

	describe('checkMatch', () => {
		it('should add the error class if the fields don\'t match', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = 'pass';

			let emailMatcher = new EmailMatcher(document);
			emailMatcher.checkMatch(false);

			expect(emailConfirmFieldElement.classList.add.calledOnce).to.be.true;
		});

		it('should remove the error class if the fields match', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = 'password';

			let emailMatcher = new EmailMatcher(document);
			emailMatcher.checkMatch(false);

			expect(emailConfirmFieldElement.classList.remove.calledOnce).to.be.true;
		});
	});
});
