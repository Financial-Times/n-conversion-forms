/* eslint no-console:0 */
const resolve = require('path').resolve;
const fs = require('fs');
const chalk = require('chalk');
const express = require('@financial-times/n-internal-tool');
const Handlebars = require('../handlebars').handlebars;
const data = require('./data.json');
const jsxTemplate = require('./views/jsx');

const PORT = process.env.PORT || 5005;
const PARTIALS_DIR = resolve(__dirname, '../partials');
const HELPERS = require('../helpers');

const app = express({
	name: 'public',
	systemCode: 'n-conversion-forms-demo',
	withFlags: true,
	withHandlebars: true,
	withNavigation: false,
	withAnonMiddleware: false,
	hasHeadCss: false,
	viewsDirectory: '/demos/views',
	partialsDirectory: PARTIALS_DIR,
	directory: process.cwd(),
	demo: true,
	s3o: false,
	helpers: Object.assign({}, HELPERS)
});

app.get('/', (req, res) => {
	res.render('index', {
		layout: 'vanilla',
		title: 'Demo',
		data: data,
		partials: fetchPartials(PARTIALS_DIR)
	});
});

app.get('/partial/:name', (req, res) => {
	const partial = `${req.params.name}`;
	const template = compilePartial(partial);
	res.send(template);
});

// add demo for jsx components
app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));
app.get('/jsx', (req, res) => {
	res.send(jsxTemplate({
		title: 'n-conversion-forms-jsx-demo'
	}));
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
	let examplePartials = '';
	let exampleVars = '';

	const partialData = data[partial] || {};
	const handlebars = Handlebars();

	if (partialData) {
		if (partialData.params) {
			parameters = Object.keys(partialData.params).map(key => {
				let value = partialData.params[key];

				if (typeof value !== 'string') {
					exampleVars = `let ${key} = ${JSON.stringify(value, null, 2)};\n`;
					value = `${key}`;
				} else {
					value = `"${value}"`;
				}
				// Use the key of the param as this will available on the template scope
				return `${key}=${value}`;
			}).join(' ');
		}
		if (partialData.partials) {
			// Register external partials for the demo if needed by the partial.
			Object.keys(partialData.partials).map((key, i) => {
				handlebars.registerPartial(key, partialData.partials[key]);

				if (key === '@partial-block') {
					examplePartials += `${i > 0 ? '\n' : ''}  ${partialData.partials[key]}`;
				} else {
					examplePartials += `${i > 0 ? '\n' : ''}  {{#*inline "${key}"}}`;
					examplePartials += `\n    ${partialData.partials[key]}`;
					examplePartials += '\n  {{/inline}}';
				}
			});
		}
	}

	let template;

	if (partialData && partialData.partials) {
		template = `{{#> ${partial} ${parameters} }}`;
		template += `\n${examplePartials}`;
		template += `\n{{/${partial}}}`;
	} else {
		template = `{{> ${partial} ${parameters} }}`;
	}

	const rendered = handlebars.compile(template)(partialData.params);

	const html = `<!doctype html>
<html lang="en">
	<head>
		<title>${partial}</title>
		<link rel="stylesheet" href="/public/main.css">
		<link rel="stylesheet" href="/public/component.css">
	</head>
	<body style="background-color:#fff1e5;" id="demo-page-${partial}">

		<div class="ncf">
			${rendered}
		</div>

		<label>
			Example code
			<textarea id="example-code" style="width:100%" readonly>${exampleVars}${template}</textarea>
		</label>

		<script type="text/javascript" src="/public/main.js"></script>
	</body>
</html>
	`;

	return html;
}
