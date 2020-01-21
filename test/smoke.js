const resolve = require('path').resolve;
const fs = require('fs');
const COMPONENTS_DIR = resolve(__dirname, '../components');
const components = fs.readdirSync(COMPONENTS_DIR);

module.exports = components
	.filter(component => /\.jsx$/.test(component))
	.map(component => {
		return {
			name: component,
			urls: {
				[`/component/${component.replace('.jsx', '')}`]: {
					status: 200
				}
			}
		};
	});
