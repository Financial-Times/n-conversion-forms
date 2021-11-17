import { DecisionMaker } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DecisionMaker', () => {
	it('renders with default props', () => {
		const props = { value: 'yes' };

		expect(DecisionMaker).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { value: 'yes', hasError: true };

		expect(DecisionMaker).toRenderCorrectly(props);
	});

	it('renders with \'no\' as default state for radio buttons', () => {
		const props = { value: 'no' };

		expect(DecisionMaker).toRenderCorrectly(props);
	});
});
