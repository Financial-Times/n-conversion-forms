import React from 'react';
import { AcceptTerms } from './accept-terms';

export default {
	title: 'Basic Accept Terms',
	component: AcceptTerms,
	argTypes: {
		transitionType: {
			control: {
				type: 'inline-radio',
				options: ['immediate', 'endOfTerm'],
			},
		},
	},
};

export const Basic = (args) => <AcceptTerms {...args} />;
Basic.parameters = {};
