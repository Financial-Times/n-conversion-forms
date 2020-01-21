import { DeliveryCity } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryCity', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeliveryCity).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryCity).toRenderCorrectly(props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(DeliveryCity).toRenderCorrectly(props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(DeliveryCity).toRenderCorrectly(props);
	});
});
