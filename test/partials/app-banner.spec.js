const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('app-banner template', () => {
	before(async () => {
		context.template = await fetchPartial('app-banner.html');
	});

	it('should compile', () => {
		expect(() => {
			context.template({});
		}).to.not.throw();
	});
});
