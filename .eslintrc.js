const config = {
	extends: [
		'@financial-times/eslint-config-next',
		'prettier',
	],
	plugins: ['jest', 'no-only-tests'],
	ignorePatterns: ['dist/', 'bower_components/'],
	overrides: [
		{
			'files': ['components/**/*.spec.js'],
			'rules': {
				'no-only-tests/no-only-tests': 'error'
			}
		}
	],
};

module.exports = config;
