import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { LicenceSignIn } from './licence-sign-in';

expect.extend(expectToRenderCorrectly);

describe('LicenceSignIn', () => {
	it('renders with default props', () => {
		const props = {};

		expect(LicenceSignIn).toRenderCorrectly(props);
	});

	it('renders with custom display name', () => {
		const props = { displayName: 'Display name text' };

		expect(LicenceSignIn).toRenderCorrectly(props);
	});

	it('renders if url is defined', () => {
		const props = { url: 'https://mytest.com' };

		expect(LicenceSignIn).toRenderCorrectly(props);
	});

});
