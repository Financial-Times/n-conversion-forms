const { PageKitSassPlugin } = require('@financial-times/dotcom-build-sass');

module.exports = {
	entry: {
		styles: './main.scss',
	},
	plugins: [new PageKitSassPlugin()],
};
