import React from 'react';
import { DeliveryPostcode } from './delivery-postcode';
import { countriesSupportedISO } from '../helpers/supportedCountries';

export default {
	title: 'Delivery Postcode',
	component: DeliveryPostcode,
	argTypes: {
		additionalFieldInformation: { control: 'text' },
		country: {
			control: {
				type: 'inline-radio',
				options: countriesSupportedISO,
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
