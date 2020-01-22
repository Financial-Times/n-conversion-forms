require('sucrase/register');
/* eslint no-console:0 */
const chalk = require('chalk');
const express = require('express');
const { PageKitReactJSX } = require('@financial-times/dotcom-server-react-jsx');
const renderer = new PageKitReactJSX();

const demoLandingTemplate = require('./views/jsx');
const { DemoComponent } = require('./views/demo-component.jsx');
const componentData = require('./data.json');

const PORT = process.env.PORT || 5005;
const app = express();

app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
	res.send(demoLandingTemplate({
		title: 'n-conversion-forms-jsx-demo'
	}));
});

app.get('/component/:name', async (req, res, next) => {
	try {
		res.send(await renderer.render(DemoComponent, {
			name: req.params.name,
			data: componentData[req.params.name]
		}, true));
	} catch (error) {
		next(error);
	}
});

app.listen(PORT, () => {
	if (process.env.PA11Y === 'true') {
		runPa11yTests();
	} else {
		/* eslint-disable-next-line no-console */
		console.log(`demo server running on port ${PORT}`);
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
