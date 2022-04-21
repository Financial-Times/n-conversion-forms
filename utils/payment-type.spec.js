jest.mock('@financial-times/o-expander');
const oExpander = require('@financial-times/o-expander').default;
const PaymentType = require('./payment-type');

describe('PaymentType', () => {
	let paymentType;
	let documentStub;
	let elementStub;
	let parentStub;

	beforeEach(() => {
		parentStub = {
			classList: {
				add: jest.fn(),
				remove: jest.fn(),
			},
		};
		elementStub = {
			querySelector: jest.fn(),
			querySelectorAll: jest.fn(),
			getAttribute: jest.fn(),
			addEventListener: jest.fn(),
			parentElement: {
				parentElement: parentStub,
			},
			classList: {
				add: jest.fn(),
				remove: jest.fn(),
				contains: jest.fn(),
			},
		};
		documentStub = {
			querySelector: jest.fn(),
		};

		documentStub.querySelector.mockReturnValue(elementStub);
		elementStub.querySelector.mockReturnValue(elementStub);
		elementStub.querySelectorAll.mockReturnValue([elementStub]);

		jest.spyOn(oExpander, 'init');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if nothing passed', () => {
			expect(() => {
				new PaymentType();
			}).toThrow();
		});

		it('throws an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.mockReturnValue(false);
				new PaymentType(documentStub);
			}).toThrow();
		});

		it('calls initialise the expander', () => {
			new PaymentType(documentStub);
			expect(oExpander.init).toHaveBeenCalled();
		});

		it('has an expander property exposing the expander element', () => {
			const util = new PaymentType(documentStub);
			expect(util.expander).not.toBeFalsy();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			paymentType = new PaymentType(documentStub);
		});

		describe('show', () => {
			it('removes class from the parent node', () => {
				paymentType.show(PaymentType.CREDITCARD);
				expect(parentStub.classList.remove).toHaveBeenCalled();
			});
		});

		describe('hide', () => {
			it('adds class to the parent node', () => {
				paymentType.hide(PaymentType.CREDITCARD);
				expect(parentStub.classList.add).toHaveBeenCalled();
			});
		});

		describe('displayError', () => {
			it('adds a class to the paymentType element', () => {
				paymentType.displayError();
				expect(elementStub.classList.add).toHaveBeenCalled();
			});
		});

		describe('removeError', () => {
			it('removes a class to the paymentType element', () => {
				paymentType.removeError();
				expect(elementStub.classList.remove).toHaveBeenCalled;
			});
		});

		describe('onChange', () => {
			it('adds an event listener on change', () => {
				paymentType.onChange();
				expect(elementStub.addEventListener).toHaveBeenCalledWith(
					'change',
					expect.anything()
				);
			});

			it('calls the callback', () => {
				const callback = jest.fn();
				elementStub.addEventListener = (type, callback) => callback();
				paymentType.onChange(callback);
				expect(callback).toHaveBeenCalled();
			});
		});

		describe('getSelected', () => {
			it('throws an error if nothing selected', () => {
				elementStub.querySelector.mockReturnValue(false);
				expect(() => {
					paymentType.getSelected();
				}).toThrow();
			});

			it('returns the value of the selected term', () => {
				paymentType.getSelected();
				expect(elementStub.getAttribute).toHaveBeenCalledWith('value');
			});
		});
	});
});
