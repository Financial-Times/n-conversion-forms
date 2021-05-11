import React from 'react';
import { DeliveryOption } from './delivery-option';

export default {
	title: 'Delivery Options',
	component: DeliveryOption,
	argTypes: {
		options: { control: 'array' },
		country: { control: 'string' },
		productCode: { control: 'string' },
	},
};

export const Basic = (args) => <div className="ncf"><DeliveryOption {...args} /></div>;
Basic.args = {
	country: 'GBR',
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

export const US5or6DaysWeekDeliveryOptions = (args) => <div className="ncf"><DeliveryOption {...args} /></div>;
US5or6DaysWeekDeliveryOptions.args = {
	options: [
		{
			value: 'HD',
			isValidDeliveryOption: true,
			deliveryOnPublicationDate: true,
			flightMarket: false,
			mailDelivery: false,
		},
		{
			value: 'HD',
			isValidDeliveryOption: true,
			deliveryOnPublicationDate: false,
			flightMarket: false,
			mailDelivery: true,
		}
	],
	country: 'USA',
	productCode: 'P2N6D',
};

export const USWeekendOnlyDeliveryOptions = (args) => <div className="ncf"><DeliveryOption {...args} /></div>;
USWeekendOnlyDeliveryOptions.args = {
	options: [
		{
			value: 'HD',
			isValidDeliveryOption: true,
			deliveryOnPublicationDate: false,
			flightMarket: false,
			mailDelivery: false,
		},
		{
			value: 'HD',
			isValidDeliveryOption: true,
			mailDelivery: true,
		}
	],
	country: 'USA',
	productCode: 'NWE',
};
