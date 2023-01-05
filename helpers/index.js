module.exports = {
	'ncf-countries': require('./ncf-countries'),
	'ncf-common-data': require('./ncf-common-data'),
	cemeaV1ISO: require('./supportedCountries').cemeaV1ISO,
	cemeaV2ISO: require('./supportedCountries').cemeaV2ISO,
	apacISO: require('./supportedCountries').apacISO,
	identifyFTShippingZone: require('./supportedCountries')
		.identifyFTShippingZone,
	countriesSupported: require('./supportedCountries').countriesSupported,
	countriesSupportedISO: require('./supportedCountries').countriesSupportedISO,
	supportedPostcodeValidators: require('./supportedPostcodeValidators')
		.supportedPostcodeValidators,
	allSupportedPostcodeExamples: require('./supportedPostcodeExamples')
		.allSupportedPostcodeExamples,
	demographics: require('./demographics').demographics,
	billingCountries: require('./billing-countries').billingCountries,
};
