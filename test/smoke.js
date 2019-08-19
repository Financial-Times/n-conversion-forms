const resolve = require('path').resolve;
const fs = require('fs');
const PARTIALS_DIR = resolve(__dirname, '../partials');
const partials = fs.readdirSync(PARTIALS_DIR);

module.exports = partials.map(partial => {
	return {
		name: partial,
		urls: {
			[`/partial/${partial.replace('.html', '')}`]: {
				status: 200
			}
		}
	};
});
