import React from 'react';
import { DeliveryPostcode } from './delivery-postcode';

export default {
	title: 'Delivery Postcode',
	component: DeliveryPostcode,
	argTypes: {
		additionalFieldInformation: { control: 'text' },
		country: {
			control: {
				type: 'inline-radio',
				options: ['USA', 'CAN', 'FRA', 'IND'],
			},
		},
	},
};

export const Basic = (args) => <DeliveryPostcode {...args} />;
Basic.args = {
	additionalFieldInformation: 'Some extra information.',
};

export const WithLinkToChangeValue = (args) => <DeliveryPostcode {...args} />;
WithLinkToChangeValue.args = {
	country: 'USA',
	changePostcodeUrl: 'http://local.ft.com',
};
