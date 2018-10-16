const { expect } = require('chai');
const {
	fetchPartial,
	shouldBeDisableable,
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

	it('should have the b2b label if isB2b is set', () => {
		const label = 'Work phone number';
		const $ = context.template({
			isB2b: true
		});

		expect($('label').text().trim()).to.equal(label);
	});

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
