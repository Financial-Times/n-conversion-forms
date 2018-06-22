const { expect } = require('chai');
const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('field/phone template', () => {
	before(async () => {
		context.template = await fetchPartial('field/phone.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	it('should be tel type', () => {
		const $ = context.template({});

		expect($('input').attr('type')).to.equal('tel');
	});

	shouldError(context);
});
