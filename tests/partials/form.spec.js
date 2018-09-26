const { expect } = require('chai');
const {
	fetchPartial,
	registerPartial,
	unregisterPartial
} = require('../helpers');

let context = {};

describe('form template', () => {
	before(async () => {
		context.template = await fetchPartial('form.html');
		registerPartial('fields', '<div></div>');
	});

	after(() => {
		unregisterPartial('fields');
	});

	it('should have a POST method by default', () => {
		const $ = context.template({});

		expect($('form').attr('method')).to.equal('POST');
	});

	it('should respect the method passed in', () => {
		const $ = context.template({
			method: 'test'
		});

		expect($('form').attr('method')).to.equal('test');
	});

	it('should have an empty action by default', () => {
		const $ = context.template({});

		expect($('form').attr('action')).to.equal('');
	});

	it('should respect an action passed in', () => {
		const $ = context.template({
			action: '/test'
		});

		expect($('form').attr('action')).to.equal('/test');
	});

});
