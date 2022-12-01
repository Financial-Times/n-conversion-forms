jest.mock('fetchres');
const fetchres = require('fetchres');
const Email = require('./email');

describe('Email', () => {
	let document;
	let emailElement;
	let emailConfirmElement;
	let emailConfirmFieldElement;
	let csrfFieldElement;

	beforeEach(() => {
		emailElement = { addEventListener: () => {} };
		emailConfirmElement = { addEventListener: () => {} };
		emailConfirmFieldElement = {
			classList: { add: () => {}, remove: () => {} },
		};
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
			},
		};
		jest.spyOn(emailElement, 'addEventListener');
		jest.spyOn(emailConfirmElement, 'addEventListener');
		jest.spyOn(emailConfirmFieldElement.classList, 'add');
		jest.spyOn(emailConfirmFieldElement.classList, 'remove');

		fetchres.json = jest.fn((response) => response.json());
		global.fetch = jest.fn(() =>
			Promise.resolve({
				status: 200,
			})
		);
	});

	afterEach(() => {
		fetch.mockClear();
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if document element is not passed in', () => {
			expect(() => {
				new Email();
			}).toThrow();
		});

		it('throws an error if email confirm element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => {};
				new Email(document);
			}).toThrow();
		});

		it('throws an error if email element does not exist on the page', () => {
			expect(() => {
				document.querySelector = (selector) => {
					if (selector.indexOf('#emailConfirmField') !== -1) {
						return emailConfirmFieldElement;
					}
				};
				new Email(document);
			}).toThrow();
		});

		it('adds event listener to email element', () => {
			new Email(document);
			expect(emailElement.addEventListener).toHaveBeenCalledTimes(1);
		});

		it('adds addEventListener to email confirm element', () => {
			new Email(document);
			expect(emailConfirmElement.addEventListener).toHaveBeenCalledTimes(1);
		});
	});

	describe('checkMatch', () => {
		it('adds the error class if the fields do not match', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = 'pass';

			let email = new Email(document);
			email.checkMatch();

			expect(emailConfirmFieldElement.classList.add).toHaveBeenCalledTimes(1);
		});

		it('removes the error class if the fields match', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = 'password';

			let email = new Email(document);
			email.checkMatch();

			expect(emailConfirmFieldElement.classList.remove).toHaveBeenCalledTimes(
				1
			);
		});

		it('does only check if valid if emailConfirm field has a value.', () => {
			emailElement.value = 'password';
			emailConfirmElement.value = '';

			let email = new Email(document);
			email.checkMatch();

			expect(emailConfirmFieldElement.classList.add).not.toHaveBeenCalled();
			expect(emailConfirmFieldElement.classList.remove).not.toHaveBeenCalled();
		});
	});

	describe('Email Exists', () => {
		const url = '/foo';
		let email;
		let onFound;
		let onNotFound;

		beforeEach(() => {
			onFound = jest.fn();
			onNotFound = jest.fn();

			email = new Email(document);
		});

		it('adds an additional event listener to the email field', () => {
			email.registerEmailExistsCheck(url, onFound, onNotFound);
			// Check it's called twice since by default we bind a change listener in the constructor.
			expect(emailElement.addEventListener).toHaveBeenCalledTimes(2);
		});

		it('returns the handler function so it can potentially be unregistered', () => {
			let handler = email.registerEmailExistsCheck(url, onFound, onNotFound);
			expect(handler).toBeInstanceOf(Function);
		});

		it('calls the onNotFound callback if the email field has no value.', () => {
			email.handleEmailExistsChange(url, onFound, onNotFound);
			expect(onFound).not.toHaveBeenCalled();
			expect(onNotFound).toHaveBeenCalled();
		});

		it('calls the specified url with the correct params if the email field has a value', () => {
			emailElement.value = 'test@example.com';
			email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(fetch).toHaveBeenCalledWith(
				url,
				expect.objectContaining({
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: 'test@example.com',
						csrfToken: '1234567890',
					}),
				})
			);
		});

		it('calls the onNotFound callback if the call to the url fails', async () => {
			const fetchError = new Error('API is down');
			global.fetch = jest.fn(() => Promise.reject(fetchError));

			emailElement.value = 'test@example.com';
			await email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(onFound).not.toHaveBeenCalled();
			expect(onNotFound).toHaveBeenCalled();
		});

		it('calls the onFound callback if the user exists', async () => {
			global.fetch = jest.fn(() =>
				Promise.resolve({
					json: () => Promise.resolve(true),
				})
			);

			emailElement.value = 'test@example.com';
			await email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(onFound).toHaveBeenCalled();
			expect(onNotFound).not.toHaveBeenCalled();
		});

		it('calls the onNotFound callback if the user does not exist', async () => {
			global.fetch = jest.fn(() =>
				Promise.resolve({
					json: () => Promise.resolve(false),
				})
			);

			emailElement.value = 'test@example.com';
			await email.handleEmailExistsChange(url, onFound, onNotFound);

			expect(onFound).not.toHaveBeenCalled();
			expect(onNotFound).toHaveBeenCalled();
		});
	});
});
