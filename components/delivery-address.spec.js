import { DeliveryAddress } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryAddress', () => {
	it('renders default props', () => {
		const props = {};

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with custom line 1 value', () => {
		const props = { line1: 'Line 1 text' };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with custom line 2 value', () => {
		const props = { line2: 'Line 2 text' };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with custom line 3 value', () => {
		const props = { line3: 'Line 3 text' };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with disabled input elements', () => {
		const props = { isDisabled: true };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});
});
