import React from 'react';
import { LastName } from './last-name';

export default {
	title: 'Last Name',
	component: LastName,
};

export const Basic = (args) => <LastName {...args} />;
Basic.args = {};
