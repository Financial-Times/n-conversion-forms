
module.exports = {
	'stories': [
		'../components/*.stories.js',
	],
	'addons': [
		'@storybook/addon-essentials',
		'@storybook/addon-a11y'
	],
	webpackFinal: async (config) => {
		return config;
	}
};
