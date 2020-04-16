import React from 'react';
import { Message } from './message';

export default {
	title: 'Message',
	component: Message,
};

export const Basic = (args) => <Message {...args} />;
Basic.args = {
	message: 'This is just a simple message.',
	additional: [
		'This is some extra information about the above message.',
		'This is the second item in the array - so you can have as many as you need.',
	],
	actions: [
		{
			link: 'https://ft.com',
			isSecondary: false,
			text: 'FT Home',
		},
	],
};
