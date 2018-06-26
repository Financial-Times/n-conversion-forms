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
		registerPartial('fields', '<div id="testing"></div>');
	});

	after(() => {
		unregisterPartial('fields');
	});

	it('should have no name or legend by default', () => {
		const $ = context.template({});

		expect($('legend').length).to.equal(0);
		expect($('fieldset[name]').length).to.equal(0);
	});

	it('should have a name if passed', () => {
		const $ = context.template({
			name: 'testing'
		});

		expect($('fieldset').attr('name')).to.equal('testing');
	});

	it('should have a legend if passed', () => {
		const $ = context.template({
			legend: 'testing'
		});

		expect($('legend').text()).to.equal('testing');
	});

	it('should have feilds inner partial', () => {
		const $ = context.template({});

		expect($('#testing').length).to.equal(1);
	});
});
