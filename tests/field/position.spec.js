const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldError
} = require('../helpers');

let context = {};

describe('field/position template', () => {
	before(async () => {
		context.template = await fetchPartial('field/position.html');
	});

	shouldPopulateOptions(context);

	shouldSelectOption(context);

	shouldBeRequired(context, 'select');

	shouldError(context);
});
