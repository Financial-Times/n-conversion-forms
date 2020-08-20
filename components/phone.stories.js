import React from 'react';
import { Phone } from './phone';

export default {
	title: 'Phone',
	component: Phone,
};

export const Basic = (args) => <Phone {...args} />;
Basic.args = {};
