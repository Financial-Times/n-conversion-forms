const { expect } = require('chai');
const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('phone template', () => {
	before(async () => {
		context.template = await fetchPartial('phone.html');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	it('should be tel type', () => {
		const $ = context.template({});

		expect($('input').attr('type')).to.equal('tel');
	});

	it('should have a default label', () => {
		const label = 'Phone number';
		const $ = context.template({});

		expect($('label').text().trim()).to.equal(label);
	});

	it('should be able to over write the description', () => {
		const label = 'This is a test label';
		const $ = context.template({
			label
		});

		expect($('label').text().trim()).to.equal(label);
	});

	shouldError(context);
});
