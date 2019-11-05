import DeliveryAddress from './delivery-address';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DeliveryAddress', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-address.html');
	});

	it('renders default props', () => {
		const props = {};

		expect(DeliveryAddress).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryAddress).toRenderAs(context, props);
	});

	it('renders with custom line 1 value', () => {
		const props = { line1: 'Line 1 text' };

		expect(DeliveryAddress).toRenderAs(context, props);
	});

	it('renders with custom line 2 value', () => {
		const props = { line2: 'Line 2 text' };

		expect(DeliveryAddress).toRenderAs(context, props);
	});

	it('renders with custom line 3 value', () => {
		const props = { line3: 'Line 3 text' };

		expect(DeliveryAddress).toRenderAs(context, props);
	});

	it('renders with disabled input elements', () => {
		const props = { isDisabled: true };

		expect(DeliveryAddress).toRenderAs(context, props);
	});
});
