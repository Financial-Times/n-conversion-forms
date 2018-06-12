const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateValue
} = require('../helpers');

let context = {};

describe('field/lastname template', () => {
	before(async () => {
		context.template = await fetchPartial('field/lastname.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');
});
