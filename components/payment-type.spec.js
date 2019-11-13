import PaymentType from './payment-type';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {
};

expect.extend(expectToRenderAs);

describe('PaymentType', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('payment-type.html');
	});

	it('render with default props', () => {
		const props = {};

		expect(PaymentType).toRenderAs(context, props);
	});

	it('render with enableApplepay', () => {
		const props = {
			enableApplepay: true
		};

		expect(PaymentType).toRenderAs(context, props);
	});

	it('render with enableCreditcard', () => {
		const props = {
			enableCreditcard: true
		};

		expect(PaymentType).toRenderAs(context, props);
	});

	it('render with enableDirectdebit', () => {
		const props = {
			enableDirectdebit: true
		};

		expect(PaymentType).toRenderAs(context, props);
	});

	it('render with enablePaypal', () => {
		const props = {
			enablePaypal: true
		};

		expect(PaymentType).toRenderAs(context, props);
	});

	it('render with value', () => {
		const props = {
			value: 'paypal'
		};

		expect(PaymentType).toRenderAs(context, props);
	});
});
