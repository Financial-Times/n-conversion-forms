const { getCountries } = require('../utils/countries');

module.exports = function ({ hash = {}, fn }) {
	const filter = Array.isArray(hash.filterList) ? hash.filterList : [];
	const value = hash.value;
	const countries = getCountries({ filter, value });
	const context = Object.assign({ countries }, this);
	return fn(context);
};
