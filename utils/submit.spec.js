const Submit = require('./submit');

describe('Submit', () => {
	let submit;
	let documentStub;
	let elementStub;
	let newString;

	beforeEach(() => {
		elementStub = {
			querySelector: jest.fn(),
			innerHTML: 'default',
		};
		documentStub = {
			querySelector: jest.fn(),
		};
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if nothing passed', () => {
			expect(() => {
				new Submit();
			}).toThrow();
		});

		it('throws an error if button not present', () => {
			expect(() => {
				documentStub.querySelector.mockReturnValue(false);
				new Submit(documentStub);
			}).toThrow();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			newString = 'test';
			documentStub.querySelector.mockReturnValue(elementStub);
			submit = new Submit(documentStub);
		});

		describe('updateText', () => {
			it('throws if no string given', () => {
				expect(() => {
					submit.updateText();
				}).toThrow();
			});

			it('updates the innerHTML of the button', () => {
				submit.updateText(newString);
				expect(elementStub.innerHTML).toEqual('test');
			});
		});

		describe('enable', () => {
			it('enables the button', () => {
				submit.disable();
				submit.enable();
				expect(submit.$submit.disabled).toBe(false);
			});
		});

		describe('disable', () => {
			it('disables the button', () => {
				submit.disable();
				expect(submit.$submit.disabled).toBe(true);
			});
		});

		describe('isDisabled', () => {
			it('indicates the disabled state of the button', () => {
				expect(submit.isDisabled()).toBe(false);
				submit.disable();
				expect(submit.isDisabled()).toBe(true);
			});
		});
	});
});
