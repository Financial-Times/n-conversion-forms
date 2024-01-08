module.exports = {
	extends: [
        "@financial-times/eslint-config-next",
        "plugin:prettier/recommended",
        "plugin:storybook/recommended"
    ],
	rules: {
		'prettier/prettier': 'error',
	},
	plugins: ['prettier'],
};
