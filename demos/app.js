/* eslint no-console:0 */
const { resolve } = require('path');
const express = require('@financial-times/n-internal-tool');
const logger = require('@financial-times/n-logger').default;
const PORT = process.env.PORT || 5050;

const app = express({
	name: 'public',
	systemCode: 'n-conversion-forms-demo',
	withFlags: true,
	withHandlebars: true,
	withNavigation: false,
	withAnonMiddleware: false,
	hasHeadCss: false,
	viewsDirectory: '/demos',
	partialsDirectory: resolve(__dirname, '../templates'),
	directory: process.cwd(),
	demo: true,
	s3o: false
});

app.get('/', (req, res) => {
	res.render('index', {
		layout: 'vanilla',
		title: 'Demo'
	});
});

app.listen(PORT);

logger.info(`Demo running in http listening on ${PORT}. To work properly you should start in https via "make demo"`);

/**
 * Run PA11Y Tests
 */
if (process.env.PA11Y === 'true') {
	const chalk = require('chalk');
	const spawn = require('child_process').spawn;

	const logColor = (color) => (data) => console.log(chalk.bold[color](`${data}`));

	app.listen(PORT).then(() => {
		const pa11y = spawn('pa11y-ci');
		pa11y.stdout.on('data', logColor('green'));
		pa11y.stderr.on('data', logColor('red'));
		pa11y.on('close', process.exit);
	});
}

module.exports = app;
