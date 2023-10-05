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

export const IsSingleTerm = (args) => <AcceptTermsSubscription {...args} />;

IsSingleTerm.args = {
	isSingleTerm: true,
};

export const IsTransition = (args) => <AcceptTermsSubscription {...args} />;

IsTransition.args = {
	isTransition: true,
};

export const TransitionType = (args) => <AcceptTermsSubscription {...args} />;

TransitionType.args = {
	transitionType: true,
};

export const IsDeferredBilling = (args) => (
	<AcceptTermsSubscription {...args} />
);

IsDeferredBilling.args = {
	isDeferredBilling: true,
};
