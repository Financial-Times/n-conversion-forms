import React from 'react';
import { Password } from './password';

export default {
	title: 'Password',
	component: Password,
};

export const Basic = (args) => <Password {...args} />;
Basic.args = {};
