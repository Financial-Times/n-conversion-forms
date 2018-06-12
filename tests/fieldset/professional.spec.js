const {
	fetchPartial,
	shouldContainPartials
} = require('../helpers');

let context = {};

describe('fieldset/professional template', () => {
	before(async () => {
		context.template = await fetchPartial('fieldset/professional.html');
	});

	shouldContainPartials(context, [
		{id: 'industry', partial: '../field/industry'},
		{id: 'position', partial: '../field/position'},
		{id: 'responsibility', partial:'../field/responsibility'}
	]);
});
