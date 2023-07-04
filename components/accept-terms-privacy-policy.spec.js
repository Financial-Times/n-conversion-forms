import { AcceptTermsPrivacyPolicy } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('AcceptTermsPrivacyPolicy', () => {
	it('renders with default props', () => {
		const props = {};

		expect(AcceptTermsPrivacyPolicy).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(AcceptTermsPrivacyPolicy).toRenderCorrectly(props);
	});

	it('renders appropriately if a signup', () => {
		const props = { isSignup: true };

		expect(AcceptTermsPrivacyPolicy).toRenderCorrectly(props);
	});

	it('renders appropriately if is checked', () => {
		const props = { isChecked: true };

		expect(AcceptTermsPrivacyPolicy).toRenderCorrectly(props);
	});
});
