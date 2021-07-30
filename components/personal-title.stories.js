import React from 'react';
import { PersonalTitle } from './personal-title';

export default {
	title: 'PersonalTitle',
	component: PersonalTitle,
};

export const Basic = (args) => <PersonalTitle {...args} />;
Basic.args = {
	options: [
		{ code: 'Mr', description: 'Mr' },
		{ code: 'Mrs', description: 'Mrs' },
	],
};
