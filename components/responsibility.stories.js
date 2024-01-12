import React from 'react';
import { Responsibility } from './responsibility';

export default {
	title: 'Responsibility',
	component: Responsibility,
};

export const Basic = (args) => <Responsibility {...args} />;
Basic.args = {
	options: [
		{
			code: 'FIN',
			active: true,
			description: 'Accounting/finance',
		},
		{
			code: 'ADL',
			active: true,
			description: 'Administration',
		},
		{
			code: 'RES',
			active: true,
			description: 'Broker/trader',
		},
	],
};

export const Default = (args) => <Responsibility {...args} />;
Default.args = {};
