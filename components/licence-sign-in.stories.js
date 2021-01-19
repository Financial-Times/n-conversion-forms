import React from 'react';
import { LicenceSignIn } from './licence-sign-in';

export default {
	title: 'Licence Sign In',
	component: LicenceSignIn,
};

export const Basic = (args) => <LicenceSignIn {...args} />;
Basic.args = {
	displayName: 'Made Up Business',
};
