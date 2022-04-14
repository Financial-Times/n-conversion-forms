const Password = require('./password');

describe('Password', () => {
	let password;
	let document;
	let passwordElement;
	let checkboxElement;

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
		jest.spyOn(password, 'toggleMask');
		jest.spyOn(checkboxElement, 'addEventListener');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if document element is not passed in.', () => {
			expect(() => {
				new Password();
			}).toThrow();
		});

		it('throws an error if password element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => {};
				new Password(document);
			}).toThrow();
		});
	});

	describe('registerMaskCheckbox', () => {
		it('adds event listener to checkbox if it exists', () => {
			new Password(document);
			expect(checkboxElement.addEventListener).toHaveBeenCalled();
		});
	});

	describe('toggleMask', () => {
		it('set the input type to text', () => {
			passwordElement.type = 'password';
			password.toggleMask(false);
			expect(passwordElement.type).toEqual('text');
		});

		it('set the input type to password', () => {
			passwordElement.type = 'text';
			password.toggleMask(true);
			expect(passwordElement.type).toEqual('password');
		});
	});
});
