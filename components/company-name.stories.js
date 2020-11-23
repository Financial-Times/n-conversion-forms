import React from 'react';
import { CompanyName } from './company-name';

export default {
	title: 'Company Name',
	component: CompanyName,
	argTypes: {
		hasError: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
	},
};

export const Basic = (args) => <CompanyName {...args} />;
