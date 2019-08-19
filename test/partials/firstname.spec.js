const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('firstname template', () => {
	before(async () => {
		context.template = await fetchPartial('firstname.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
