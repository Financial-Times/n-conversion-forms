const { flattenObj } = require('./utilities');
const { printRegions } = require('./constants');

const supportedCountriesMasterList = {
	cemeaV1: {
		AUT: 'Austria',
		BEL: 'Belgium',
		BGR: 'Bulgaria',
		HRV: 'Croatia',
		CZE: 'Czechia',
		DNK: 'Denmark',
		FIN: 'Finland',
		DEU: 'Germany',
		GRC: 'Greece',
		HUN: 'Hungary',
		ISL: 'Iceland',
		ITA: 'Italy',
		LIE: 'Liechtenstein',
		LTU: 'Lithuania',
		NLD: 'Netherlands',
		NOR: 'Norway',
		POL: 'Poland',
		PRT: 'Portugal',
		QAT: 'Qatar',
		ROU: 'Romania',
		RUS: 'Russian Federation',
		SVK: 'Slovakia',
		SVN: 'Slovenia',
		ZAF: 'South Africa',
		ESP: 'Spain',
		SWE: 'Sweden',
		CHE: 'Switzerland',
	},
	cemeaV2: { FRA: 'France', LUX: 'Luxembourg', MCO: 'Monaco' },
	apac: {
		CHN: 'China',
		HKG: 'Hong Kong',
		IND: 'India',
		IDN: 'Indonesia',
		JPN: 'Japan',
		KOR: 'Korea, Republic of',
		MYS: 'Malaysia',
		PHL: 'Philippines',
		SGP: 'Singapore',
		TWN: 'Taiwan, Province of China',
		THA: 'Thailand',
	},
	other: {
		GBR: 'United Kingdom',
		USA: 'United States',
		CAN: 'Canada',
		ARE: 'United Arab Emirates',
	},
};

const cemeaV1ISO = Object.keys(supportedCountriesMasterList.cemeaV1);
const cemeaV2ISO = Object.keys(supportedCountriesMasterList.cemeaV2);
const apacISO = Object.keys(supportedCountriesMasterList.apac);

const countriesSupported = flattenObj(supportedCountriesMasterList);
const countriesSupportedISO = Object.keys(countriesSupported);

const identifyFTShippingZone = (country) => {
	if (cemeaV1ISO.includes(country)) {
		return printRegions.cemeaV1;
	}
	if (cemeaV2ISO.includes(country)) {
		return printRegions.cemeaV2;
	}
	if (apacISO.includes(country)) {
		return printRegions.apac;
	}
	return country;
};

module.exports = {
	cemeaV1ISO,
	cemeaV2ISO,
	apacISO,
	countriesSupported,
	countriesSupportedISO,
	identifyFTShippingZone,
};
