import React from 'react';
import { DeliveryInstructions } from './delivery-instructions';

export default {
	title: 'Delivery Instructions',
	component: DeliveryInstructions,
	argTypes: {
		hasSignupSecurityNote: { control: 'boolean' },
		hasError: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
	},
};

export const Basic = (args) => <DeliveryInstructions {...args} />;

export const SpanMessageForUSA = (args) => <DeliveryInstructions {...args} />;
SpanMessageForUSA.args = {
	country: 'USA',
};

export const SpanMessageForCAN = (args) => <DeliveryInstructions {...args} />;
SpanMessageForCAN.args = {
	country: 'CAN',
};
