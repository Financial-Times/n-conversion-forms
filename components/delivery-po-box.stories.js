import React from 'react';
import { DeliveryPOBox } from './delivery-po-box';

export default {
	title: 'Delivery P.O. Box',
	component: DeliveryPOBox,
	argTypes: {
		fieldId: { control: 'string' },
		inputId: { control: 'string' },
		value: { control: 'string' },
		maxlength: { control: 'number' },
		country: { control: 'string' },
		hasError: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		isHidden: { control: 'boolean' },
	},
};

export const Basic = (args) => <DeliveryPOBox {...args} />;

export const USAPOBox = (args) => <DeliveryPOBox {...args} />;
USAPOBox.args = {
	country: 'USA',
};

export const CanadaPOBox = (args) => <DeliveryPOBox {...args} />;
CanadaPOBox.args = {
	country: 'CAN',
};
