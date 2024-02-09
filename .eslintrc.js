module.exports = {
	extends: [
		"@financial-times/eslint-config-next",
		"plugin:prettier/recommended",
		"plugin:storybook/recommended",
		"plugin:jest/recommended",
		"plugin:jest/style"
    ],
	rules: {
		'prettier/prettier': 'error',
	},
	plugins: ['prettier','jest'],
};
