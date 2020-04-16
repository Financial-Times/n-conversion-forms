import React from 'react';
import { DeliveryAddress } from './delivery-address';

export default {
	title: 'Delivery Address',
	component: DeliveryAddress,
};

export const Basic = (args) => <DeliveryAddress {...args} />;
