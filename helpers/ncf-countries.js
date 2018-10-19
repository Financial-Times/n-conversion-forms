const { countries } = require('n-common-static-data').billingCountries;

module.exports = function ({ hash = {}, fn }) {

	let newContext = {};
	if (Array.isArray(hash.filterList)) {
		const data = countries.filter(countryInFilterList(hash.filterList));
		newContext = { countries: data };
	} else {
		newContext = { ncfCountryGroups: splitIntoUsage(countries) };
	}
	const context = Object.assign(newContext, this);
	return fn(context);
};

function countryInFilterList (filterList) {
	return item => filterList.includes(item.code);
}


function splitIntoUsage (countries) {
	const frequentCountries = ['GBR', 'USA', 'JPN', 'FRA', 'CAN'];
	const grouped = countries.reduce((acc, item) => {
		const key = frequentCountries.includes(item.code) ? 'frequent' : 'remainder';
		acc[key].push(item);
		return acc;
	}, { frequent: [], remainder: [] });

	grouped.frequent = grouped.frequent.sort((a, b) => {
		return frequentCountries.indexOf(a.code) - frequentCountries.indexOf(b.code);
	});

	return [
		{ label: 'Frequently Used', countries: grouped.frequent },
		{ label: 'Alphabetical', countries: grouped.remainder }
	];
}
