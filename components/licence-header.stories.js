import React from 'react';
import { LicenceHeader } from './licence-header';

export default {
	title: 'Licence Header',
	component: LicenceHeader,
};

export const Basic = (args) => <LicenceHeader {...args} />;
Basic.args = {
	displayName: 'Hello World'
};
