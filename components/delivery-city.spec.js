import DeliveryCity from './delivery-city';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DeliveryCity', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-city.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(DeliveryCity).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryCity).toRenderAs(context, props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(DeliveryCity).toRenderAs(context, props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(DeliveryCity).toRenderAs(context, props);
	});
});
