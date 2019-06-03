const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('licence-confirmation template', () => {
	before(async () => {
		context.template = await fetchPartial('licence-confirmation.html');
	});

	it('should not mention trial by default', () => {
		const $ = context.template({});

		expect($.text()).not.to.contain('trial');
	});

	it('should mention trial when isTrial is set', () => {
		const $ = context.template({
			isTrial: true
		});

		expect($.text()).to.contain('trial');
	});

	it('should not include the duration if isTrial not set', () => {
		const duration = '30 days';
		const $ = context.template({
			duration
		});

		expect($.text()).not.to.contain(duration);
	});

	it('should include the duration if isTrial set', () => {
		const duration = '30 days';
		const $ = context.template({
			isTrial: true,
			duration
		});

		expect($.text()).to.contain(duration);
	});
});
