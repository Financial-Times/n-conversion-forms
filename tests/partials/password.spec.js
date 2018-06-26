const { expect } = require('chai');
const {
	fetchPartial,
	shouldBeRequired,
	shouldError
} = require('../helpers');

let context = {};

describe('password template', () => {
	before(async () => {
		context.template = await fetchPartial('password.html');
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

	shouldError(context);
});
