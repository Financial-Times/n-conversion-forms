import React from 'react';
import { Input } from './input';

export default {
	title: 'Input - General Purposes',
	component: Input,
};

export const Basic = (args) => <Input {...args} />;
Basic.args = {};

export const VerificationCode = (args) => <Input {...args} />;
VerificationCode.args = {
	dataTrackable: 'verification-code',
	errorText: 'This verification code is incorrect, please try again',
	fieldId: 'verificationCodeField',
	inputId: 'verificationCode',
	isRequired: true,
	placeHolder: 'Enter code',
	description: 'An email with a link and verification code has been sent to your email. Enter the code below or follow the link in the email to continue.',
	hasError: true,
};

export const Comments = (args) => <Input {...args} />;
Comments.args = {
	label: 'Comments',
	placeHolder: 'Please enter your comments',
};

export const Number = (args) => <Input {...args} />;
Number.args = {
	label: 'Numbers',
	placeHolder: 'Please enter quantity',
	type: 'number',
};

export const Hidden = (args) => <Input {...args} />;
Hidden.args = {
	type: 'hidden',
};
