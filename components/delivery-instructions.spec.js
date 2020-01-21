import { DeliveryInstructions } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryInstructions', () => {
	it('renders with default props', () => {
		const props = { placeholder: 'test' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { placeholder: 'test', hasError: true };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with maxlength', () => {
		const props = { placeholder: 'test', maxlength: 200 };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with rows', () => {
		const props = { placeholder: 'test', rows: 20 };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with a custom value', () => {
		const props = { placeholder: 'test', value: 'foobar' };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});

	it('renders with a disabled input element', () => {
		const props = { placeholder: 'test', isDisabled: true };

		expect(DeliveryInstructions).toRenderCorrectly(props);
	});
});
