const {
	fetchPartial,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldBeRequired,
	shouldError
} = require('../helpers');

let context = {};

describe('country template', () => {
	before(async () => {
		context.template = await fetchPartial('country.html');
	});

	shouldPopulateOptions(context);

	shouldSelectOption(context);

	shouldBeRequired(context, 'select');

	shouldError(context);
});
