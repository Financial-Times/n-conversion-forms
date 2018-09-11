/* eslint no-console:0 */
const resolve = require('path').resolve;
const fs = require('fs');
const chalk = require('chalk');
const express = require('@financial-times/n-internal-tool');
const handlebars = require('@financial-times/n-handlebars').handlebars;
const data = require('./data.json');

const PORT = process.env.PORT || 5005;
const PARIALS_DIR = resolve(__dirname, '../partials');

const app = express({
	name: 'public',
	systemCode: 'n-conversion-forms-demo',
	withFlags: true,
	withHandlebars: true,
	withNavigation: false,
	withAnonMiddleware: false,
	hasHeadCss: false,
	viewsDirectory: '/demos/views',
	partialsDirectory: PARIALS_DIR,
	directory: process.cwd(),
	demo: true,
	s3o: false
});

app.get('/', (req, res) => {
	res.render('index', {
		layout: 'vanilla',
		title: 'Demo',
		data: data,
		partials: fetchPartials(PARIALS_DIR)
	});
});

app.get('/partial/:name', (req, res) => {
	const partial = `${req.params.name}`;
	const template = compilePartial(partial);
	res.send(template);
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

function fetchPartials (dir) {
	const partials = fs.readdirSync(dir);
	return partials.map(partial => ({name: `${partial.replace('.html', '')}`}));
}

function compilePartial (partial) {
	let parameters = '';
	let exampleParams = '';
	const partialData = data[partial];

	if (partialData) {
		parameters = Object.keys(partialData).map(key => {
			if (typeof partialData[key] === 'string') {
				exampleParams += ` ${key}="${partialData[key]}"`;
			} else {
				exampleParams += ` ${key}=${JSON.stringify(partialData[key])}`;
			}

			return `${key}=${key}`;
		}).join(' ');
	}

	const template = `{{> ${partial} ${parameters} }}`;
	const rendered = handlebars().compile(template)(partialData);
	const html = `<!doctype html>
<html>
	<head>
		<link rel="stylesheet" href="/public/component.css">
	</head>
	<body style="background-color:#fff1e5;">

		<form class="ncf">
			${rendered}
		</form>

		${partialData ? `<p style="font-family: monospace;">{{> ${partial}${exampleParams} }}</p>` : ''}
	</body>
</html>
	`;

	return html;
}
