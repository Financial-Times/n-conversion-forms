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
		CHE: 'Switzerland'
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
		THA: 'Thailand'
	},
	GBR: 'United Kingdom',
	USA: 'United States',
	CAN: 'Canada'
};


const cemeaV1ISO = Object.keys(supportedCountriesMasterList.cemeaV1);
const cemeaV2ISO = Object.keys(supportedCountriesMasterList.cemeaV2);
const apacISO = Object.keys(supportedCountriesMasterList.apac);
const countriesSupported = Object.assign({}, ...(function _flatten (o) { return [].concat(...Object.keys(o).map(k => typeof o[k] === 'object' ? _flatten(o[k]) : ({[k]: o[k]})));}(supportedCountriesMasterList)));


module.exports = { cemeaV1ISO, cemeaV2ISO, apacISO, countriesSupported };
