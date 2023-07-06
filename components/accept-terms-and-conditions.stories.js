import React from 'react';
import { AcceptTermsAndConditions } from './accept-terms-and-conditions';

export default {
	title: 'Accept Terms and Conditions',
	component: AcceptTermsAndConditions,
};

export const Basic = (args) => <AcceptTermsAndConditions {...args} />;
Basic.args = {};

export const PrintProduct = (args) => <AcceptTermsAndConditions {...args} />;

PrintProduct.args = {
	isPrintProduct: true,
};

export const PrintProductTrial = (args) => (
	<AcceptTermsAndConditions {...args} />
);

PrintProductTrial.args = {
	isPrintProduct: true,
	isTrial: true,
};
