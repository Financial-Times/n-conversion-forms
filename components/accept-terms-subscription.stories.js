import React from 'react';
import { AcceptTermsSubscription } from './accept-terms-subscription';

export default {
	title: 'Accept Terms Subscription',
	component: AcceptTermsSubscription,
};

export const Basic = (args) => <AcceptTermsSubscription {...args} />;
Basic.args = {};

export const PrintProduct = (args) => <AcceptTermsSubscription {...args} />;

PrintProduct.args = {
	isPrintProduct: true,
};

export const PrintProductTrial = (args) => (
	<AcceptTermsSubscription {...args} />
);

PrintProductTrial.args = {
	isPrintProduct: true,
	isTrial: true,
};

export const isSingleTerm = (args) => <AcceptTermsSubscription {...args} />;

isSingleTerm.args = {
	isSingleTerm: true,
};

export const isTransition = (args) => <AcceptTermsSubscription {...args} />;

isTransition.args = {
	isTransition: true,
};

export const transitionType = (args) => <AcceptTermsSubscription {...args} />;

transitionType.args = {
	transitionType: true,
};

export const isDeferredBilling = (args) => (
	<AcceptTermsSubscription {...args} />
);

isDeferredBilling.args = {
	isDeferredBilling: true,
};
