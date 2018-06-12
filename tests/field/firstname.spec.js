const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateValue
} = require('../helpers');

let context = {};

describe('field/firstname template', () => {
	before(async () => {
		context.template = await fetchPartial('field/firstname.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');
});
