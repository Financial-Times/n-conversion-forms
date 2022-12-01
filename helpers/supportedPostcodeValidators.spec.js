const {
	supportedPostcodeValidators,
} = require('./supportedPostcodeValidators');
const { supportedPostcodeExamples } = require('./supportedPostcodeExamples');

describe('supportedPostcodeValidators', () => {
	it('should validate every cemeaV1 supportedPostcodeExamples', () => {
		const cemeaV1PostcodeCountryCodes = Object.keys(
			supportedPostcodeExamples.cemeaV1
		);

		for (const cemeaV1PostcodeCountryCode of cemeaV1PostcodeCountryCodes) {
			expect(
				supportedPostcodeValidators.cemeaV1[cemeaV1PostcodeCountryCode].test(
					supportedPostcodeExamples.cemeaV1[cemeaV1PostcodeCountryCode]
				)
			).toBe(true);
		}
	});
	it('should validate every cemeaV2 supportedPostcodeExamples', () => {
		const cemeaV2PostcodeCountryCodes = Object.keys(
			supportedPostcodeExamples.cemeaV2
		);

		for (const cemeaV2PostcodeCountryCode of cemeaV2PostcodeCountryCodes) {
			expect(
				supportedPostcodeValidators.cemeaV2[cemeaV2PostcodeCountryCode].test(
					supportedPostcodeExamples.cemeaV2[cemeaV2PostcodeCountryCode]
				)
			).toBe(true);
		}
	});
	it('should validate every apac supportedPostcodeExamples', () => {
		const apacPostcodeCountryCodes = Object.keys(
			supportedPostcodeExamples.apac
		);

		for (const apacPostcodeCountryCode of apacPostcodeCountryCodes) {
			expect(
				supportedPostcodeValidators.apac[apacPostcodeCountryCode].test(
					supportedPostcodeExamples.apac[apacPostcodeCountryCode]
				)
			).toBe(true);
		}
	});
});
