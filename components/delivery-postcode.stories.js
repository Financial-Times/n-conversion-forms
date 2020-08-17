import React from 'react';
import { DeliveryPostcode } from './delivery-postcode';

export default {
	title: 'Delivery Postcode',
	component: DeliveryPostcode,
	argTypes: {
		additionalFieldInformation: { control: 'text' },
		country: { control: {
			type: 'inline-radio', options: ['USA', 'CAN', 'Other']
		} }
	},
};

export const Basic = (args) => <DeliveryPostcode {...args} />;
Basic.args = {
	additionalFieldInformation: 'Some extra information.'
};
