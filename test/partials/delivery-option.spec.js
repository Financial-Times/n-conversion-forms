const { expect } = require('chai');
const {
	fetchPartial,
} = require('../helpers');

let context = {};
const TITLE_SELECTOR = '.ncf__delivery-option__title';

describe('delivery-option', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-option.html');
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

	it('should hide the radio button if isSingle is passed', () => {
		const $ = context.template({ isSingle: true });
		expect($('.ncf__delivery-option--single').length).to.equal(1);
	});

	describe('Paper vouchers', () => {
		it('should show the correct title copy', () => {
			const value = 'PV';
			const $ = context.template({ options: [{
				value
			}]});
			expect($(TITLE_SELECTOR).text()).to.equal('Paper vouchers');
		});
	});

	describe('Home delivery', () => {
		it('should show the correct title copy', () => {
			const value = 'HD';
			const $ = context.template({ options: [{
				value
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Home delivery');
		});
	});

	describe('EV', () => {
		it('should show the correct title copy', () => {
			const value = 'EV';
			const $ = context.template({ options: [{
				value
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Electronic vouchers');
		});
	});

	it('should populate the value', () => {
		const value = 'PV';
		const $ = context.template({ options: [{ value }]});
		expect($('input').attr('id')).to.equal(value);
		expect($('input').attr('value')).to.equal(value);
		expect($('label').attr('for')).to.equal(value);
	});

	it('should select the correct radio button', () => {
		const option1 = { value: 'PV' };
		const option2 = { value: 'HD', isSelected: true };
		const $ = context.template({ options: [option1, option2]});
		expect($('input[checked]').attr('value')).to.equal(option2.value);
	});

});
