const countries = require('n-common-static-data').billingCountries;

module.exports = function ({ hash = {}, fn }) {
	this.commonData = this.commonData || {};
	this.commonData.countries = Array.isArray(hash.filterList) ? countries.filter(countryInFilterList(hash.filterList)) : countries;
	return fn(this);
};

function countryInFilterList (filterList) {
	return item => filterList.includes(item.code);
}
