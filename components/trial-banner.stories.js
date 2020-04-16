import React from 'react';
import { TrialBanner } from './trial-banner';

export default {
	title: 'Trial Banner',
	component: TrialBanner,
};

export const Basic = (args) => <TrialBanner {...args} />;
