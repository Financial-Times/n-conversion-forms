module.exports = {
	testPathIgnorePatterns: ['/node_modules/', '/cypress/', '/test/'],
	transform: {
		'.(js|jsx)': '@sucrase/jest-plugin',
	},
	testMatch: [
		'**/components/**/?(*.)+(spec|test).[tj]s?(x)',
		'**/helpers/**/?(*.)+(spec|test).[tj]s?(x)',
		'**/utils/**/?(*.)+(spec|test).[tj]s?(x)',
	],
	snapshotSerializers: ['jest-serializer-html'],
	setupFilesAfterEnv: ['<rootDir>/test-jest/helpers/setup.js'],
	resolver: '@financial-times/jest-browser-resolver',
	transformIgnorePatterns: ['/node_modules//(?!(@financial-times)/)'],
	testEnvironment: 'jsdom',
};
