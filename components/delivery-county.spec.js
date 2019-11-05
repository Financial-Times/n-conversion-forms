import DeliveryCounty from './delivery-county';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DeliveryCounty', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-county.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(DeliveryCounty).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryCounty).toRenderAs(context, props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(DeliveryCounty).toRenderAs(context, props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(DeliveryCounty).toRenderAs(context, props);
	});
});
