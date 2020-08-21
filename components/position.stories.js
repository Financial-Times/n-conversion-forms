import React from 'react';
import { Position } from './position';

export default {
	title: 'Position',
	component: Position,
};

export const Basic = (args) => <Position {...args} />;
Basic.args = {
	options: [
		{
			'code': 'AN',
			'active': true,
			'description': 'Analyst'
		},
		{
			'code': 'AS',
			'active': true,
			'description': 'Associate'
		}
	]
};
