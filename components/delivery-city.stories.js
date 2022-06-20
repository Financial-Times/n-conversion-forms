import React from 'react';
import { DeliveryCity } from './delivery-city';
import { countriesSupportedISO } from '../helpers/supportedCountries';

export default {
	title: 'Delivery City',
	component: DeliveryCity,
	argTypes: {
		country: {
			control: {
				type: 'inline-radio',
				options: countriesSupportedISO,
			},
		},
	},
};

export const Basic = (args) => <DeliveryCity {...args} />;
