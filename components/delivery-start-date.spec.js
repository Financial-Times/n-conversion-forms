import DeliveryStartDate from './delivery-start-date';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('DeliveryStartDate', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-start-date.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(DeliveryStartDate).toRenderAs(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryStartDate).toRenderAs(context, props);
	});

	it('renders with a custom date', () => {
		const props = { date: '5th November 2019' };

		expect(DeliveryStartDate).toRenderAs(context, props);
	});

	it('renders with a custom input value', () => {
		const props = { value: 'Foobar' };

		expect(DeliveryStartDate).toRenderAs(context, props);
	});

	it('renders with a custom input min value', () => {
		const props = { min: '1' };

		expect(DeliveryStartDate).toRenderAs(context, props);
	});

	it('renders with a custom input max value', () => {
		const props = { date: '2' };

		expect(DeliveryStartDate).toRenderAs(context, props);
	});

	it('renders with a disabled input', () => {
		const props = { isDisabled: true };

		expect(DeliveryStartDate).toRenderAs(context, props);
	});
});
