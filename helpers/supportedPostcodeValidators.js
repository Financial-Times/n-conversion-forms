const supportedPostcodeValidators = {
	cemeaV1: {
		AUT: /^\d{4}$/,
		ARE: /.*$/, //match anything
		BEL: /^\d{4}$/,
		BGR: /^\d{4}$/,
		HRV: /^\d{5}$/,
		CZE: /^\d{3}[ ]?\d{2}$/,
		DNK: /^\d{4}$/,
		FIN: /^\d{5}$/,
		DEU: /^\d{5}$/,
		GRC: /^\d{3}[ ]?\d{2}$/,
		HUN: /^\d{4}$/,
		ISL: /^\d{3}$/,
		ITA: /^\d{5}$/,
		LIE: /^(948[5-9])|(949[0-7])$/,
		LTU: /^[Ll][Tt][- ]{0,1}\d{5}$/,
		NLD: /\d{4}\s{0,1}[A-Za-z]{2}$/,
		NOR: /^\d{4}$/,
		POL: /^\d{2}-\d{3}$/,
		PRT: /^\d{4}([\-]\d{3})?$/,
		QAT: /.*$/, //match anything
		ROU: /^\d{6}$/,
		RUS: /^\d{6}$/,
		SVK: /^\d{3}[ ]?\d{2}$/,
		SVN: /^\d{4}$/,
		ZAF: /^\d{4}$/,
		ESP: /^\d{5}$/,
		SWE: /^\d{3}[ ]?\d{2}$/,
		CHE: /^\d{4}$/,
	},
	cemeaV2: { FRA: /^[0-9]{5}$/, LUX: /^\d{4}$/, MCO: /^980\d{2}$/ },
	apac: {
		CHN: /^\d{6}$/,
		HKG: /.*$/, //match anything
		IND: /^\d{6}$/,
		IDN: /^\d{5}$/,
		JPN: /^\d{3}-\d{4}$/,
		KOR: /^\d{5}$/,
		MYS: /^\d{5}$/,
		PHL: /^\d{4}$/,
		SGP: /^\d{6}$/,
		TWN: /^\d{3}(\d{2})?$/,
		THA: /^\d{5}$/,
	},
	other: {
		GBR: /^[A-Za-z]{1,2}[0-9][0-9A-Za-z]?[\s-]?[0-9][A-Za-z]{2}$/,
		USA: /^[0-9]{5}$/,
		CAN: /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/,
	},
};

module.exports = { supportedPostcodeValidators };
