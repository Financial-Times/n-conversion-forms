import React from 'react';
import { SevenDayPassExperimentConfirmation } from './seven-day-pass-experiment-confirmation';

export default {
	title: '7-day pass experiment confirmation',
	component: SevenDayPassExperimentConfirmation,
	argTypes: {
		details: { control: 'array' },
		offerType: { control: 'string' },
		offerName: { control: 'string' },
	},
};

export const Basic = (args) => <SevenDayPassExperimentConfirmation {...args} />;
Basic.args = {
	offerType: 'Premium',
	details: [
		{
			title: 'End Date',
			data: 'September 18, 2023',
		},
		{
			title: 'One-time payment',
			data: '£1.99',
		},
		{
			title: 'Payment method',
			data: 'Credit / Debit Card',
		},
	],
	offerName: '7-day pass',
	subscriptionAmount: '£1.99',
};
