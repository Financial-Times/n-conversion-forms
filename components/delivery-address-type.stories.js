import React from 'react';
import { DeliveryAddressType } from './delivery-address-type';

export default {
	title: 'Delivery Address Type',
	component: DeliveryAddressType,
};

export const Basic = (args) => (
	<div className="ncf">
		<DeliveryAddressType {...args} />
	</div>
);

export const HomeAndCompanyTypes = (args) => (
	<div className="ncf">
		<DeliveryAddressType {...args} />
	</div>
);
HomeAndCompanyTypes.args = {
	value: 'home',
	options: ['home', 'company'],
};
