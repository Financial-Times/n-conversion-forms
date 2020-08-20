import React from 'react';
import { Confirmation } from './confirmation';

export default {
	title: 'Confirmation',
	component: Confirmation,
	argTypes: {
		details: { control: 'array' },
	},
};

export const Basic = (args) => <Confirmation {...args} />;
Basic.args = {
	offer: 'Premium Digital',
	details: [
		{
			title: 'Renewal Cost',
			description: 'The price your subscription will auto renew',
			data: '£100,000,000.00',
		},
		{
			title: 'Renewal Date',
			description: 'The date your subscription will auto renew',
			data: 'Dec 25, 2020',
		}
	]
};
