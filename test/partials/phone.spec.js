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

		expect($('.o-forms-title__main').text().trim()).to.equal(label);
	});

	it('should have the b2b label if isB2b is set', () => {
		const label = 'Work phone number';
		const $ = context.template({
			isB2b: true
		});

		expect($('.o-forms-title__main').text().trim()).to.equal(label);
	});

	it('should have a data-min attribute for o-forms validation', () => {
		const $ = context.template({});

		expect($('input').attr('minlength')).to.equal('5');
	});

	it('should have a data-max attribute for o-forms validation', () => {
		const $ = context.template({});

		expect($('input').attr('maxlength')).to.equal('15');
	});

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
