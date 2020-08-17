const resolve = require('path').resolve;
const fs = require('fs');
const COMPONENTS_DIR = resolve(__dirname, '../components');

function getFilesFromPath (path, extension) {
	const files = fs.readdirSync( path );
	return files.filter( file => file.match(new RegExp(`.*\.(${extension})`, 'ig')));
}

module.exports = getFilesFromPath(COMPONENTS_DIR, '.jsx').map(component => {
	return {
		name: component,
		urls: {
			[`/iframe.html?id=${component.replace('.jsx', '')}`]: {
				status: 200
			}
		}
	}
});
