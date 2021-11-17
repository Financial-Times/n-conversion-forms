const { countries } = require('n-common-static-data').billingCountries;

/**
 * Turn a ISO 3 character country code to a Salesforce country name
 * @param {String} countryCode ISO 3 character country code
 * @returns {String} Country name from Salesforce
 */
function isoCodeToSalesforceName(countryCode) {
	const selectedCountry = countries.find(
		(country) => country.code === countryCode
	);
	if (!selectedCountry) {
		throw new Error(`ISO code ${countryCode} Salesforce equivalent not found`);
	}
	return selectedCountry.salesforceName;
}

/**
 * Turn a country name from salesforce into a ISO 3 character country code
 * @param {String} salesforceName Country name from Salesforce
 * @returns {String} ISO 3 character country code
 */
function salesforceNameToIsoCode(salesforceName) {
	const selectedCountry = countries.find(
		(country) => country.salesforceName === salesforceName
	);
	if (!selectedCountry) {
		throw new Error(
			`Salesforce Country ${salesforceName} ISO equivalent not found`
		);
	}
	return selectedCountry.code;
}

module.exports = {
	isoCodeToSalesforceName,
	salesforceNameToIsoCode,
};
