import React from 'react';
import { LiteSubConfirmation } from './lite-sub-confirmation';

export default {
	title: 'Light confirmation',
	component: LiteSubConfirmation,
	argTypes: {
		details: { control: 'array' },
		offerType: { control: 'string'},
		offerName: { control: 'string'},
	},
};

export const Basic = (args) => <LiteSubConfirmation {...args} />;
Basic.args = {
	offerType: 'Premium',
	details: [
		{
			title: 'End Date',
			data: 'September 3, 2021',
		},
		{
			title: '3 monthly payments',
			description: 'Total cost of subscription: $15.00',
			data: '$5.00 per month',
		},
		{
			title: 'Payment method',
			data: 'Credit / Debit Card',
		}
	],
	offerName: 'Standard',
	subscriptionAmount: '$5',
};
