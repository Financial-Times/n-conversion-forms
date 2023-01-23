const helpers = require('.');

describe('helpers', () => {
	it('exports a "ncf-common-data" helper', () => {
		expect(helpers).toHaveProperty('ncf-common-data');
	});

	it('exports a "ncf-countries" helper', () => {
		expect(helpers).toHaveProperty('ncf-countries');
	});

	it('export billingCountries', () => {
		expect(helpers).toHaveProperty('billingCountries');
		expect(helpers['billingCountries']).toHaveProperty('countries');
	});

	it('export demographics', () => {
		expect(helpers).toHaveProperty('demographics');
		expect(helpers['demographics']).toHaveProperty('industries');
	});

	it('export cemeaV1ISO', () => {
		expect(helpers).toHaveProperty('cemeaV1ISO');
	});

	it('export cemeaV2ISO', () => {
		expect(helpers).toHaveProperty('cemeaV2ISO');
	});

	it('export apacISO', () => {
		expect(helpers).toHaveProperty('apacISO');
	});

	it('export identifyFTShippingZone', () => {
		expect(helpers).toHaveProperty('identifyFTShippingZone');
	});

	it('export countriesSupported', () => {
		expect(helpers).toHaveProperty('countriesSupported');
	});

	it('export countriesSupportedISO', () => {
		expect(helpers).toHaveProperty('countriesSupportedISO');
	});

	it('export supportedPostcodeValidators', () => {
		expect(helpers).toHaveProperty('supportedPostcodeValidators');
	});

	it('export allSupportedPostcodeExamples', () => {
		expect(helpers).toHaveProperty('allSupportedPostcodeExamples');
	});
});
