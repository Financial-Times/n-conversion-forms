import React from 'react';
import { DeliveryAddress } from './delivery-address';
import { countriesSupportedISO } from '../helpers/supportedCountries';

export default {
	title: 'Delivery Address',
	component: DeliveryAddress,
	argTypes: {
		fieldId: { control: 'string' },
		hasError: { control: 'boolean' },
		line1: { control: 'string' },
		line2: { control: 'string' },
		line3: { control: 'string' },
		isDisabled: { control: 'boolean' },
		isHidden: { control: 'boolean' },
		country: {
			control: {
				type: 'inline-radio',
				options: countriesSupportedISO,
			},
		},
	},
};

export const Basic = (args) => <DeliveryAddress {...args} />;

export const USADeliveryAddress = (args) => <DeliveryAddress {...args} />;
USADeliveryAddress.args = {
	country: 'USA',
	addressType: 'home',
};

export const UKDeliveryAddress = (args) => <DeliveryAddress {...args} />;
UKDeliveryAddress.args = {
	country: 'GBR',
	addressType: 'home',
};
