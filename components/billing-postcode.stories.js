import React from 'react';
import { BillingPostcode } from './billing-postcode';

export default {
	title: 'Billing Postcode',
	component: BillingPostcode,
};

export const Basic = (args) => <BillingPostcode {...args} />;
Basic.args = {
	postcodeReference: 'Postcode',
};
