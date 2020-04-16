import React from 'react';
import { Section } from './section';

export default {
	title: 'Section',
	component: Section,
};

export const Basic = (args) => <Section {...args} />;
Basic.args = {
	children: (
		<div style={{ border: '4px solid blue', padding: '10px' }}>
			This is a passed in child node!
		</div>
	),
};
