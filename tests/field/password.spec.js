const { expect } = require('chai');
const { fetchPartial, shouldBeRequired } = require('../helpers');

let context = {};

describe('field/password-field template', () => {
	before(async () => {
		context.template = await fetchPartial('field/password.html');
	});

	it('should never have a value', () => {
		const value = 'ThisWontWork';
		const $ = context.template({
			value
		});

		expect($('input[type="password"]').val()).to.be.undefined;
	});

	it('should not be in unknownUser state by default', () => {
		const $ = context.template({});

		expect($('.js-unknown-user-field').length).to.equal(0);
	});

	it('should add class if unknownUser is true', () => {
		const $ = context.template({
			unknownUser: true
		});

		expect($('.js-unknown-user-field').length).to.equal(1);
	});

	it('should be required by default', () => {
		shouldBeRequired(context.template, 'input');
	});
});
