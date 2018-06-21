const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('field/firstname template', () => {
	before(async () => {
		context.template = await fetchPartial('field/firstname.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);
});
