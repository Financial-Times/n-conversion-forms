const Postcode = require('./postcode');

describe('postcode', () => {
	let postcode;
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
		postcode = new Postcode(document);
		querySelectorStub = jest.spyOn(postcode.$el, 'querySelector');
		querySelectorAllStub = jest.spyOn(postcode.$el, 'querySelectorAll');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('returns an element', () => {
		expect(postcode.$el).toBeDefined();
	});

	describe('getPostcodeReferenceByCountry', () => {
		it('returns postcode by default', () => {
			expect(Postcode.getPostcodeReferenceByCountry('GBR')).toEqual(
				'postcode'
			);
		});

		it('returns zip code when country code is USA', () => {
			expect(Postcode.getPostcodeReferenceByCountry('USA')).toEqual(
				'zip code'
			);
		});

		it('returns postal when country code is CAN', () => {
			expect(Postcode.getPostcodeReferenceByCountry('CAN')).toEqual(
				'postal code'
			);
		});
	});

	describe('changePostcodeReferenceForCountry', () => {
		beforeEach(() => {
			querySelectorStub.mockReturnValue({ innerHTML: '' });
			querySelectorAllStub.mockReturnValue([{ innerHTML: '' }, { innerHTML: '' }]);
		});

		describe('postcode reference name', () => {
			it('calls querySelector with [data-reference]', () => {
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorAllStub).toBeCalledWith('[data-reference=postcode]');
			});

			it('set postcodeReference to post code by default', () => {
				const expectedResponse = [
					{ innerHTML: 'postcode' },
					{ innerHTML: 'postcode' },
				];
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(postcode.reference).toEqual(expectedResponse);
			});

			it('set postcodeReference to zip code when country code is USA', () => {
				const expectedResponse = [
					{ innerHTML: 'zip code' },
					{ innerHTML: 'zip code' },
				];
				postcode.changePostcodeReferenceForCountry = 'USA';
				expect(postcode.reference).toEqual(expectedResponse);
			});

			it('set postcodeReference to postal code when country code is Canada', () => {
				const expectedResponse = [
					{ innerHTML: 'postal code' },
					{ innerHTML: 'postal code' },
				];
				postcode.changePostcodeReferenceForCountry = 'CAN';
				expect(postcode.reference).toEqual(expectedResponse);
			});
		});

		describe('placeholder', () => {
			it('calls querySelector with span input', () => {
				querySelectorStub.mockReturnValue({ placeholder: 'Enter your postcode' });
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorStub).toHaveBeenCalledWith('input');
			});

			it('set postcode placeholder to `Enter your postcode` by default', () => {
				querySelectorStub.mockReturnValue({ placeholder: 'Enter your zip code' });
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(postcode.postcodeInput.placeholder).toEqual(
					'Enter your postcode'
				);
			});

			it('set postcode placeholder to `Enter your zip code` when country code is USA', () => {
				querySelectorStub.mockReturnValue({ placeholder: 'Enter your postcode' });
				postcode.changePostcodeReferenceForCountry = 'USA';
				expect(postcode.postcodeInput.placeholder).toEqual(
					'Enter your zip code'
				);
			});

			it('set postcode placeholder to `Enter your postal code` when country code is Canada', () => {
				querySelectorStub.mockReturnValue({ placeholder: 'Enter your zip code' });
				postcode.changePostcodeReferenceForCountry = 'CAN';
				expect(postcode.postcodeInput.placeholder).toEqual(
					'Enter your postal code'
				);
			});
		});
	});
});
