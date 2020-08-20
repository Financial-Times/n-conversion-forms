import { LicenceConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('LicenceConfirmation', () => {
	it('renders with default props', () => {
		const props = {};

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders if is trial', () => {
		const props = { isTrial: true };

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders if is embedded', () => {
		const props = { isEmbedded: true };

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders with custom duration value', () => {
		const props = { duration: 'one month' };

		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders if educational licence', () => {
		const props = { isEducationalLicence: true };
		expect(LicenceConfirmation).toRenderCorrectly(props);
	});

	it('renders if content id', () => {
		const props = { contentId: 'd19dc7a6-c33b-4931-9a7e-4a74674da29a' };
		expect(LicenceConfirmation).toRenderCorrectly(props);
	});
});
