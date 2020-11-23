import React from 'react';
import { LiteSubsConfirmation } from './lite-subs-confirmation';

export default {
	title: 'Confirmation',
	component: LiteSubsConfirmation,
	argTypes: {
		details: { control: 'array' },
	},
};

export const Basic = (args) => <LiteSubsConfirmation {...args} />;
Basic.args = {
	offer: 'Premium',
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
	]
};
