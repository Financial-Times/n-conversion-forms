import React from 'react';
import { FirstName } from './first-name';

export default {
	title: 'First Name',
	component: FirstName,
};

export const Basic = (args) => <FirstName {...args} />;
Basic.args = {};
