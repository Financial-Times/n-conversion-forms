const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldError
} = require('../helpers');

let context = {};

describe('field/industry template', () => {
	before(async () => {
		context.template = await fetchPartial('field/industry.html');
	});

	shouldPopulateOptions(context);

	shouldSelectOption(context);

	shouldBeRequired(context, 'select');

	shouldError(context);
});
