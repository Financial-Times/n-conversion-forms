const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldError
} = require('../helpers');

let context = {};

describe('field/responsibility template', () => {
	before(async () => {
		context.template = await fetchPartial('field/responsibility.html');
	});

	shouldPopulateOptions(context);

	shouldSelectOption(context);

	shouldBeRequired(context, 'select');

	shouldError(context);
});
