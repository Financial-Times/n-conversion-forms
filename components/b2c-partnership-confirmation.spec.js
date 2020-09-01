import { B2CPartnershipConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('B2CPartnershipConfirmation', () => {
	it('renders with default props', () => {
		expect(B2CPartnershipConfirmation).toRenderCorrectly();
	});
});
