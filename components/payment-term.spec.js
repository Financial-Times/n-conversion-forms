import PaymentTerm from './payment-term';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('PaymentTerm', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('payment-term.html');
	});

	it('render with defaults', () => {
		const props = {};

		expect(PaymentTerm).toRenderAs(context, props);
	});

	it('render with isPrintOrBundle', () => {
		const props = {
			isPrintOrBundle: true
		};

		expect(PaymentTerm).toRenderAs(context, props);
	});

	['annual', 'quarterly', 'monthly'].forEach(type => {
		describe(`${type} option`, () => {
			it('render option', () => {
				const props = {
					options: [{
						name: type,
						value: type,
						price: '£20.00'
					}]
				};

				expect(PaymentTerm).toRenderAs(context, props);
			});

			it('render option with discount', () => {
				const props = {
					options: [{
						name: type,
						value: type,
						price: '£20.00',
						discount: '25% off'
					}]
				};

				expect(PaymentTerm).toRenderAs(context, props);
			});

			it('render option with isTrial', () => {
				const props = {
					options: [{
						name: type,
						value: type,
						price: '£20.00',
						isTrial: true
					}]
				};

				expect(PaymentTerm).toRenderAs(context, props);
			});

			it('render option with selected', () => {
				const props = {
					options: [{
						name: type,
						value: type,
						price: '£20.00',
						selected: true
					}]
				};

				expect(PaymentTerm).toRenderAs(context, props);
			});

			it('render option with trial', () => {
				const props = {
					options: [{
						name: type,
						value: type,
						price: '£20.00',
						isTrial: true,
						trialDuration: '6 weeks',
						trialPrice: '£1.00'
					}]
				};

				expect(PaymentTerm).toRenderAs(context, props);
			});

			it('render option with weeklyPrice', () => {
				const props = {
					options: [{
						name: type,
						value: type,
						price: '£20.00',
						weeklyPrice: '0.50p'
					}]
				};

				expect(PaymentTerm).toRenderAs(context, props);
			});
		});
	});
});
