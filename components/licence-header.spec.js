import LicenceHeader from './licence-header';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('LicenceHeader', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('licence-header.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(LicenceHeader).toRenderAs(context, props);
	});

	it('renders with custom display name', () => {
		const props = { displayName: 'Display name text' };

		expect(LicenceHeader).toRenderAs(context, props);
	});

	it('renders if is trial', () => {
		const props = { isTrial: true };

		expect(LicenceHeader).toRenderAs(context, props);
	});

	it('renders with custom welcome text (that requires escaping, e.g. ampersand)', () => {
		const props = { welcomeText: 'Welcome text & some more welcome text' };

		expect(LicenceHeader).toRenderAs(context, props);
	});
});
