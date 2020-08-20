import { TrialBanner } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('TrialBanner', () => {
	it('renders with default props', () => {
		const props = {};

		expect(TrialBanner).toRenderCorrectly(props);
	});
});
