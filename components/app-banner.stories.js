import React from 'react';
import { AppBanner } from './app-banner';

export default {
	title: 'App Banner',
	component: AppBanner
};

export const Basic = (args) => <AppBanner {...args} />;
Basic.parameters = {
	controls: { hideNoControlsWarning: true },
};
