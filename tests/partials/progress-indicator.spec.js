const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const CLASS_COMPLETE = 'ncf__progress__item--complete';
const CLASS_CURRENT = 'ncf__progress__item--current';
const CLASS_PROGRESS_ITEM = 'ncf__progress__item';

let context = {};

describe('progress-indicator template', () => {
	before(async () => {
		context.template = await fetchPartial('progress-indicator.html');
	});

	it('should be empty if no items are passed', () => {
		const $ = context.template({});

		expect($(`.${CLASS_PROGRESS_ITEM}`).length).to.equal(0);
	});

	it('should display one item if passed', () => {
		const $ = context.template({
			items: [{name: 'test', url: '/test'}]
		});

		expect($(`.${CLASS_PROGRESS_ITEM}`).length).to.equal(1);
	});

	it('should display all items if multiple passed', () => {
		const $ = context.template({
			items: [
				{name: 'test', url: '/test'},
				{isComplete: true, name: 'test1', url: '/test1'}
			]
		});

		expect($(`.${CLASS_PROGRESS_ITEM}`).length).to.equal(2);
		expect($('form[action="/test1"] button').text()).to.contain('test1');
	});

	it('should mark the progress item complete', () => {
		const $ = context.template({
			items: [{isComplete: true}]
		});

		expect($(`.${CLASS_PROGRESS_ITEM}`).hasClass(CLASS_COMPLETE)).to.be.true;
	});

	it('should mark the progress item current', () => {
		const $ = context.template({
			items: [{isCurrent: true}]
		});

		expect($(`.${CLASS_PROGRESS_ITEM}`).hasClass(CLASS_CURRENT)).to.be.true;
	});

	it('should write out all formData as hidden fields', () => {
		const $ = context.template({
			items: [{isComplete: true, name: 'test', url: '/test'}],
			formData: [
				{name: 'test', value: 'test'},
				{name: 'test1', value: 'test1'}
			]
		});

		expect($('input').length).to.equal(2);
		expect($('input[name="test1"]').attr('value')).to.equal('test1');
	});

	it('should only create form items for pages you can go back to', () => {
		const $ = context.template({
			items: [
				{ isComplete: true, name: 'test', url: '/test' },
				{ isCurrent: true, name: 'test1', url: '/test1' },
				{ name: 'test2', url: '/test2' }
			]
		});

		expect($(`form.${CLASS_PROGRESS_ITEM}`).length).to.equal(1);
		expect($(`div.${CLASS_PROGRESS_ITEM}`).length).to.equal(2);
	});
});
