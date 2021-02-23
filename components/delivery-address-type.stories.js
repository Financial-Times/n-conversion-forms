import React from 'react';
import { DeliveryAddressType } from './delivery-address-type';

export default {
	title: 'Delivery Address Type',
	component: DeliveryAddressType,
};

export const Basic = (args) => <DeliveryAddressType {...args} />;
