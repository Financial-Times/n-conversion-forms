import { B2cPartnershipPaymentTerm } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

const defaultProps = {
	displayName: 'Digital FT + The Washington Post',
	partnerOffer: {
		duration: '90-day',
		name: 'All-Access Digital',
		vendor: 'The Washington Post'
	},
	offerType: 'DIGITAL',
	options: [
		{
			name: 'annual',
			price: '£299.99',
			value: 299.99,
			isTrial: false,
			discount: null,
			selected: true
		}
	]
};

describe('B2cPartnershipPaymentTerm', () => {
	it('render with minimum props required', () => {
		const props = {
			...defaultProps,
		};

		expect(B2cPartnershipPaymentTerm).toRenderCorrectly(props);
	});

	['annual', 'quarterly', 'monthly'].forEach(type => {
		it(`renders with ${type} option`, () => {
			const props = {
				...defaultProps,
				options: [{
					name: type,
					value: type,
					price: '£20.00',
					selected: true
				}]
			};

			expect(B2cPartnershipPaymentTerm).toRenderCorrectly(props);
		});
	});
});
