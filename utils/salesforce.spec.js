const {
	isoCodeToSalesforceName,
	salesforceNameToIsoCode,
} = require('./salesforce');

describe('salesforce', () => {
	describe('isoCodeToSalesforceName', () => {
		it('throws if a incorrect ISO code entered', () => {
			expect(() => {
				isoCodeToSalesforceName('test');
			}).toThrow();
		});

		it('returns the salesforce name for a country', () => {
			expect(isoCodeToSalesforceName('GBR')).toBe('United Kingdom');
		});
	});

	describe('salesforceCodeToIsoCode', () => {
		it('throws if a incorrect Salesforce name entered', () => {
			expect(() => {
				salesforceNameToIsoCode('test');
			}).toThrow();
		});

		it('returns the ISO country code for Salesforce country', () => {
			expect(salesforceNameToIsoCode('United Kingdom')).toBe('GBR');
		});
	});
});
