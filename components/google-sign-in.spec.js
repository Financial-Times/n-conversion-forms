import { GoogleSignIn } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('GoogleSignIn', () => {
	it('renders with default props', () => {
		const props = {
			signInRedirectUrl: 'https://www.ft.com',
		};

		expect(GoogleSignIn).toRenderCorrectly(props);
	});
});
