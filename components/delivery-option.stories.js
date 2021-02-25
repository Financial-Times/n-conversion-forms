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

export const US5or6DaysWeekDeliveryOptions = (args) => <DeliveryOption {...args} />;
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
	deliveryFrequency: 'A5',
};

export const USWeekendOnlyDeliveryOptions = (args) => <DeliveryOption {...args} />;
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
	deliveryFrequency: 'A1',
};
