import CustomerCare from './customer-care';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('CustomerCare', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('customer-care.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(CustomerCare).toRenderAs(context, props);
	});

	it('renders with custom header text', () => {
		const props = { header: 'Header text' };

		expect(CustomerCare).toRenderAs(context, props);
	});

	it('renders with custom message text', () => {
		const props = { message: 'Message text' };

		expect(CustomerCare).toRenderAs(context, props);
	});
});
