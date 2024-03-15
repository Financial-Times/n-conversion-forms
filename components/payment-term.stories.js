import React from 'react';
import { Fieldset } from './fieldset';
import { PaymentTerm } from './payment-term';

export default {
	title: 'Payment Term',
	component: PaymentTerm,
};

export const Basic = (args) => (
	<div className="ncf">
		<Fieldset>
			<PaymentTerm {...args} />
		</Fieldset>
	</div>
);

Basic.args = {
	options: [
		{
			name: '2 yearly',
			isTrial: true,
			discount: '',
			selected: false,
			price: '$645.00',
			trialPrice: '$100.00',
			trialDuration: 'Trial period',
			monthlyPrice: '0',
			amount: '645.00',
			trialAmount: 100,
			value: 'P2Y',
			currency: 'USD',
		},
		{
			name: '3 yearly',
			isTrial: false,
			discount: '',
			selected: false,
			price: '$909.00',
			trialPrice: '$0.00',
			trialDuration: '',
			monthlyPrice: '0',
			amount: '909.00',
			trialAmount: null,
			value: 'P3Y',
			currency: 'USD',
		},
		{
			name: '6 monthly',
			isTrial: false,
			discount: '',
			selected: false,
			price: '$229.00',
			trialPrice: '$0.00',
			trialDuration: '',
			monthlyPrice: '0',
			amount: '229.00',
			trialAmount: null,
			value: 'P6M',
			currency: 'USD',
		},
		{
			name: 'annual',
			isTrial: false,
			discount: '',
			selected: true,
			price: '$385.00',
			trialPrice: '$0.00',
			trialDuration: '',
			monthlyPrice: '$32.09',
			amount: '385.00',
			trialAmount: null,
			value: 'P1Y',
			currency: 'USD',
		},
		{
			name: 'quarterly',
			isTrial: false,
			discount: '',
			selected: false,
			price: '$95.00',
			trialPrice: '$0.00',
			trialDuration: '',
			monthlyPrice: '$31.67',
			amount: '95.00',
			trialAmount: null,
			value: 'P3M',
			currency: 'USD',
		},
	],
};

export const TermedSubscriptionTermType = (args) => (
	<div className="ncf">
		<Fieldset>
			<PaymentTerm {...args} />
		</Fieldset>
	</div>
);
TermedSubscriptionTermType.args = {
	options: [
		{
			name: '8 weeks',
			price: '£19.00',
			amount: '19.00',
			value: 'P8W',
		},
	],
	isTermedSubscriptionTermType: true,
};

export const RenewOffers = (args) => (
	<div className="ncf">
		<Fieldset>
			<PaymentTerm {...args} />
		</Fieldset>
	</div>
);

RenewOffers.args = {
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

// https://financialtimes.atlassian.net/browse/ACQ-2592
// We need to have one specific trial offer to have terms displayed as non-trial.
// The offer is a trial offer and should use trial mechanics but should show as non-trial.
// There is nothing in the offer payload to identify when this should happen, we need to rely on the offer id.
// This is a TEMPORARY hack and will be removed once the campaign is over.
// A ticket as been raised already to deal with the clean up: https://financialtimes.atlassian.net/browse/ACQ-2593.
export const PaymentTermLabelOverride = (args) => (
	<div className="ncf">
		<Fieldset>
			<PaymentTerm {...args} />
		</Fieldset>
	</div>
);

PaymentTermLabelOverride.args = {
	isTrialOfferAsNonTrialOverride: true,
	labelOverride: 'some fancy payment term',
	options: [
		{
			name: '6 monthly',
			isTrial: false,
			discount: '',
			selected: false,
			price: '$229.00',
			trialPrice: '$0.00',
			trialDuration: '',
			monthlyPrice: '0',
			amount: '229.00',
			trialAmount: null,
			value: 'P6M',
			currency: 'USD',
		},
	],
};
