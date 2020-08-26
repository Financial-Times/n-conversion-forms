import React from 'react';
import { ProgressIndicator } from './progress-indicator';

export default {
	title: 'Progress Indicator',
	component: ProgressIndicator,
};

export const Basic = (args) => <ProgressIndicator {...args} />;
Basic.args = {
	items: [
		{
			isComplete: true,
			isCurrent: false,
			name: 'Get Business',
			url: 'https://ft.com'
		},
		{
			isComplete: false,
			isCurrent: true,
			name: '????',
			url: 'https://google.com'
		},
		{
			isComplete: false,
			isCurrent: false,
			name: 'Profit',
			url: 'https://ft.com'
		}
	]
};
