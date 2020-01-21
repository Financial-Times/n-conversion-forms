import { Submit } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Submit', () => {
	it('renders a submit element with default props', () => {
		const props = {};

		expect(Submit).toRenderCorrectly(props);
	});

	it('renders a submit element with a custom button ID', () => {
		const props = { id: 'foo' };

		expect(Submit).toRenderCorrectly(props);
	});

	it('renders a submit element with a style class to enable centre alignment', () => {
		const props = { isCentered: true };

		expect(Submit).toRenderCorrectly(props);
	});

	it('renders a submit element with a disabled button', () => {
		const props = { isDisabled: true };

		expect(Submit).toRenderCorrectly(props);
	});

	it('renders a submit element with a back button link', () => {
		const props = { backButtonUrl: 'http://bar.com' };

		expect(Submit).toRenderCorrectly(props);
	});

	it('renders a submit element with a custom button label', () => {
		const props = { label: 'Baz' };

		expect(Submit).toRenderCorrectly(props);
	});
});
