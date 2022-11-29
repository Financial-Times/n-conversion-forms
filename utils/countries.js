const { countries } = require('n-common-static-data').billingCountries;

/**
 * Return a list of countries from static data
 * @param {object} options
 * @param {string} options.value Select the country with the same country code
 * @param {array} options.filter Only returns countries within the filter list if supplied
 * @param {number} options.minimumToGroup Only show groupings if there are over this amount of countries
 */
function getCountries({ value, filter = [], minimumToGroup = 20 } = {}) {
	let data = countries;

	// Only show countries in the filter
	if (filter.length) {
		data = data.filter((item) => filter.includes(item.code));
	}

	// Select the country
	if (value) {
		data = data.map((item) => {
			item.selected = item.code === value;
			return item;
		});
	}

	// Group countries
	if (data.length >= minimumToGroup) {
		data = groupCountries(data);
	}

	return data;
}

/**
 * Produce a frequently used option group
 * @param {array} countries
 * @param {object} options
 * @param {number} options.minimumToShowGroups Only show a group if there are more than this amount of countries
 * @param {array} options.frequentlyUsed Which countries are frequently used
 * @param {string} options.frequentlyUsedLabel Label to use for frequently used group
 * @param {string} options.alphabeticalLabel Label to use for all other countries
 * @return {array}
 */
function groupCountries(
	countries,
	{
		minimumToShowGroups = 2,
		frequentlyUsed = ['GBR', 'USA', 'JPN', 'FRA', 'CAN'],
		frequentlyUsedLabel = 'Frequently Used',
		alphabeticalLabel = 'Alphabetical',
	} = {}
) {
	const frequentlyUsedCountries = countries
		.filter((item) => frequentlyUsed.includes(item.code))
		.map((item) => Object.assign({}, item))
		.sort(
			(a, b) => frequentlyUsed.indexOf(a.code) - frequentlyUsed.indexOf(b.code)
		);

	// Not worth showing return standard countries list
	if (frequentlyUsedCountries.length < minimumToShowGroups) {
		return countries;
	}

	// If selected country is in frequently used only leave that one selected
	// otherwise the user is shown the lowest selected option
	const selected = frequentlyUsedCountries.find((item) => item.selected);
	if (selected) {
		countries.forEach((item) => (item.selected = false));
	}

	return [
		{ label: frequentlyUsedLabel, countries: frequentlyUsedCountries },
		{ label: alphabeticalLabel, countries },
	];
}

module.exports = {
	getCountries,
	groupCountries,
};
