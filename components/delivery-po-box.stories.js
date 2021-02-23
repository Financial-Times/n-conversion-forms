import React from 'react';
import { DeliveryPOBox } from './delivery-po-box';

export default {
	title: 'Delivery P.O. Box',
	component: DeliveryPOBox,
};

export const Basic = (args) => <DeliveryPOBox {...args} />;
