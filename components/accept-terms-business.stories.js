import React from 'react';
import { AcceptTermsBusiness } from './accept-terms-business';

export default {
	title: 'Accept Terms Business',
	component: AcceptTermsBusiness,
};

export const Basic = (args) => <AcceptTermsBusiness {...args} />;
Basic.args = {};

export const AcceptTermsBusinessB2b = (args) => (
	<AcceptTermsBusiness {...args} />
);
AcceptTermsBusinessB2b.args = {
	isB2b: true,
};

export const AcceptTermsBusinessTrial = (args) => (
	<AcceptTermsBusiness {...args} />
);
AcceptTermsBusinessTrial.args = {
	isTrial: true,
};

export const AcceptTermsBusinessTrialAndB2b = (args) => (
	<AcceptTermsBusiness {...args} />
);
AcceptTermsBusinessTrialAndB2b.args = {
	isTrial: true,
	isB2b: true,
};
/*
export const AcceptTermsWithChildren = (args) => (
    <AcceptTermsPrivacyPolicy {...args}>
        <Submit />
    </AcceptTermsPrivacyPolicy>
);
 */
