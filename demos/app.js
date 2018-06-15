/* eslint no-console:0 */
const resolve = require('path').resolve;
const chalk = require('chalk');
const express = require('@financial-times/n-internal-tool');
const handlebars = require('@financial-times/n-handlebars').handlebars;
const PORT = process.env.PORT || 5005;
const data = require('./data.json');

const app = express({
	name: 'public',
	systemCode: 'n-conversion-forms-demo',
	withFlags: true,
	withHandlebars: true,
	withNavigation: false,
	withAnonMiddleware: false,
	hasHeadCss: false,
	viewsDirectory: '/demos/views',
	partialsDirectory: resolve(__dirname, '../templates'),
	directory: process.cwd(),
	demo: true,
	s3o: false
});

app.get('/', (req, res) => {
	res.render('index', {
		layout: 'vanilla',
		title: 'Demo',
		data: data
	});
});

app.get('/partial/:type/:name', (req, res) => {
	const partial = `${req.params.type}/${req.params.name}`;
	const template = compilePartial(partial, req.query);
	res.send(template(data));
});

app.listen(PORT, () => {
	if (process.env.PA11Y === 'true') {
		runPa11yTests();
	}
});

module.exports = app;

function runPa11yTests () {
	const { red: errorHighlight, green: highlight } = chalk.default.bold;
	const spawn = require('child_process').spawn;
	const pa11y = spawn('pa11y-ci');

	pa11y.stdout.on('data', data => {
		// tslint:disable-next-line
		console.log(highlight(`${data}`)); // eslint-disable-line
	});

	pa11y.stderr.on('data', error => {
		// tslint:disable-next-line
		console.log(errorHighlight(`${error}`)); // eslint-disable-line
	});

	pa11y.on('close', code => {
		process.exit(code);
	});
}

function compilePartial (partial, options) {
	const parameters = Object.keys(options).map(key => `${key}=${options[key]}`).join(' ');
	const html = `
		<html>
			<head>
				<link rel="stylesheet" href="/public/component.css">
			</head>
			<body>
				<form class="ncf">
					{{> ${partial} ${parameters} }}
				</form>
			</body>
		</html>
	`;

	return handlebars().compile(html);
}
