import React from 'react';
import { AcceptTerms } from './accept-terms';
import { Submit } from './submit';

export default {
	title: 'Basic Accept Terms',
	component: AcceptTerms,
	argTypes: {
		transitionType: {
			control: {
				type: 'inline-radio',
				options: ['immediate', 'endOfTerm'],
			},
		},
		withPrivacyPolicyTerms: {
			control: 'boolean',
			table: {
				type: { summary: 'Show privacy policy terms' },
			},
		},
		hasError: { control: 'boolean' },
		isSignup: { control: 'boolean' },
		isChecked: { control: 'boolean' },
		isB2b: { control: 'boolean' },
		isB2cPartnership: { control: 'boolean' },
		isEmbedded: { control: 'boolean' },
		isCorpSignup: { control: 'boolean' },
		isTrial: { control: 'boolean' },
		isTransition: { control: 'boolean' },
		isPrintProduct: { control: 'boolean' },
		isSingleTerm: { control: 'boolean' },
		hideConfirmTermsAndConditions: { control: 'boolean' },
		isDeferredBilling: { control: 'boolean' },
		children: {
			control: false,
			table: {
				type: {
					summary: "Only rendered when 'withPrivacyPolicyTerms' is true",
				},
			},
		},
		privacyPoliciesPosition: {
			options: ['top', 'bottom'],
			control: {
				type: 'inline-radio',
			},
			table: {
				type: { summary: "Placement of the 'Privacy Policies' text" },
			},
		},
	},
};

export const Basic = (args) => <AcceptTerms {...args} />;
Basic.args = {};

export const NewBuyFlow = (args) => <AcceptTerms {...args} />;
NewBuyFlow.args = {
	withPrivacyPolicyTerms: true,
};

export const NewBuyFlowEmailVerification = (args) => <AcceptTerms {...args} />;
NewBuyFlowEmailVerification.args = {
	withPrivacyPolicyTerms: true,
	hideConfirmTermsAndConditions: true,
};

export const NewBuyFlowWithChildren = (args) => (
	<AcceptTerms {...args}>
		<Submit />
	</AcceptTerms>
);
NewBuyFlowWithChildren.args = {
	withPrivacyPolicyTerms: true,
	privacyPoliciesPosition: 'bottom',
};
NewBuyFlowWithChildren.parameters = {
	controls: {
		include: ['privacyPoliciesPosition', 'withPrivacyPolicyTerms', 'children'],
		expanded: true,
	},
};
