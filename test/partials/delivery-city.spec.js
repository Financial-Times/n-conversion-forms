const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('delivery-city-town template', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-city.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
