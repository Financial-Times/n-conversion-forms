import React from 'react';
import { Country } from './country';

export default {
	title: 'Country',
	component: Country,
	argTypes: {
		filterList: { control: 'array' },
	},
};

export const Basic = (args) => <Country {...args} />;
