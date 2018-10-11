const { countries } = require('n-common-static-data').billingCountries;

module.exports = function ({ hash = {}, fn }) {
	const data = Array.isArray(hash.filterList) ? countries.filter(countryInFilterList(hash.filterList)) : countries;
	const context = Object.assign({ countries: data }, this);
	return fn(context);
};

function countryInFilterList (filterList) {
	return item => filterList.includes(item.code);
}
