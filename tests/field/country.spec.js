const {
	fetchPartial,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldBeRequired
} = require('../helpers');

let context = {};

describe('field/country template', () => {
	before(async () => {
		context.template = await fetchPartial('field/country.html');
	});

	shouldPopulateOptions(context);

	shouldSelectOption(context);

	shouldBeRequired(context, 'select');
});
