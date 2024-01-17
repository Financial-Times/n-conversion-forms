import React from 'react';
import { Industry } from './industry';

export default {
	title: 'Industry',
	component: Industry,
};

export const Basic = (args) => <Industry {...args} />;
Basic.args = {
	options: [
		{ code: 'AGR', description: 'Agriculture' },
		{ code: 'COM', description: 'Computing' },
	],
};

export const Default = (args) => <Industry {...args} />;
Default.args = {};
