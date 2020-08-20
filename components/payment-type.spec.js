import { PaymentType } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('PaymentType', () => {
	it('render with default props', () => {
		const props = {};

		expect(PaymentType).toRenderCorrectly(props);
	});

	it('render with enableApplepay', () => {
		const props = {
			enableApplepay: true
		};

		expect(PaymentType).toRenderCorrectly(props);
	});

	it('render with enableCreditcard', () => {
		const props = {
			enableCreditcard: true
		};

		expect(PaymentType).toRenderCorrectly(props);
	});

	it('render with enableDirectdebit', () => {
		const props = {
			enableDirectdebit: true
		};

		expect(PaymentType).toRenderCorrectly(props);
	});

	it('render with enablePaypal', () => {
		const props = {
			enablePaypal: true
		};

		expect(PaymentType).toRenderCorrectly(props);
	});

	it('render with value', () => {
		const props = {
			value: 'paypal'
		};

		expect(PaymentType).toRenderCorrectly(props);
	});

	it('can initialise with the loader visible', () => {
		const props = {
			showLoaderOnInit: true
		};

		expect(PaymentType).toRenderCorrectly({}, props);
	});
});
