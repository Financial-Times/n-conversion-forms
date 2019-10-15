import Password from './password';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {
};

expect.extend(expectToRenderAs);

describe('Password', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('password.html');
	});

	it('render a password input with a label', () => {
		const props = {};

		expect(Password).toRenderAs(context, props);

	});

	it('can render a disable input', () => {
		const props = {
			isDisabled: true,
		};

		expect(Password).toRenderAs(context, props);

	});

	it('can render a pattern attribute', () => {
		const props = {
			pattern: 'Whatever'
		};

		expect(Password).toRenderAs(context, props);

	});

	it('can render as an Error', () => {
		const props = {
			hasError: true,
		};

		expect(Password).toRenderAs(context, props);
	});

	it('can render as an Unknown user', () => {
		const props = {
			unknownUser: true,
		};

		expect(Password).toRenderAs(context, props);
	});
});
