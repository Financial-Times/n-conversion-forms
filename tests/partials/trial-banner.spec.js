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
});
