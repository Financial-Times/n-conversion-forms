const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('registration-confirmation template', () => {
	before(async () => {
		context.template = await fetchPartial('registration-confirmation.html');
	});

	it('should populate the email', () => {
		const email = 'test@example.com';
		const $ = context.template({
			email
		});

		expect($.text()).to.contain(email);
	});
});
