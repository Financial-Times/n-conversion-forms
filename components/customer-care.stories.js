import React from 'react';
import { CustomerCare } from './customer-care';

export default {
	title: 'Customer Care',
	component: CustomerCare,
};

export const Basic = (args) => <CustomerCare {...args} />;
