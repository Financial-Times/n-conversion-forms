const { PageKitBowerResolvePlugin } = require('@financial-times/dotcom-build-bower-resolve');

module.exports = {
	'stories': [
		'../components/*.stories.js',
	],
	'addons': [
		'@storybook/addon-essentials',
		'@storybook/addon-a11y'
	],
	webpackFinal: async (config) => {
		config.plugins.push(new PageKitBowerResolvePlugin());
		return config;
	}
};
