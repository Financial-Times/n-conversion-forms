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
			},
		];
		const wrapper = shallow(
			<PaymentTerm
				isFixedTermOffer={true}
				options={options}
				offerDisplayName="Mix & Match"
			/>
		);

		it('does not include renewal text', () => {
			expect(
				wrapper.find('.ncf__payment-term__renews-text').text()
			).not.toMatch(/Renews (annually|monthly|quarterly) unless cancelled/);
		});

		it('renders fixed term renewal text in English', () => {
			expect(wrapper.find('.ncf__payment-term__renews-text').text()).toMatch(
				/This subscription is for 3 months, charged monthly. You can cancel at anytime/
			);
		});

		it('renders offer name on payment term title', () => {
			expect(wrapper.find('.ncf__payment-term__title').text()).toMatch(
				'Mix & Match - Monthly'
			);
		});
	});

	describe('given is7DayPassExperiment is true', () => {
		const options = [
			{
				name: 'monthly',
				price: '$5.00',
				value: 'monthly',
				monthlyPrice: '$5.00',
			},
		];
		const wrapper = shallow(
			<PaymentTerm
				isFixedTermOffer={true}
				options={options}
				offerDisplayName="7-day pass"
				is7DayPassExperiment={true}
			/>
		);

		it('renders renewal text that actually reflects how the 7-day pass is a fixed term subscription with a one-off payment made at the outset', () => {
			expect(wrapper.find('.ncf__payment-term__renews-text').text()).toMatch(
				/This subscription is for 7 days, charged at the outset./
			);
		});

		it('renders offer name and omits payment term title', () => {
			expect(wrapper.find('.ncf__payment-term__title').text()).toMatch(
				'7-day pass'
			);
		});
	});

	describe('given isTermedSubscriptionTermType is true', () => {
		describe('options include duration expressed in weeks', () => {
			const options = [
				{
					price: '£19.00',
					amount: '19.00',
					value: 'P8W',
				},
			];
			const wrapper = shallow(
				<PaymentTerm options={options} isTermedSubscriptionTermType={true} />
			);

			it('renders subscription term as title', () => {
				expect(wrapper.find('.ncf__payment-term__title').text()).toMatch(
					'8 weeks'
				);
			});

			it('renders description text that reflects that the termed subscription requires a single payment that expresses the per duration cost for shorter durations', () => {
				expect(
					wrapper.find('.ncf__payment-term__description').text()
				).toContain(
					'Single £19.00 paymentThat’s equivalent to GBP9.50 per month'
				);
			});
		});

		describe('options include duration expressed in days', () => {
			const options = [
				{
					price: '£30.00',
					amount: '30.00',
					value: 'P90D',
				},
			];
			const wrapper = shallow(
				<PaymentTerm options={options} isTermedSubscriptionTermType={true} />
			);

			it('renders subscription term as title', () => {
				expect(wrapper.find('.ncf__payment-term__title').text()).toMatch(
					'90 days'
				);
			});

			it('renders description text that reflects that the termed subscription requires a single payment that expresses the per duration cost for shorter durations', () => {
				expect(
					wrapper.find('.ncf__payment-term__description').text()
				).toContain(
					'Single £30.00 paymentThat’s equivalent to GBP10.00 per month'
				);
			});
		});
	});

	describe('getDisplayName', () => {
		const baseOptions = {
			name: 'monthly',
			value: 'monthly',
			price: '£20.00',
			monthlyPrice: '£1.67',
		};
		describe('non-trial terms', () => {
			const options = [
				{
					...baseOptions,
					isTrial: false,
				},
			];
			it('renders with time period only if trial.option == false', () => {
				const wrapper = shallow(<PaymentTerm options={options} />);
				expect(wrapper.find('.ncf__payment-term__label').text()).toMatch(
					/^Monthly .*$/
				);
			});
		});
		describe('getDisplayName trial', () => {
			const trialOptions = {
				...baseOptions,
				isTrial: true,
			};
			it('defaults to `Premium digital`', () => {
				const options = [trialOptions];
				const wrapper = shallow(<PaymentTerm options={options} />);
				expect(wrapper.find('.ncf__payment-term__label').text()).toMatch(
					/^Trial: Premium Digital - Monthly .*$/
				);
			});
			it('handles trial to non-trial payment term display name', () => {
				const options = [trialOptions];
				const wrapper = shallow(
					<PaymentTerm
						options={options}
						labelOverride={'some term label'}
						isTrialOfferAsNonTrialOverride={true}
					/>
				);
				expect(wrapper.find('.ncf__payment-term__label').text()).toMatch(
					/^some term label.*$/
				);
			});
			it('renders using displayName if available', () => {
				const options = [
					{
						...trialOptions,
						displayName: 'someDisplayName',
					},
				];
				const wrapper = shallow(<PaymentTerm options={options} />);
				expect(wrapper.find('.ncf__payment-term__label').text()).toMatch(
					/^Trial: someDisplayName - Monthly .*/
				);
			});
		});
		describe('7-day pass experiment', () => {
			const options = [
				{
					...baseOptions,
					isTrial: false,
				},
			];
			it('renders with time period only if trial.option == false', () => {
				const wrapper = shallow(
					<PaymentTerm options={options} is7DayPassExperiment={true} />
				);
				expect(wrapper.find('.ncf__payment-term__label').text().trim()).toMatch(
					'£20.00 one-time paymentThis subscription is for 7 days, charged at the outset.'
				);
			});
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
				},
			];
			const wrapper = shallow(<PaymentTerm options={options} />);
			expect(wrapper.find('input').prop('data-base-amount')).toBe(100);
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
				},
			];
			const wrapper = shallow(<PaymentTerm options={options} />);
			expect(wrapper.find('input').prop('data-base-amount')).toBe(1);
		});
	});

	describe('When using custom options', () => {
		it('renders when not using an option in nameMap but provides a custom props instead', () => {
			const props = {
				showLegal: false,
				largePrice: true,
				options: [
					{
						title: 'Annual',
						subTitle: '(Renews annually unless cancelled)',
						price: '€ 270.00',
						value: 270.0,
						isTrial: false,
						discount: '33%',
						bestOffer: true,
						selected: false,
						chargeOnText: 'You will be charged on May 1, 2021',
					},
					{
						title: '12 Month Subscription',
						price: '€ 300.00',
						value: 300.0,
						isTrial: false,
						discount: '10%',
						selected: true,
						chargeOnText: 'You will be charged on May 1, 2021',
					},
				],
				optionsInARow: true,
			};

			expect(PaymentTerm).toRenderCorrectly(props);
		});
	});
});
