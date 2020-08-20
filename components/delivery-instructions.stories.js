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
