import { AppBanner } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('AppBanner', () => {
	it('renders', () => {
		const props = {};

		expect(AppBanner).toRenderCorrectly(props);
	});
});
