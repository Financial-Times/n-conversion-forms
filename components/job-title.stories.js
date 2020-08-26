import React from 'react';
import { JobTitle } from './job-title';

export default {
	title: 'Job Title',
	component: JobTitle,
};

export const Basic = (args) => <JobTitle {...args} />;
Basic.args = {};
