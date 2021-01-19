import React from 'react';
import { LicenceTitle } from './licence-title';

export default {
	title: 'Licence Title',
	component: LicenceTitle,
};

export const Basic = (args) => <LicenceTitle {...args} />;
Basic.args = {
	displayName: 'Your business',
};
