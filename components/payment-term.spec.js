import { PaymentTerm } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('PaymentTerm', () => {
	it('render with defaults', () => {
		const props = {};

		expect(PaymentTerm).toRenderCorrectly(props);
	});

	it('render with isPrintOrBundle', () => {
		const props = {
			isPrintOrBundle: true
		};

		expect(PaymentTerm).toRenderCorrectly(props);
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

				expect(PaymentTerm).toRenderCorrectly(props);
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

				expect(PaymentTerm).toRenderCorrectly(props);
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

				expect(PaymentTerm).toRenderCorrectly(props);
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

				expect(PaymentTerm).toRenderCorrectly(props);
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

				expect(PaymentTerm).toRenderCorrectly(props);
			});

			it('render option with monthlyPrice', () => {
				const props = {
					options: [{
						name: type,
						value: type,
						price: '£20.00',
						monthlyPrice: '£1.67'
					}]
				};

				expect(PaymentTerm).toRenderCorrectly(props);
			});
		});
	});
});
