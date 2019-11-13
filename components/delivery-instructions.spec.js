import DeliveryInstructions from './delivery-instructions';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DeliveryInstructions', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-instructions.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(DeliveryInstructions).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryInstructions).toRenderAs(context, props);
	});

	it('renders with maxlength', () => {
		const props = { maxlength: 200 };

		expect(DeliveryInstructions).toRenderAs(context, props);
	});

	it('renders with rows', () => {
		const props = { rows: 20 };

		expect(DeliveryInstructions).toRenderAs(context, props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(DeliveryInstructions).toRenderAs(context, props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(DeliveryInstructions).toRenderAs(context, props);
	});
});
