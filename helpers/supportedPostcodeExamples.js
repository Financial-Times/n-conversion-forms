const { flattenObj } = require('./utilities');

const supportedPostcodeExamples = {
	cemeaV1: {
		AUT: '17087',
		ARE: '', //match anything
		BEL: '6596',
		BGR: '4000',
		HRV: '10000',
		CZE: '00 100',
		DNK: '1819',
		FIN: '39500',
		DEU: '17087',
		GRC: '241 00',
		HUN: '3821',
		ISL: '60411',
		ITA: '23844',
		LIE: '9480',
		LTU: 'LT-12345',
		NLD: '6971 HJ',
		NOR: '1608',
		POL: '43-190',
		PRT: '2525-517',
		QAT: '',//match anything
		ROU: '71234',
		RUS: '191028',
		SVK: '98401',
		SVN: '8263',
		ZAF: '5189',
		ESP: '37752',
		SWE: '260 38',
		CHE: '9424'
	},
	cemeaV2: { FRA: '95000', LUX: '1009', MCO: '98000' },
	apac: {
		CHN: '610000',
		HKG: '', //match anything
		IND: '401107',
		IDN: '55165',
		JPN: '100-0001',
		KOR: '46500',
		MYS: '59100',
		PHL: '2799',
		SGP: '58416',
		TWN: '100',
		THA: '10330'
	},
	other: {
		GBR: 'EC4M 9BT',
		USA: '60411',
		CAN: 'M5H 3E5'
	}
};

const allSupportedPostcodeExamples = flattenObj(supportedPostcodeExamples);

module.exports = { allSupportedPostcodeExamples };
