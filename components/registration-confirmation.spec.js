import RegistrationConfirmation from './registration-confirmation';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('RegistrationConfirmation', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('registration-confirmation.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(RegistrationConfirmation).toRenderAs(context, props);
	});

	it('renders with a custom email', () => {
		const props = { email: 'test@example.com' };

		expect(RegistrationConfirmation).toRenderAs(context, props);
	});
});
