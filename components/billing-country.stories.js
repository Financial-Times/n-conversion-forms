import React from 'react';
import { BillingCountry } from './billing-country';

export default {
	title: 'Billing Country',
	component: BillingCountry,
	argTypes: {
		filterList: { control: 'array' },
	},
};

export const Basic = (args) => <BillingCountry {...args} />;
