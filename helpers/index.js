module.exports = {
	'ncf-countries': require('./ncf-countries'),
	'ncf-common-data': require('./ncf-common-data'),
	'cemeaV1ISO': require('./supportedCountries').cemeaV1ISO,
	'cemeaV2ISO': require('./supportedCountries').cemeaV2ISO,
	'apacISO': require('./supportedCountries').apacISO,
	'countriesSupported': require('./supportedCountries').countriesSupported,
	'supportedPostcodeValidators': require('./supportedPostcodeValidators').supportedPostcodeValidators,
	'allSupportedPostcodeExamples': require('./supportedPostcodeExamples').allSupportedPostcodeExamples,
};
