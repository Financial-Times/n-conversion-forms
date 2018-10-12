const _get = require('lodash.get');
const COMMON_DATA = require('n-common-static-data');

module.exports = function ({ hash, fn }) {
	const context = Object.assign({}, { [hash.export]: _get(COMMON_DATA, hash.import) }, this);
	return fn(context);
};
