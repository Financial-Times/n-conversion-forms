require('sucrase/register');
/* eslint no-console:0 */
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
	/* eslint-disable-next-line no-console */
	console.log(`demo server running on port ${PORT}`);
});
