const { expect } = require('chai');
const {
	fetchPartial,
	registerPartial,
	unregisterPartial
} = require('../helpers');

const CLASS_VISUALLY_HIDDEN = 'o-normalise-visually-hidden';
const SELECTOR_LEGEND = 'legend';
const SELECTOR_FIELDSET = 'fieldset';
const TEST_LEGEND = 'testing';
const TEST_FIELDS_ID = 'testing';

let context = {};

describe('fieldset template', () => {
	before(async () => {
		context.template = await fetchPartial('fieldset.html');
		registerPartial('fields', `<div id="${TEST_FIELDS_ID}"></div>`);
	});

	after(() => {
		unregisterPartial('fields');
	});

	it('should have no name or legend by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_LEGEND).length).to.equal(0);
		expect($(SELECTOR_FIELDSET).attr('name')).to.be.undefined;
	});

	it('should have a name if passed', () => {
		const $ = context.template({
			name: TEST_LEGEND
		});

		expect($(SELECTOR_FIELDSET).attr('name')).to.equal(TEST_LEGEND);
	});

	it('should have a legend if passed', () => {
		const $ = context.template({
			legend: TEST_LEGEND
		});

		expect($(SELECTOR_LEGEND).text()).to.equal(TEST_LEGEND);
	});

	it('should visually display legend by default', () => {
		const $ = context.template({
			legend: TEST_LEGEND
		});

		expect($(SELECTOR_LEGEND).attr('class')).to.not.contain(CLASS_VISUALLY_HIDDEN);
	});

	it('should visually display legend by default', () => {
		const $ = context.template({
			legend: TEST_LEGEND,
			hideLegend: true
		});

		expect($(SELECTOR_LEGEND).attr('class')).to.contain(CLASS_VISUALLY_HIDDEN);
	});

	it('should have feilds inner partial', () => {
		const $ = context.template({});

		expect($(`#${TEST_FIELDS_ID}`).length).to.equal(1);
	});
});
