import { RegistrationConfirmation } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('RegistrationConfirmation', () => {
	it('renders with default props', () => {
		const props = {};

		expect(RegistrationConfirmation).toRenderCorrectly(props);
	});

	it('renders with a custom email', () => {
		const props = { email: 'test@example.com' };

		expect(RegistrationConfirmation).toRenderCorrectly(props);
	});
});
