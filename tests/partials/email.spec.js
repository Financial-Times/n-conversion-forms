const { expect } = require('chai');
const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

/* eslint-disable */
describe.only('email template', () => {
	before(async () => {
		context.template = await fetchPartial('email.html');
	});

	shouldPopulateValue(context);

	it('should be enabled by default', () => {
		const $ = context.template({});

		expect($('input').attr('disabled')).to.be.undefined;
	});

	it('should have a default label', () => {
		const label = 'Email address';
		const $ = context.template({});

		expect(
			$('label .o-forms-title')
				.text()
				.trim()
		).to.equal(label);
	});

	it('should have the b2b label if isB2b set', () => {
		const label = 'Work email address';
		const $ = context.template({
			isB2b: true
		});

		expect(
			$('label .o-forms-title')
				.text()
				.trim()
		).to.equal(label);
	});

	it('should have a default description', () => {
		const description = 'Please enter an email address';
		const $ = context.template({});

		expect(
			$('label .o-forms-title__prompt')
				.text()
				.trim()
		).to.equal(description);
	});

	it('should be able to over write the description', () => {
		const description = 'This is a test description';
		const $ = context.template({
			description
		});

		expect(
			$('label .o-forms-title__prompt')
				.text()
				.trim()
		).to.equal(description);
	});

	shouldBeRequired(context, 'input');

	it('should be email type', () => {
		const $ = context.template({});

		expect($('input').attr('type')).to.equal('email');
	});

	shouldError(context);

	it('should not show the confirm email by default', () => {
		const $ = context.template({});

		expect($('#emailConfirmField').length).to.equal(0);
	});

	it('should show the confirm email if asked', () => {
		const $ = context.template({
			showConfirm: true
		});

		expect($('#emailConfirmField').length).to.equal(1);
	});

	shouldError(context, {
		showConfirm: true,
		hasConfirmError: true
	});

	shouldBeDisableable(context, '#email');
	shouldBeDisableable(context, '#emailConfirm', { showConfirm: true });
});
