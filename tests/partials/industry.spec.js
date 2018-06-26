const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldError
} = require('../helpers');

let context = {};

describe('industry template', () => {
	before(async () => {
		context.template = await fetchPartial('industry.html');
	});

	shouldPopulateOptions(context);

	shouldSelectOption(context);

	shouldBeRequired(context, 'select');

	shouldError(context);
});
