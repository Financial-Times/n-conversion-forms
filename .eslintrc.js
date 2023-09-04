module.exports = {
	extends: [
        "@financial-times/eslint-config-next",
        "prettier",
        "plugin:storybook/recommended"
    ],
	rules: {
		'prettier/prettier': 'error',
	},
	plugins: ['prettier'],
};
