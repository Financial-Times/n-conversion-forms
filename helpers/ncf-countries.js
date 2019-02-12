const { countries } = require('n-common-static-data').billingCountries;

const MINIMUM_TO_GROUP = 50;
const MINIMUM_TO_SHOW_GROUPS = 2;

module.exports = function ({ hash = {}, fn }) {
	const filter = Array.isArray(hash.filterList) ? hash.filterList : false;
	const value = hash.value;

	let data = countries;

	// Only show countries in the filter
	if (filter) {
		data = data.filter(item => filter.includes(item.code));
	}

	// Select the country
	if (value) {
		data = data.map(item => {
			item.selected = item.code === value;
			return item;
		});
	}

	// Group countries
	if (data.length >= MINIMUM_TO_GROUP) {
		data = groupCountries(data);
	}

	const context = Object.assign({ countries: data }, this);
	return fn(context);
};

/**
 * Produce a frequently used option group
 * @param {Array} countries
 * @return {Array}
 */
function groupCountries (countries) {
	const frequentlyUsed = ['GBR', 'USA', 'JPN', 'FRA', 'CAN'];

	const frequentlyUsedCountries = countries
		.filter(item => frequentlyUsed.includes(item.code))
		.map(item => Object.assign({}, item))
		.sort((a, b) => frequentlyUsed.indexOf(a.code) - frequentlyUsed.indexOf(b.code));

	// Not worth showing return standard countries list
	if (frequentlyUsedCountries.length < MINIMUM_TO_SHOW_GROUPS) {
		return countries;
	}

	// If selected country is in frequently used only leave that one selected
	// otherwise the user is shown the lowest selected option
	const selected = frequentlyUsedCountries.find(item => item.selected);
	if (selected) {
		countries.forEach(item => item.selected = false);
	}

	return [
		{ label: 'Frequently Used', countries: frequentlyUsedCountries },
		{ label: 'Alphabetical', countries }
	];
}
