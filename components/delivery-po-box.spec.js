import { DeliveryPOBox } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryPOBox', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeliveryPOBox).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryPOBox).toRenderCorrectly(props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'PO Box 1054' };

		expect(DeliveryPOBox).toRenderCorrectly(props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(DeliveryPOBox).toRenderCorrectly(props);
	});
});
