// we run prettier on commit and push, disabling some rules here that will conflict with prettier
module.exports = {
	extends: ['@financial-times/eslint-config-next'],
	rules: {
		'space-before-function-paren': 'off',
		'quotes': 0,
		'indent': 0,
	},
};
