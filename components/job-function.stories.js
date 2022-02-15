import React from 'react';
import { JobFunction } from './job-function';

export default {
	title: 'Job Function',
	component: JobFunction,
};

export const Basic = (args) => <JobFunction {...args} />;
Basic.args = {
	options: [
		{ code: 'ACC', description: 'Accounting' },
		{ code: 'ADM', description: 'Administration' },
		{ code: 'ANA', description: 'Analyst' },
		{ code: 'ART', description: 'Arts and design' },
		{ code: 'CMS', description: 'Community and social services' },
		{ code: 'CON', description: 'Consulting' },
		{ code: 'ENG', description: 'Engineering' },
		{ code: 'FAC', description: 'Facilities' },
		{ code: 'FIN', description: 'Finance' },
		{ code: 'HLT', description: 'Healthcare services' },
		{ code: 'HMN', description: 'Human resources' },
		{ code: 'INT', description: 'Information technology' },
		{ code: 'KIM', description: 'Knowledge and information management' },
		{ code: 'LGL', description: 'Legal' },
		{ code: 'MKT', description: 'Marketing' },
		{ code: 'MCM', description: 'Media and communication' },
		{ code: 'OPS', description: 'Operations' },
		{ code: 'PDM', description: 'Product management' },
		{ code: 'PJM', description: 'Program and project management' },
		{ code: 'PCH', description: 'Purchasing' },
		{ code: 'RLE', description: 'Real estate' },
		{ code: 'RSE', description: 'Research' },
		{ code: 'RCM', description: 'Risk and compliance' },
		{ code: 'SLS', description: 'Sales' },
		{ code: 'SPM', description: 'Strategy and policy-making' },
		{ code: 'STD', description: 'Student' },
		{ code: 'SPT', description: 'Support' },
		{ code: 'TRG', description: 'Teaching and training' },
	],
};
