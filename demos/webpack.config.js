const BowerResolvePlugin = require('bower-resolve-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './demos/main.js',
	resolve: {
		plugins: [new BowerResolvePlugin()],
		modules: ['bower_components', 'node_modules'],
		descriptionFiles: ['bower.json', 'package.json'],
		mainFields: ['browser', 'main']
	},
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: 'main.js'
	},
	devtool: false
};
