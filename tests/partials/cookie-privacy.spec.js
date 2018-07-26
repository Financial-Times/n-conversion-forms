const { fetchPartial } = require('../helpers');
const { expect } = require('chai');

let context = {};

describe('cookie-privacy template', () => {
	before(async () => {
		context.template = await fetchPartial('cookie-privacy.html');
	});

	it('should be compiled', () => {
		const $ = context.template({});

		expect($('#cookie-privacy').length).to.equal(1);
	});
});
