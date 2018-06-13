const {
	fetchPartial,
	shouldContainPartials
} = require('../helpers');

let context = {};

describe('fieldset/terms-and-conditions template', () => {
	before(async () => {
		context.template = await fetchPartial('fieldset/terms-and-conditions.html');
	});

	shouldContainPartials(context, [
		{id: 'accept-terms-field', partial: 'field/accept-terms'},
		{id: 'marketing-field', partial: 'field/marketing'}
	]);
});
