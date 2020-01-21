import { BillingCity } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderCorrectly);

describe('BillingCity', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('billing-city.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(BillingCity).toRenderCorrectly(context, props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(BillingCity).toRenderCorrectly(context, props);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(BillingCity).toRenderCorrectly(context, props);
	});

	it('renders with a disabled input element', () => {
		const props = { isDisabled: true };

		expect(BillingCity).toRenderCorrectly(context, props);
	});
});
