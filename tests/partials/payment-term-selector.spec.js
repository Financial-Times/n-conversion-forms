const { expect } = require('chai');
const {
	fetchPartial,
} = require('../helpers');

let context = {};

describe('payment-term-selector', () => {
	before(async () => {
		context.template = await fetchPartial('payment-term-selector.html');
	});

	it('should have a name and description', () => {
		const $ = context.template({ buttonOptions: [{ displayName: 'mock', description: 'mock', selected: true }] });

		expect($('.ncf__payment-term-select__label--title')).to.exist;
		expect($('.ncf__payment-term-select__label--description')).to.exist;
	});

	it('should have the html properties to successfully function as a radio button', () => {
		const $ = context.template({ buttonOptions: [{ name: 'mockName', displayName: 'mockDisplayName', description: 'mockDescription', selected: true }] });

		expect($('input').attr('id')).to.equal('mockName');
		expect($('input').attr('value')).to.equal('mockName');
		expect($('label').attr('for')).to.equal('mockName');
	});

	it('should display two radio buttons when two objects passed to it', () => {
		const $ = context.template({
			buttonOptions:
				[
					{ name: 'mockName', description: 'mock', selected: true },
					{ name: 'mockNameTwo', description: 'mockTwo' }
				]
			});

		expect($('input').length).to.equal(2);
		expect($('label').length).to.equal(2);
	});

	it('should only have one radio button selected', () => {
		const $ = context.template({
			buttonOptions:
				[
					{ name: 'mockName', description: 'mock', selected: true },
					{ name: 'mockNameTwo', description: 'mockTwo' }
				]
		});
		expect($('input[checked]').attr('id')).to.equal('mockName');
	});


});
