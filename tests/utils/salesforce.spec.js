const {
	isoCodeToSalesforceName,
	salesforceNameToIsoCode
} = require('../../utils/salesforce');
const expect = require('chai').expect;

describe('salesforce', () => {
	describe('isoCodeToSalesforceName', () => {
		it('should throw if a incorrect ISO code entered', () => {
			expect(() => {
				isoCodeToSalesforceName('test');
			}).to.throw();
		});

		it('should return the salesforce name for a country', () => {
			expect(isoCodeToSalesforceName('GBR')).to.equal('United Kingdom');
		});
	});

	describe('salesforceCodeToIsoCode', () => {
		it('should throw if a incorrect Salesforce name entered', () => {
			expect(() => {
				salesforceNameToIsoCode('test');
			}).to.throw();
		});

		it('should return the ISO country code for Salesforce country', () => {
			expect(salesforceNameToIsoCode('United Kingdom')).to.equal('GBR');
		});
	});
});
