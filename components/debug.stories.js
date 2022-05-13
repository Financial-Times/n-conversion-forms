import React from 'react';
import { Debug } from './debug';

export default {
	title: 'Debug helpers',
	component: Debug,
};

export const Basic = (args) => <Debug {...args} />;
Basic.args = {
	isTest: true,
	showHelpers: true,
};
