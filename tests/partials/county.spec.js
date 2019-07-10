const {
	fetchPartial,
	shouldBeDisableable,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('county template', () => {
	before(async () => {
		context.template = await fetchPartial('county.html');
	});

	shouldPopulateValue(context);

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
