import { B2CPartnershipConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('B2CPartnershipConfirmation', () => {
	it('renders with default props', () => {
		const props = {};
		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders when FT is not the host', () => {
		const props = { hostPartner: false };
		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});
});
