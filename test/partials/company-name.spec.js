const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('company-name template', () => {
	before(async () => {
		context.template = await fetchPartial('company-name.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
