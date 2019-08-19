const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('trial-banner template', () => {
	before(async () => {
		context.template = await fetchPartial('trial-banner.html');
	});

	it('should compile', () => {
		expect(() => {
			context.template({});
		}).to.not.throw();
	});

	it('should check the yes input if yes passed as value', () => {
		const $ = context.template({
			trialDuration: '999 day'
		});

		expect($.text()).to.contain('Your free 999 day FT.com trial');
	});
});
