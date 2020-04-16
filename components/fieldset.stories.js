import React from 'react';
import { Fieldset } from './fieldset';

export default {
	title: 'Fieldset',
	component: Fieldset,
};

export const Basic = (args) => <Fieldset {...args} />;
Basic.args = {
	header: <span>Header Text</span>,
	legend: 'This is my fieldset legend',
	headingLevel: 'h1',
	children: (
		<div style={{ border: '4px solid blue', padding: '10px' }}>
			This is a passed in child node!
		</div>
	),
	descriptor: <div>Description element</div>,
};
