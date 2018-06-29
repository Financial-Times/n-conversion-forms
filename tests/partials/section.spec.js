const { expect } = require('chai');
const {
	fetchPartial,
	registerPartial,
	unregisterPartial
} = require('../helpers');

let context = {};

describe('fieldset template', () => {
	before(async () => {
		context.template = await fetchPartial('fieldset.html');
	});

	it('should error without a message being passed', () => {
		expect(() => context.template({})).to.throw();
	});

	it('should render whatever is in the message', () => {
		registerPartial('fields', '<div id="testing"></div>');

		const $ = context.template({});
		expect($('#testing').length).to.equal(1);

		unregisterPartial('fields');
	});
});
