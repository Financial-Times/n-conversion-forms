const _get = require('lodash.get');
const COMMON_DATA = require('n-common-static-data');

module.exports = function ({ hash, fn }) {
	this.commonData = this.commonData || {};
	this.commonData[hash.export] = _get(COMMON_DATA, hash.import);

	return fn(this);
};
