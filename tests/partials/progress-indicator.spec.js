const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const CLASS_COMPLETE = 'ncf__progress__form--complete';
const CLASS_CURRENT = 'ncf__progress__form--current';

let context = {};

describe('progress-indicator template', () => {
	before(async () => {
		context.template = await fetchPartial('progress-indicator.html');
	});

	it('should be empty if no items are passed', () => {
		const $ = context.template({});

		expect($('form').length).to.equal(0);
	});

	it('should display one item if passed', () => {
		const $ = context.template({
			items: [{name: 'test', url: '/test'}]
		});

		expect($('form').length).to.equal(1);
	});

	it('should display all items if multiple passed', () => {
		const $ = context.template({
			items: [
				{name: 'test', url: '/test'},
				{name: 'test1', url: '/test1'}
			]
		});

		expect($('form').length).to.equal(2);
		expect($('form[action="/test1"] button').text()).to.contain('test1');
	});

	it('should mark the form complete', () => {
		const $ = context.template({
			items: [{isComplete: true}]
		});

		expect($('form').hasClass(CLASS_COMPLETE)).to.be.true;
	});

	it('should mark the form current', () => {
		const $ = context.template({
			items: [{isCurrent: true}]
		});

		expect($('form').hasClass(CLASS_CURRENT)).to.be.true;
	});

	it('should write out all formData as hidden fields', () => {
		const $ = context.template({
			items: [{name: 'test', url: '/test'}],
			formData: [
				{name: 'test', value: 'test'},
				{name: 'test1', value: 'test1'}
			]
		});

		expect($('input').length).to.equal(2);
		expect($('input[name="test1"]').attr('value')).to.equal('test1');
	});
});
