const DeliveryPostcode = require('./delivery-postcode');

describe('DeliveryPostcode', () => {
	let deliveryPostcode;
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
		deliveryPostcode = new DeliveryPostcode(
			document,
			'.ncf #deliveryPostcodeField'
		);
		querySelectorStub = jest.spyOn(deliveryPostcode.$el, 'querySelector');
		querySelectorAllStub = jest.spyOn(deliveryPostcode.$el, 'querySelectorAll');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('returns an element', () => {
		expect(deliveryPostcode.$el).toBeDefined();
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
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorAllStub).toHaveBeenCalledWith(
					'[data-reference=postcode]'
				);
			});

			it('set postcodeReference to post code by default', () => {
				const expectedResponse = [
					{ innerHTML: 'postcode' },
					{ innerHTML: 'postcode' },
				];
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(deliveryPostcode.reference).toEqual(expectedResponse);
			});

			it('set postcodeReference to zip code when country code is USA', () => {
				const expectedResponse = [
					{ innerHTML: 'zip code' },
					{ innerHTML: 'zip code' },
				];
				deliveryPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(deliveryPostcode.reference).toEqual(expectedResponse);
			});

			it('set postcodeReference to postal code when country code is Canada', () => {
				const expectedResponse = [
					{ innerHTML: 'postal code' },
					{ innerHTML: 'postal code' },
				];
				deliveryPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(deliveryPostcode.reference).toEqual(expectedResponse);
			});
		});

		describe('placeholder', () => {
			it('calls querySelector with span input', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your postcode',
				});
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorStub).toHaveBeenCalledWith('input');
			});

			it('set postcode placeholder to `Enter your postcode` by default', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your zip code',
				});
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(deliveryPostcode.postcodeInput.placeholder).toEqual(
					'Enter your postcode'
				);
			});

			it('set postcode placeholder to `Enter your zip code` when country code is USA', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your postcode',
				});
				deliveryPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(deliveryPostcode.postcodeInput.placeholder).toEqual(
					'Enter your zip code'
				);
			});

			it('set postcode placeholder to `Enter your postal code` when country code is Canada', () => {
				querySelectorStub.mockReturnValue({
					placeholder: 'Enter your zip code',
				});
				deliveryPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(deliveryPostcode.postcodeInput.placeholder).toEqual(
					'Enter your postal code'
				);
			});
		});
	});

	describe('getPostcodeReferenceByCountry', () => {
		it('returns post code by default ', () => {
			expect(DeliveryPostcode.getPostcodeReferenceByCountry('ZAR')).toEqual(
				'postcode'
			);
		});

		it('returns postal code when country is Canada', () => {
			expect(DeliveryPostcode.getPostcodeReferenceByCountry('CAN')).toEqual(
				'postal code'
			);
		});

		it('returns zip code when country is USA', () => {
			expect(DeliveryPostcode.getPostcodeReferenceByCountry('USA')).toEqual(
				'zip code'
			);
		});
	});
});
