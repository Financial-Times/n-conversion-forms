import React from 'react';
import { Loader } from './loader';

export default {
	title: 'Loader',
	component: Loader,
};

export const Basic = (args) => <Loader {...args} />;
Basic.args = {
	showLoader: true,
	title: 'Loading!',
	children: <div>Loading text from the children prop...</div>
};
