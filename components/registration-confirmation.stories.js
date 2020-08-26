import React from 'react';
import { RegistrationConfirmation } from './registration-confirmation';

export default {
	title: 'Registration Confirmation',
	component: RegistrationConfirmation,
};

export const Basic = (args) => <RegistrationConfirmation {...args} />;
Basic.args = {};
