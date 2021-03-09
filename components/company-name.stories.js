import React from 'react';
import { CompanyName } from './company-name';

export default {
	title: 'Company Name',
	component: CompanyName,
	argTypes: {
		hasError: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		isRequired: { control: 'boolean' },
		isHidden: { control: 'boolean' },
	},
};

export const Basic = (args) => <CompanyName {...args} />;

export const OptionalCompany = (args) => <CompanyName {...args} />;
OptionalCompany.args = {
	isRequired: false,
};
