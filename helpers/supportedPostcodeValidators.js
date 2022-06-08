const supportedPostcodeValidators = {
	cemeaV1: {
		AUT: /^\\d{4}$/,
		ARE: /.*$/, //match anything
		BEL: /^\\d{4}$/,
		BGR: /^\\d{4}$/,
		HRV: /^\\d{5}$/,
		CZE: /^\\d{5}\\s\\(\\d{3}\\s\\d{2}\\)$/,
		DNK: /^\\d{4}$/,
		FIN: /^\\d{5}$/,
		DEU: /^\\d{5}$/,
		GRC: /^\\d{3}\\s{0,1}\\d{2}$/,
		HUN: /^\\d{4}$/,
		ISL: /^\\d{3}$/,
		ITA: /^\\d{5}$/,
		LIE: /^\\d{4}$/,
		LTU: /^[Ll][Tt][- ]{0,1}\\d{5}$/,
		NLD: /^\\d{4}\\s{0,1}[A-Za-z]{2}$/,
		NOR: /^\\d{4}$/,
		POL: /^\\d{2}[- ]{0,1}\\d{3}$/,
		PRT: /^\\d{4}$/,
		QAT: /.*$/,//match anything
		ROU: /^\\d{6}$/,
		RUS: /^\\d{6}$/,
		SVK: /^\\d{5}\\s\\(\\d{3}\\s\\d{2}\\)$/,
		SVN: /^([Ss][Ii][- ]{0,1}){0,1}\\d{4}$/,
		ZAF: /^\\d{4}$/,
		ESP: /^\\d{5}$/,
		SWE: /^\\d{3}\\s*\\d{2}$/,
		CHE: /^\\d{4}$/
	},
	cemeaV2: { FRA: /^[0-9]{5}$/, LUX: /^\\d{4}$/, MCO: /^980\\d{2}$/ },
	apac: {
		CHN: /^\\d{6}$/,
		HKG: /.*$/, //match anything
		IND: /^\\d{6}$/,
		IDN: /^\\d{5}$/,
		JPN: /^\\d{7}\\s\\(\\d{3}-\\d{4}\\)$/,
		KOR: /^\\d{6}\\s\\(\\d{3}-\\d{3}\\)$/,
		MYS: /^\\d{5}$/,
		PHL: /^\\d{4}$/,
		SGP: /^\\d{2}$/,
		TWN: /^\\d{5}$/,
		THA: /^\\d{5}$/
	},
	GBR: /^[A-Za-z]{1,2}[0-9][0-9A-Za-z]?[\s-]?[0-9][A-Za-z]{2}$/,
	USA: /^[0-9]{5}$/,
	CAN: /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/
};

module.exports = { supportedPostcodeValidators };
