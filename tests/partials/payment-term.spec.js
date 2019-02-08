const { expect } = require('chai');
const {
	fetchPartial,
} = require('../helpers');

let context = {};

describe('payment-term', () => {
	before(async () => {
		context.template = await fetchPartial('payment-term.html');
	});

	it('should show no options by default', () => {
		const $ = context.template({});
		expect($('input').length).to.equal(0);
	});

	it('should draw a single option', () => {
		const $ = context.template({ options: [{}]});
		expect($('input').length).to.equal(1);
	});

	it('should draw multiple options', () => {
		const $ = context.template({ options: [{}, {}, {}]});
		expect($('input').length).to.equal(3);
	});

	it('should populate the name', () => {
		const name = 'Test';
		const $ = context.template({ options: [{ name }]});
		expect($('.ncf__payment-term__label--title').text()).to.equal(name);
	});

	it('should populate the description', () => {
		const description = 'Test';
		const $ = context.template({ options: [{ description }]});
		expect($('.ncf__payment-term__label--description').text()).to.contain(description);
	});

	it('should allow HTML in the description', () => {
		const description = 'Test with an <a>anchor</a>';
		const $ = context.template({ options: [{ description }]});
		expect($('.ncf__payment-term__label--description a').length).to.equal(1);
	});

	it('should populate the value', () => {
		const value = 'Test';
		const $ = context.template({ options: [{ value }]});
		expect($('input').attr('id')).to.equal(value);
		expect($('input').attr('value')).to.equal(value);
		expect($('label').attr('for')).to.equal(value);
	});

	it('should select the correct radio button', () => {
		const option1 = { value: 'option1' };
		const option2 = { value: 'option2', selected: true };
		const $ = context.template({ options: [option1, option2]});
		expect($('input[checked]').attr('value')).to.equal(option2.value);
	});
});
