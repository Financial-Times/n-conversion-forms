import {expectToRenderCorrectly} from '../test-jest/helpers/expect-to-render-correctly';
import {LicenceTitle} from './licence-title';

expect.extend(expectToRenderCorrectly);

describe('LicenceTitle', () => {
	it('renders with default props', () => {
		const props = {};

		expect(LicenceTitle).toRenderCorrectly(props);
	});

	it('renders with custom display name', () => {
		const props = { displayName: 'Display name text' };

		expect(LicenceTitle).toRenderCorrectly(props);
	});

	it('renders if is trial', () => {
		const props = { isTrial: true };

		expect(LicenceTitle).toRenderCorrectly(props);
	});

	it('renders if is isB2cPartnershipLicence', () => {
		const props = { isB2cPartnershipLicence: true };

		expect(LicenceTitle).toRenderCorrectly(props);
	});
});
