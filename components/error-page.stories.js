import React from 'react';
import { ErrorPage } from './error-page';

export default {
	title: 'Error Page',
	component: ErrorPage,
};

export const Basic = (args) => <ErrorPage {...args} />;
Basic.args = {
	children: <div style={{ border: '4px solid blue', padding: '10px' }}>This is a passed in child node!</div>
};
