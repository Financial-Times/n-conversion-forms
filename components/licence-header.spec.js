import { LicenceHeader } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('LicenceHeader', () => {
	it('renders with default props', () => {
		const props = {};

		expect(LicenceHeader).toRenderCorrectly(props);
	});

	it('renders with custom display name', () => {
		const props = { displayName: 'Display name text' };

		expect(LicenceHeader).toRenderCorrectly(props);
	});

	it('renders if is trial', () => {
		const props = { isTrial: true };

		expect(LicenceHeader).toRenderCorrectly(props);
	});

	it('renders if is isB2cPartnershipLicence', () => {
		const props = { isB2cPartnershipLicence: true };

		expect(LicenceHeader).toRenderCorrectly(props);
	});

	it('renders with custom welcome text (that requires escaping, e.g. ampersand)', () => {
		const props = { welcomeText: 'Welcome text & some more welcome text' };

		expect(LicenceHeader).toRenderCorrectly(props);
	});
});
