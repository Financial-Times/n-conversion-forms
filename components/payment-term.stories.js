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
			name: 'monthly',
			price: '£49.99',
			value: 49.99,
			isTrial: false,
			discount: '33%',
			selected: false,
		},
		{
			name: 'annual',
			price: '£299.99',
			value: 299.99,
			isTrial: false,
			discount: null,
			selected: true,
		},
	],
};

export const FixedTermOffer = (args) => <div className="ncf"><Fieldset><PaymentTerm {...args} /></Fieldset></div>;
FixedTermOffer.args = {
	options: [
		{
			name: 'monthly',
			price: '$5.00',
			value: 5.00,
		}
	],
	isFixedTermOffer: true,
	displayName: 'Mix & Match'
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
			value: 270.00,
			isTrial: false,
			discount: '33%',
			bestOffer: true,
			selected: false,
			chargeOnText: 'You will be charged on May 1, 2021',
		},
		{
			title: '12 Month Subscription',
			price: '€ 300.00',
			value: 300.00,
			isTrial: false,
			discount: '10%',
			selected: true,
			chargeOnText: 'You will be charged on May 1, 2021',
		},
	],
	optionsInARow: true,
};
