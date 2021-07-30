import { PaymentTerm } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

expect.extend(expectToRenderCorrectly);
Enzyme.configure({ adapter: new Adapter() });

describe('PaymentTerm', () => {
	it('render with defaults', () => {
		const props = {};

		expect(PaymentTerm).toRenderCorrectly(props);
	});

	it('render with isPrintOrBundle', () => {
		const props = {
			isPrintOrBundle: true,
		};

		expect(PaymentTerm).toRenderCorrectly(props);
	});

	['annual', 'quarterly', 'monthly'].forEach((type) => {
		describe(`${type} option`, () => {
			it('render option', () => {
				const props = {
					options: [
						{
							name: type,
							value: type,
							price: '£20.00',
						},
					],
				};

				expect(PaymentTerm).toRenderCorrectly(props);
			});

			it('render option with discount', () => {
				const props = {
					options: [
						{
							name: type,
							value: type,
							price: '£20.00',
							discount: '25% off',
						},
					],
				};

				expect(PaymentTerm).toRenderCorrectly(props);
			});

			it('render option with isTrial', () => {
				const props = {
					options: [
						{
							name: type,
							value: type,
							price: '£20.00',
							isTrial: true,
						},
					],
				};

				expect(PaymentTerm).toRenderCorrectly(props);
			});

			it('render option with selected', () => {
				const props = {
					options: [
						{
							name: type,
							value: type,
							price: '£20.00',
							selected: true,
						},
					],
				};

				expect(PaymentTerm).toRenderCorrectly(props);
			});

			it('render option with trial', () => {
				const props = {
					options: [
						{
							name: type,
							value: type,
							price: '£20.00',
							isTrial: true,
							trialDuration: '6 weeks',
							trialPrice: '£1.00',
						},
					],
				};

				expect(PaymentTerm).toRenderCorrectly(props);
			});

			it('render option with monthlyPrice', () => {
				const props = {
					options: [
						{
							name: type,
							value: type,
							price: '£20.00',
							monthlyPrice: '£1.67',
						},
					],
				};

				expect(PaymentTerm).toRenderCorrectly(props);
			});
		});
	});

	describe('given isFixedTermOffer prop is set to true', () => {
		const options = [
			{
				name: 'monthly',
				price: '$5.00',
				value: 'monthly',
				monthlyPrice: '$5.00',
			}
		];
		const wrapper = shallow(<PaymentTerm isFixedTermOffer={true} options={options} displayName='Mix & Match' />);

		it('should not include renewal text', () => {
			expect(wrapper.find('.ncf__payment-term__renews-text').text()).not.toMatch(/Renews (annually|monthly|quarterly) unless cancelled/);
		});

		it('should render fixed term renewal text in English', () => {
			expect(wrapper.find('.ncf__payment-term__renews-text').text()).toMatch(/This subscription is charged monthly and can be cancelled at anytime/);
		});

		it('should render offer name on payment term title', () => {
			expect(wrapper.find('.ncf__payment-term__title').text()).toMatch(
				'Mix & Match - Monthly'
			);
		});
	});

	describe('[data-base-amount]', () => {
		it('renders option.amount as data-base-amount if isTrial is false', () => {
			const options = [
				{
					name: 'monthly',
					price: '$5.00',
					value: 'monthly',
					monthlyPrice: '$5.00',
					isTrial: false,
					amount: 100,
					trialAmount: 1,
				}
			];
			const wrapper = shallow(<PaymentTerm options={options} />);
			expect(wrapper.find('input').prop('data-base-amount')).toEqual(100);
		});

		it('renders option.trialAmount as data-base-amount if isTrial is true', () => {
			const options = [
				{
					name: 'monthly',
					price: '$5.00',
					value: 'monthly',
					monthlyPrice: '$5.00',
					isTrial: true,
					amount: 100,
					trialAmount: 1,
				}
			];
			const wrapper = shallow(<PaymentTerm options={options} />);
			expect(wrapper.find('input').prop('data-base-amount')).toEqual(1);
		});

	});
});
