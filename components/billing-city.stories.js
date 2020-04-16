import React from 'react';
import { BillingCity } from './billing-city';

export default {
	title: 'Billing City',
	component: BillingCity,
};

export const Basic = (args) => <BillingCity {...args} />;
Basic.args = {
	hasError: false,
	value: '',
	isDisabled: false,
};
