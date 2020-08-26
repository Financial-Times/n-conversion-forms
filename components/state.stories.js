import React from 'react';
import { State } from './state';

export default {
	title: 'State',
	component: State,
};

export const Basic = (args) => <State {...args} />;
Basic.args = {
	states: [
		{
			'code': 'AL',
			'name': 'Alabama'
		},
		{
			'code': 'AK',
			'name': 'Alaska'
		},
		{
			'code': 'AZ',
			'name': 'Arizona'
		}
	]
};
