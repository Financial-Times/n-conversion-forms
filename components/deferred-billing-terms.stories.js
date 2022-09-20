import React from 'react';
import { DeferredBillingTerms } from './deferred-billing-terms';

export default {
	title: 'Deferred Billing Terms',
	component: DeferredBillingTerms,
	argTypes: {
		hasError: { control: 'boolean' },
		isChecked: { control: 'boolean' },
		inputId: { control: 'string' },
		fieldId: { control: 'string' },
		trackableAttr: { control: 'string' },
		errorMessage: { control: 'string' },
		isDeferredBilling: { control: 'boolean' }
	}
};

export const Basic = (args) => <DeferredBillingTerms {...args} />;
Basic.args = {};

export const CheckedFlow = (args) => <DeferredBillingTerms {...args} />;
CheckedFlow.args = {
	isChecked: true,
	isDeferredBilling: true,
	hasError: false
};
