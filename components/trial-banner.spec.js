import TrialBanner from './trial-banner';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('TrialBanner', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('trial-banner.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(TrialBanner).toRenderAs(context, props);
	});
});
