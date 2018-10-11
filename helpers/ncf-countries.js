const COMMON_DATA = require('n-common-static-data');

module.exports = function ({ hash = {}, fn }) {
	this.commonData = this.commonData || {};
	const data = COMMON_DATA.billingCountries;
	this.commonData.billingCountries = !Array.isArray(hash.filterList) ? data : data.filter(item => {
		return hash.filterList.includes(item.code);
	});

	return fn(this);
};
