const PaymentTerm = require('./payment-term');

describe('PaymentTerm', () => {
	let paymentTerm;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			querySelector: jest.fn(),
			querySelectorAll: jest.fn(),
			getAttribute: jest.fn(),
			setAttribute: jest.fn(),
			cloneNode: jest.fn(),
			remove: jest.fn(),
			insertBefore: jest.fn(),
			parentElement: elementStub,
			addEventListener: jest.fn(),
			value: 'test',
			dataset: {
				baseAmount: 100,
				countryCode: 'GBP',
			},
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
				new PaymentTerm();
			}).toThrow();
		});

		it('throws an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.mockReturnValue(false);
				new PaymentTerm(documentStub);
			}).toThrow();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.mockReturnValue(elementStub);
			paymentTerm = new PaymentTerm(documentStub);
		});

		describe('getSelected', () => {
			it('throws an error if nothing selected', () => {
				elementStub.querySelector.mockReturnValue(false);
				expect(() => {
					paymentTerm.getSelected();
				}).toThrow();
			});

			it('returns the value of the selected term', () => {
				elementStub.querySelector.mockReturnValue(elementStub);
				paymentTerm.getSelected();
				expect(elementStub.getAttribute).toHaveBeenCalledWith('value');
			});
		});

		describe('onChange', () => {
			it('adds an event listener on change', () => {
				paymentTerm.onChange();
				expect(elementStub.addEventListener).toHaveBeenCalledWith(
					'change',
					expect.anything()
				);
			});

			it('calls the callback', () => {
				const callback = jest.fn();
				elementStub.addEventListener = (type, callback) => callback();
				paymentTerm.onChange(callback);
				expect(callback).toHaveBeenCalled();
			});
		});

		describe('getBaseAmount', () => {
			it('throws an error if nothing selected', () => {
				elementStub.querySelector.mockReturnValue(false);
				expect(() => {
					paymentTerm.getBaseAmount();
				}).toThrow();
			});

			it('returns base amount of the selected term', () => {
				elementStub.dataset.baseAmount = 99;
				elementStub.querySelector.mockReturnValue(elementStub);
				const returnedAmount = paymentTerm.getBaseAmount();
				expect(returnedAmount).toBe(99);
			});
		});

		describe('getCountryCode', () => {
			it('returns countryCode of the selected term', () => {
				const countryCode = paymentTerm.getCountryCode();
				expect(countryCode).toBe('GBP');
			});
		});
	});
});
