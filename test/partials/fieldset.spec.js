const { expect } = require('chai');
const {
	fetchPartial,
	registerPartial,
	unregisterPartial
} = require('../helpers');

const CLASS_VISUALLY_HIDDEN = 'o-normalise-visually-hidden';
const CLASS_HEADER = 'ncf__header';
const SELECTOR_LEGEND = 'legend';
const SELECTOR_FIELDSET = 'fieldset';
const TEST_LEGEND = 'testing';
const TEST_FIELDS_ID = 'testing';
const TEST_HEADER_ID = 'header_test';

let context = {};

describe('fieldset template', () => {
	before(async () => {
		context.template = await fetchPartial('fieldset.html');
		registerPartial('header', `<div id="${TEST_HEADER_ID}"></div>`);
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

	it('should visually hide legend when "hideLegend" passed', () => {
		const $ = context.template({
			legend: TEST_LEGEND,
			hideLegend: true
		});

		expect($(SELECTOR_LEGEND).attr('class')).to.contain(CLASS_VISUALLY_HIDDEN);
	});

	it('should not have heading class by default', () => {
		const $ = context.template({
			legend: TEST_LEGEND
		});

		expect($(SELECTOR_LEGEND).attr('class')).to.not.contain(CLASS_HEADER);
	});

	it('should add a header when a headingLevel is passed', () => {
		const $ = context.template({
			legend: TEST_LEGEND,
			headingLevel: 'h1'
		});

		expect($('h1').attr('class')).to.contain(CLASS_HEADER);
	});

	it('should have a header inner partial', () => {
		const $ = context.template({ headingLevel: 'h1' });

		expect($(`#${TEST_HEADER_ID}`).length).to.equal(1);
	});

	it('should have a fields inner partial', () => {
		const $ = context.template({});

		expect($(`#${TEST_FIELDS_ID}`).length).to.equal(1);
	});
});
