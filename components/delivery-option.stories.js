import React from 'react';
import { DeliveryOption } from './delivery-option';

export default {
	title: 'Delivery Options',
	component: DeliveryOption,
	argTypes: {
		options: { control: 'array' },
	},
};

export const Basic = (args) => <DeliveryOption {...args} />;
Basic.args = {
	options: [
		{
			value: 'PV',
			isValidDeliveryOption: true,
		},
		{
			value: 'HD',
			isValidDeliveryOption: true,
		},
		{
			value: 'EV',
			isValidDeliveryOption: true,
		},
	],
};
