import { B2CPartnershipConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('B2CPartnershipConfirmation', () => {
	it('renders as default', () => {
		const props = { ctaElement: 'hello' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders Premium access for premium subscription', () => {
		const props = { ctaElement: 'hello', productCode: 'p2' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders Standard access for standard subscription', () => {
		const props = { ctaElement: 'hello', productCode: 'p1' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders Premium access if subscription prop is null', () => {
		const props = { ctaElement: 'hello', productCode: null };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});
});
