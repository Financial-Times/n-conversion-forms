const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const CLASS_HIDDEN = 'o-normalise-visually-hidden';

let context = {};

describe('apple-pay template', () => {
	before(async () => {
		context.template = await fetchPartial('apple-pay.html');
	});

	it('should be compile', () => {
		const $ = context.template({});

		expect($('a').length).to.equal(1);
	});

	it('should hide when told', () => {
		const $ = context.template({
			isHidden: true
		});

		expect($('a').hasClass(CLASS_HIDDEN)).to.be.true;
	});
});
