import React from 'react';
import { Province } from './province';

export default {
	title: 'Province',
	component: Province,
};

export const Basic = (args) => <Province {...args} />;
Basic.args = {
	provinces: [
		{
			code: 'AB',
			name: 'Alberta',
		},
		{
			code: 'BC',
			name: 'British Columbia',
		},
	],
};
