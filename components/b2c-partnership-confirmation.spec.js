import { B2CPartnershipConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('B2CPartnershipConfirmation', () => {
	it('renders as default', () => {
		const props = { ctaElement: 'hello' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});
});
