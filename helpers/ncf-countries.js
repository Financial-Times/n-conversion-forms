const { countries } = require('n-common-static-data').billingCountries;

const MINIMUM_TO_SPLIT = 50;
const MINIMUM_TO_SHOW_SPLIT = 2;

module.exports = function ({ hash = {}, fn }) {
	const data = Array.isArray(hash.filterList) ? countries.filter(countryInFilterList(hash.filterList)) : countries;
	const newContext = data.length >= MINIMUM_TO_SPLIT ? splitIntoUsage(data) : { countries: data };
	const context = Object.assign(newContext, this);
	return fn(context);
};

function countryInFilterList (filterList) {
	return item => filterList.includes(item.code);
}

function splitIntoUsage (countries) {
	const frequentCountries = ['GBR', 'USA', 'JPN', 'FRA', 'CAN'];
	let foundFrequent = countries.map((item) => {
		return frequentCountries.includes(item.code) && item;
	}).filter(Boolean);

	if (foundFrequent.length < MINIMUM_TO_SHOW_SPLIT) {
		// Not worth showing the split version, just return the original
		return { countries };
	}

	// Sort the frequently used countries into the usage metrics order (as defined on L#19)
	foundFrequent = foundFrequent.sort((a, b) => {
		return frequentCountries.indexOf(a.code) - frequentCountries.indexOf(b.code);
	});

	return {
		ncfCountryGroups: [
			{ label: 'Frequently Used', countries: foundFrequent },
			{ label: 'Alphabetical', countries }
		]
	};
}
