const Loader = require('./loader');

global.document = {};

describe('Loader', () => {
	let loader;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			classList: {
				add: jest.fn(),
				remove: jest.fn(),
			},
			focus: jest.fn(),
			insertBefore: jest.fn(),
			removeAttribute: jest.fn(),
		};
		documentStub = {
			addEventListener: jest.fn(),
			querySelector: jest.fn(),
			removeEventListener: jest.fn(),
		};
		global.document.createElement = jest.fn().mockReturnValue(elementStub);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if nothing passed', () => {
			expect(() => {
				new Loader();
			}).toThrow();
		});

		it('throws an error if loader not present', () => {
			expect(() => {
				documentStub.querySelector.mockReturnValue(false);
				new Loader(documentStub);
			}).toThrow();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.mockReturnValue(elementStub);
			loader = new Loader(documentStub);
		});

		describe('clearContent', () => {
			it('cleares the content of the partial', () => {
				loader.setContent('<div>Baz</div>');
				loader.clearContent();
				expect(elementStub.innerHTML).toEqual('');
			});
		});

		describe('setContent', () => {
			it('creates the title element if it does not exist yet', () => {
				loader.$loaderContentTitle = null;
				loader.setContent({ title: 'Hooray!' });
				expect(elementStub.insertBefore).toHaveBeenCalledWith(
					elementStub,
					expect.anything()
				);
			});
			it('set the title of the partial', () => {
				loader.setContent({ title: 'Hooray!' });
				expect(elementStub.innerHTML).toEqual('Hooray!');
			});
			it('set the content of the partial', () => {
				loader.setContent({ content: '<div>Baz</div>' });
				expect(elementStub.innerHTML).toEqual('<div>Baz</div>');
			});
		});

		describe('show', () => {
			it('shows the loader', () => {
				loader.show();
				expect(elementStub.classList.add).toHaveBeenCalledWith(
					loader.VISIBLE_CLASS
				);
				expect(elementStub.classList.remove).toHaveBeenCalledWith(
					loader.HIDDEN_CLASS
				);
			});
			it('calls setContent if content is passed', () => {
				const content = { title: 'foo' };
				jest.spyOn(loader, 'setContent');

				loader.show(content);
				expect(loader.setContent).toHaveBeenCalledWith(content);
			});
		});

		describe('hide', () => {
			it('hides the loader', () => {
				loader.hide();
				expect(elementStub.classList.add).toHaveBeenCalledWith(
					loader.HIDDEN_CLASS
				);
				expect(elementStub.classList.remove).toHaveBeenCalledWith(
					loader.VISIBLE_CLASS
				);
			});
		});
	});

	describe('a11y', () => {
		beforeEach(() => {
			documentStub.querySelector.mockReturnValue(elementStub);
			loader = new Loader(documentStub);
		});

		describe('show', () => {
			it('gives the loader the focus', () => {
				loader.show();

				expect(elementStub.tabIndex).toBe(1);
				expect(elementStub.focus).toHaveBeenCalled();
			});
		});

		describe('showAndPreventTabbing', () => {
			it('intercepts tab keypresses to prevent tabbing to content underneath', () => {
				loader.showAndPreventTabbing();
				expect(documentStub.addEventListener).toHaveBeenCalledWith(
					'keydown',
					expect.objectContaining({ name: 'interceptTab' })
				);
			});
		});

		describe('hide', () => {
			it('removes focus from the loader', () => {
				loader.hide();

				expect(elementStub.removeAttribute).toHaveBeenCalledWith('tabindex');
			});

			it('stops intercepting tab keypresses', () => {
				loader.hide();

				expect(documentStub.removeEventListener).toHaveBeenCalledWith(
					'keydown',
					expect.objectContaining({ name: 'interceptTab' })
				);
			});

			it('returns focus to a previously focused element', () => {
				loader.showAndPreventTabbing();
				loader.hide();

				expect(elementStub.focus).toHaveBeenCalled();
			});
		});
	});
});
