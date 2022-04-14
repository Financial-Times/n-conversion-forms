const Country = require('./country');

describe('Country', () => {
	let country;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			addEventListener: jest.fn(),
			selectedIndex: 1,
			options: [{ value: 0 }, { value: 1 }, { value: 2 }],
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
				new Country();
			}).toThrow();
		});

		it('throws an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.mockReturnValue(false);
				new Country(documentStub);
			}).toThrow();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.mockReturnValue(elementStub);
			country = new Country(documentStub);
		});

		describe('onChange', () => {
			it('adds an event listener on change', () => {
				country.onChange();
				expect(elementStub.addEventListener).toHaveBeenCalledWith(
					'change',
					expect.anything()
				);
			});

			it('calls the callback', () => {
				const callback = jest.fn();
				elementStub.addEventListener = (type, callback) => callback();
				country.onChange(callback);
				expect(callback).toHaveBeenCalled();
			});
		});

		describe('getSelected', () => {
			it('throws an error if nothing selected', () => {
				elementStub.options = [];
				elementStub.selectedIndex = 0;
				expect(() => {
					country.getSelected();
				}).toThrow();
			});

			it('throws an error if something selected that is not there', () => {
				elementStub.selectedIndex = 4;
				expect(() => {
					country.getSelected();
				}).toThrow();
			});

			it('returns the selected option', () => {
				expect(country.getSelected()).toBe(1);
			});

			it('returns the changed selected option', () => {
				elementStub.selectedIndex = 0;
				expect(country.getSelected()).toBe(0);
			});
		});
	});
});
