import React from 'react';
import { Form } from './form';

export default {
	title: 'Form',
	component: Form,
};

export const Basic = (args) => <Form {...args} />;
Basic.args = {
	children: <div style={{ border: '4px solid blue', padding: '10px' }}>This is a passed in child node!</div>,
};
