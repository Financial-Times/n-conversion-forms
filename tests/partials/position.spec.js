const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldError
} = require('../helpers');

let context = {};

describe('position template', () => {
	before(async () => {
		context.template = await fetchPartial('position.html');
	});

	shouldPopulateOptions(context);

	shouldSelectOption(context);

	shouldBeRequired(context, 'select');

	shouldError(context);
});
