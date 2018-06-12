const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('field/marketing template', () => {
	before(async () => {
		context.template = await fetchPartial('field/marketing.html');
	});

	it('should be checked by default', () => {
		const $ = context.template({});

		expect($('input').attr('checked')).to.equal('checked');
	});
});
