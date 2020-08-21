import React from 'react';
import { LicenceConfirmation } from './licence-confirmation';

export default {
	title: 'Licence Confirmation',
	component: LicenceConfirmation,
};

export const Basic = (args) => <LicenceConfirmation {...args} />;
Basic.args = {};
