const FormElement = require('./form-element');

describe('FormElement', () => {
	let formElement;
	let document;
	let addStub;
	let removeStub;

	beforeEach(() => {
		addStub = jest.fn();
		removeStub = jest.fn();
		document = {
			querySelector: () => {
				return {
					querySelectorAll: () => {},
					querySelector: () => {
						return {
							value: 'test',
						};
					},
					classList: {
						add: addStub,
						remove: removeStub,
					},
				};
			},
		};
		formElement = new FormElement(document);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if document element isn not passed in', () => {
			expect(() => {
				new FormElement();
			}).toThrow();
		});

		it('throws an error if form element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => {};
				new FormElement(document);
			}).toThrow();
		});
	});

	describe('hide', () => {
		it('adds the ncf__hidden class', () => {
			formElement.hide();

			expect(addStub).toHaveBeenCalledWith('ncf__hidden');
		});
	});

	describe('show', () => {
		it('removes the ncf__hidden class', () => {
			formElement.show();

			expect(removeStub).toHaveBeenCalledWith('ncf__hidden');
		});
	});

	describe('value', () => {
		it('returns the value', () => {
			expect(formElement.value()).toBe('test');
		});
	});
});
