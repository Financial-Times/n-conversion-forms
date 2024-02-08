const BillingPostcode = require('./billing-postcode');

describe('BillingPostcode', () => {
	let billingPostcode;
	let querySelectorStub;
	let querySelectorAllStub;

	beforeEach(() => {
		const document = {
			querySelector: () => {
				return {
					querySelectorAll: () => {},
					querySelector: () => {},
				};
			},
		};
		billingPostcode = new BillingPostcode(
			document,
			'.ncf #billingPostcodeField'
		);
		querySelectorStub = jest.spyOn(billingPostcode.$el, 'querySelector');
		querySelectorAllStub = jest.spyOn(billingPostcode.$el, 'querySelectorAll');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('returns an element', () => {
		expect(billingPostcode.$el).toBeDefined();
	});

	describe('changePostcodeReferenceForCountry', () => {
		beforeEach(() => {
			querySelectorStub.mockReturnValue({ innerHTML: '' });
			querySelectorAllStub.mockReturnValue([
				{ innerHTML: '' },
				{ innerHTML: '' },
			]);
		});

		describe('postcode reference name', () => {
			it('calls querySelector with [data-reference]', () => {
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorAllStub).toHaveBeenCalledWith(
					'[data-reference=postcode]'
				);
			});

			it('sets postcodeReference to post code by default', () => {
				const expectedResponse = [
					{ innerHTML: 'postcode' },
					{ innerHTML: 'postcode' },
				];
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(billingPostcode.reference).toEqual(expectedResponse);
			});

			it('sets postcodeReference to zip code when country code is USA', () => {
				const expectedResponse = [
					{ innerHTML: 'zip code' },
					{ innerHTML: 'zip code' },
				];
				billingPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(billingPostcode.reference).toEqual(expectedResponse);
			});

			it('sets postcodeReference to postal code when country code is Canada', () => {
				const expectedResponse = [
					{ innerHTML: 'postal code' },
					{ innerHTML: 'postal code' },
				];
				billingPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(billingPostcode.reference).toEqual(expectedResponse);
			});
		});

		describe('placeholder', () => {
			it('calls querySelector with span input', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your postcode',
				});
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorStub).toHaveBeenCalledWith('input');
			});

			it('sets postcode placeholder to `Enter your postcode` by default', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your zip code',
				});
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(billingPostcode.postcodeInput.placeholder).toBe(
					'Enter your postcode'
				);
			});

			it('sets postcode placeholder to `Enter your zip code` when country code is USA', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your postcode',
				});
				billingPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(billingPostcode.postcodeInput.placeholder).toBe(
					'Enter your zip code'
				);
			});

			it('sets postcode placeholder to `Enter your postal code` when country code is Canada', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your zip code',
				});
				billingPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(billingPostcode.postcodeInput.placeholder).toBe(
					'Enter your postal code'
				);
			});
		});
	});

	describe('getPostcodeReferenceByCountry', () => {
		it('returns post code by default', () => {
			expect(BillingPostcode.getPostcodeReferenceByCountry('ZAR')).toBe(
				'postcode'
			);
		});

		it('returns postal code when country is Canada', () => {
			expect(BillingPostcode.getPostcodeReferenceByCountry('CAN')).toBe(
				'postal code'
			);
		});

		it('returns zip code when country is USA', () => {
			expect(BillingPostcode.getPostcodeReferenceByCountry('USA')).toBe(
				'zip code'
			);
		});
	});
});
