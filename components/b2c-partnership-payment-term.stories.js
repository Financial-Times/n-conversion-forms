import React from 'react';
import { Fieldset } from './fieldset';
import { B2cPartnershipPaymentTerm } from './b2c-partnership-payment-term';

export default {
	title: 'Payment Term',
	component: B2cPartnershipPaymentTerm,
};

export const Basic = (args) => <Fieldset><B2cPartnershipPaymentTerm {...args} /></Fieldset>;
Basic.args = {
	displayName: 'Digital FT + The Washington Post',
	partnerOffer: {
		duration: '90-day',
		name: 'All-Access Digital',
		vendor: 'The Washington Post'
	},
	conditions: [
		'90-day Washington Post subscription must be redeemed by 31 March 2021.'
	],
	offerType: 'DIGITAL',
	options: [
		{
			name: 'monthly',
			price: '£49.99',
			value: 49.99,
			isTrial: false,
			discount: '33%',
			selected: false
		},
		{
			name: 'annual',
			price: '£299.99',
			value: 299.99,
			isTrial: false,
			discount: null,
			selected: true
		}
	]
};
