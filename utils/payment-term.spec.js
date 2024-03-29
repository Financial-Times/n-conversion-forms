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

		describe('updateOptions', () => {
			beforeEach(() => {
				paymentTerm.getSelected = jest.fn().mockReturnValue(true);
				elementStub.querySelector.mockReturnValue(elementStub);
				elementStub.cloneNode.mockReturnValue(elementStub);
				elementStub.querySelectorAll.mockReturnValue([elementStub]);
			});

			it('throws an error if not all terms have an update', () => {
				expect(() => {
					paymentTerm.updateOptions({});
				}).toThrow();
			});

			it('replaces the price with the correct updated price', () => {
				const priceStub = {};
				elementStub.querySelector.mockImplementation((elementId) => {
					return elementId === '.ncf__payment-term__price'
						? priceStub
						: elementStub;
				});
				paymentTerm.updateOptions({
					test: {
						value: 'test',
						price: '£1.01',
					},
				});
				expect(priceStub.innerHTML).toBe('£1.01');
			});

			it('replaces the trial price with the correct updated trial price', () => {
				const trialPriceStub = {};
				elementStub.querySelector.mockImplementation((elementId) => {
					return elementId === '.ncf__payment-term__trial-price'
						? trialPriceStub
						: elementStub;
				});
				paymentTerm.updateOptions({
					test: {
						value: 'test',
						trialPrice: '£1.01',
					},
				});
				expect(trialPriceStub.innerHTML).toBe('£1.01');
			});

			it('replaces the monthly price with the correct updated monthly price', () => {
				const monthlyPriceStub = {};
				elementStub.querySelector.mockImplementation((elementId) => {
					return elementId === '.ncf__payment-term__monthly-price'
						? monthlyPriceStub
						: elementStub;
				});
				paymentTerm.updateOptions({
					test: {
						value: 'test',
						monthlyPrice: '£1.01',
					},
				});
				expect(monthlyPriceStub.innerHTML).toBe('£1.01');
			});

			describe('updating base amount', () => {
				const updatedOptions = {
					test: {
						value: 'test',
						monthlyPrice: '£1.01',
						amount: 500,
						trialAmount: 1,
					},
				};

				beforeEach(() => {
					elementStub.querySelector.mockReturnValue(elementStub);
				});

				it('replaces the base amount with the correct updated trial amount', () => {
					updatedOptions.test.isTrial = true;
					paymentTerm.updateOptions(updatedOptions);
					expect(elementStub.setAttribute).toHaveBeenCalledWith(
						'data-base-amount',
						1
					);
				});

				it('replaces the base amount with the correct updated amount', () => {
					updatedOptions.test.isTrial = false;
					paymentTerm.updateOptions(updatedOptions);
					expect(elementStub.setAttribute).toHaveBeenCalledWith(
						'data-base-amount',
						500
					);
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
});
