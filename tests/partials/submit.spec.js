const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('submit template', () => {
	before(async () => {
		context.template = await fetchPartial('submit.html');
	});

	it('should say Continue by default', () => {
		const $ = context.template({});

		expect($('button').text()).to.equal('Continue');
	});

	it('should display label if given', () => {
		const label = 'Testing';
		const $ = context.template({
			label
		});

		expect($('button').text()).to.equal(label);
	});

	it('should not be centered by default', () => {
		const $ = context.template({});

		expect($('.ncf__field--center').length).to.equal(0);
	});

	it('should be centered if set', () => {
		const $ = context.template({
			isCentered: true
		});

		expect($('.ncf__field--center').length).to.equal(1);
	});
});
