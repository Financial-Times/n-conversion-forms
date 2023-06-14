import { B2CPartnershipConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('B2CPartnershipConfirmation', () => {
	it('renders as default', () => {
		const props = { ctaElement: 'hello' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders Premium access for premium subscription lowercase', () => {
		const props = { ctaElement: 'hello', productCode: 'p2' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders Premium access for premium subscription uppercase', () => {
		const props = { ctaElement: 'hello', productCode: 'P2' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders Standard access for standard subscription lowercase', () => {
		const props = { ctaElement: 'hello', productCode: 'p1' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders Standard access for standard subscription uppercase', () => {
		const props = { ctaElement: 'hello', productCode: 'P1' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders ePaper access for ePaper subscription lowercase', () => {
		const props = { ctaElement: 'hello', productCode: 'ep' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders ePaper access for ePaper subscription uppercase', () => {
		const props = { ctaElement: 'hello', productCode: 'EP' };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders FT access if subscription prop is null', () => {
		const props = { ctaElement: 'hello', productCode: null };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});

	it('renders FT access if subscription prop is undefined', () => {
		const props = { ctaElement: 'hello', productCode: undefined };

		expect(B2CPartnershipConfirmation).toRenderCorrectly(props);
	});
});
