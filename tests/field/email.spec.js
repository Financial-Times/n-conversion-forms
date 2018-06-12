const { expect } = require('chai');
const {
	fetchPartial,
	registerPartial,
	unregisterPartial,
	shouldBeRequired,
	shouldPopulateValue
} = require('../helpers');

let context = {};

describe('field/email template', () => {
	before(async () => {
		context.template = await fetchPartial('field/email.html');
	});

	shouldPopulateValue(context);

	it('should be enabled by default', () => {
		const $ = context.template({});

		expect($('input').attr('disabled')).to.be.undefined;
	});

	it('should be enabled by default', () => {
		const $ = context.template({
			disabled: true
		});

		expect($('input').attr('disabled')).to.equal('disabled');
	});

	it('should have a default description', () => {
		const description = 'Please enter an email address';
		const $ = context.template({});

		expect($('#email-description').text().trim()).to.equal(description);
	});

	it('should be able to over write the description', () => {
		const description = 'This is a test description';

		// As it sets an inline parial for the description register it before templating
		registerPartial('description', description);

		const $ = context.template({
			description
		});

		// Clean up this partial so it does no further damage
		unregisterPartial('description');

		expect($('#email-description').text().trim()).to.equal(description);
	});

	shouldBeRequired(context, 'input');

	it('should be email type', () => {
		const $ = context.template({});

		expect($('input').attr('type')).to.equal('email');
	});
});
