import React from 'react';
import { AcceptTermsPrivacyPolicy } from './accept-terms-privacy-policy';
import { Submit } from './submit';

export default {
	title: 'Accept Terms Privacy Policy',
	component: AcceptTermsPrivacyPolicy,
};

export const Basic = (args) => <AcceptTermsPrivacyPolicy {...args} />;
Basic.args = {};

export const AcceptTermsError = (args) => (
	<AcceptTermsPrivacyPolicy {...args} />
);
AcceptTermsError.args = {
	hasError: true,
};

export const AcceptTermsHidingTermsAndConditions = (args) => (
	<AcceptTermsPrivacyPolicy {...args} />
);
AcceptTermsHidingTermsAndConditions.args = {
	hideConfirmTermsAndConditions: true,
};

export const AcceptTermsWithChildren = (args) => (
	<AcceptTermsPrivacyPolicy {...args}>
		<Submit />
	</AcceptTermsPrivacyPolicy>
);
