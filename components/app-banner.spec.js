import AppBanner from './app-banner';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('AppBanner', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('app-banner.html');
	});

	it('renders', () => {
		const props = {};

		expect(AppBanner).toRenderAs(context, props);
	});
});
