const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('job-title template', () => {
	before(async () => {
		context.template = await fetchPartial('job-title.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);
});
