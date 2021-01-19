import React from 'react';
import { Organisation } from './organisation';

export default {
	title: 'Organisation',
	component: Organisation,
};

export const Basic = (args) => <Organisation {...args} />;
Basic.args = {};
