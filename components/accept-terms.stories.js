import React from 'react';
import { AcceptTerms } from './accept-terms';

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
		isAuthFirstAccount: { control: 'boolean' },
		isAuthFirstPayment: { control: 'boolean' },
		hasError: { control: 'boolean' },
		isSignup: { control: 'boolean' },
		isRegister: { control: 'boolean' },
		isChecked: { control: 'boolean' },
		isB2b: { control: 'boolean' },
		isB2cPartnership: { control: 'boolean' },
		isEmbedded: { control: 'boolean' },
		isCorpSignup: { control: 'boolean' },
		isTrial: { control: 'boolean' },
		isTransition: { control: 'boolean' },
		isPrintProduct: { control: 'boolean' },
		isSingleTerm: { control: 'boolean' },
		isNewDigitalBuyFlowConsent: { control: 'boolean' },
		hideConfirmTermsAndConditions: { control: 'boolean' },
	},
};

export const Basic = (args) => <AcceptTerms {...args} />;
Basic.args = {};

export const NewBuyFlow = (args) => <AcceptTerms {...args} />;
NewBuyFlow.args = {
	isAuthFirstAccount: true,
};

export const NewBuyFlowEmailVerification = (args) => <AcceptTerms {...args} />;
NewBuyFlowEmailVerification.args = {
	isAuthFirstAccount: true,
	hideConfirmTermsAndConditions: true,
};
