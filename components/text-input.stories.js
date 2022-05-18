import React from 'react';
import { TextInput } from './text-input';

export default {
	title: 'Text Input',
	component: TextInput,
};

export const Basic = (args) => <TextInput {...args} />;
Basic.args = {
	label: 'Text Input',
};

export const VerificationCode = (args) => <TextInput {...args} />;
VerificationCode.args = {
	dataTrackable: 'verification-code',
	errorText: 'This verification code is incorrect, please try again',
	fieldId: 'verificationCodeField',
	inputId: 'verificationCode',
	isRequired: true,
	placeHolder: 'Enter code',
	description:
		'An email with a link and verification code has been sent to your email. Enter the code below or follow the link in the email to continue.',
	hasError: true,
};

export const Comments = (args) => <TextInput {...args} />;
Comments.args = {
	label: 'Comments',
	placeHolder: 'Please enter your comments',
};
