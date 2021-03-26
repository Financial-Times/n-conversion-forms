import React from 'react';
import { GoogleSignIn } from './google-sign-in';

export default {
	title: 'Google Sign In',
	component: GoogleSignIn,
};

export const Basic = (args) => <GoogleSignIn {...args} />;
Basic.args = {
	signInRedirectUrl: 'https://social-login-svc-eu-test.memb.ft.com/login/google',
};
