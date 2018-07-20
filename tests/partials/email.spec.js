const { expect } = require('chai');
const {
	fetchPartial,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('email template', () => {
	before(async () => {
		context.template = await fetchPartial('email.html');
	});

	shouldPopulateValue(context);

	it('should be enabled by default', () => {
		const $ = context.template({});

		expect($('input').attr('disabled')).to.be.undefined;
	});

	it('should be disabled if the option passed', () => {
		const $ = context.template({
			disabled: true
		});

		expect($('input').attr('disabled')).to.equal('disabled');
	});

	it('should have a default label', () => {
		const label = 'Email address';
		const $ = context.template({});

		expect($('label').text().trim()).to.equal(label);
	});

	it('should have the b2b label if isB2b set', () => {
		const label = 'Work email address';
		const $ = context.template({
			isB2b: true
		});

		expect($('label').text().trim()).to.equal(label);
	});

	it('should have a default description', () => {
		const description = 'Please enter an email address';
		const $ = context.template({});

		expect($('#email-description').text().trim()).to.equal(description);
	});

	it('should be able to over write the description', () => {
		const description = 'This is a test description';
		const $ = context.template({
			description
		});

		expect($('#email-description').text().trim()).to.equal(description);
	});

	shouldBeRequired(context, 'input');

	it('should be email type', () => {
		const $ = context.template({});

		expect($('input').attr('type')).to.equal('email');
	});

	shouldError(context);
});
