import React from 'react';
import { ContinueReading } from './continue-reading';

export default {
	title: 'Continue Reading',
	component: ContinueReading,
};

export const Basic = (args) => <ContinueReading {...args} />;
Basic.args = {
	quote:
		"The problem with quotes found on the internet, is that they're often not true - Abraham Lincoln",
	link: 'https://ft.com/world',
};
