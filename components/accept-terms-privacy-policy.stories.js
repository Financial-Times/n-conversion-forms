import React from 'react';
import { AcceptTermsPrivacyPolicy } from './accept-terms-privacy-policy';
import { Submit } from './submit';

export default {
	title: 'Accept Terms Privacy Policy',
	component: AcceptTermsPrivacyPolicy,
};

export const Basic = (args) => <AcceptTermsPrivacyPolicy {...args} />;
Basic.args = {};

export const NewBuyFlowHideTermsAndConditions = (args) => (
	<AcceptTermsPrivacyPolicy {...args} />
);
NewBuyFlowHideTermsAndConditions.args = {
	hideConfirmTermsAndConditions: true,
};

export const NewBuyFlowWithChildren = (args) => (
	<AcceptTermsPrivacyPolicy {...args}>
		<Submit />
	</AcceptTermsPrivacyPolicy>
);
NewBuyFlowWithChildren.args = {
	privacyPoliciesPosition: 'bottom',
};
