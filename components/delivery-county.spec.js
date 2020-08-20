import { DeliveryCounty } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryCounty', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeliveryCounty).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryCounty).toRenderCorrectly(props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(DeliveryCounty).toRenderCorrectly(props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(DeliveryCounty).toRenderCorrectly(props);
	});
});
