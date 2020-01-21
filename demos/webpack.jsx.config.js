const path = require('path');

module.exports = {
	entry: {
		demo: './demos/init.js'
	},
	output: {
		path: path.resolve(__dirname, '../public'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.es6']
	},
};
