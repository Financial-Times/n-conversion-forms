const { expect } = require('chai');
const {
	fetchPartial,
} = require('../helpers');

let context = {};
const TITLE_SELECTOR = '.ncf__payment-term__title';
const DESCRIPTION_SELECTOR = '.ncf__payment-term__description';

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

	describe('annual', () => {
		it('should show the correct title copy', () => {
			const name = 'annual';
			const $ = context.template({ options: [{
				name
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Annual');
		});

		it('should show the price', () => {
			const name = 'annual';
			const price = '£1.01';
			const $ = context.template({ options: [{
				name,
				price
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(price);
		});

		// Removing in favour of weekly price for the time being
		it.skip('should show discount copy if not discounted', () => {
			const name = 'annual';
			const $ = context.template({ options: [{
				name
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain('Save up to');
		});

		it('should not show discount copy if discounted', () => {
			const name = 'annual';
			const discount = '25%';
			const $ = context.template({ options: [{
				name,
				discount
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.not.contain('Save up to');
		});

		it('should not have weekly price text by default', () => {
			const name = 'annual';
			const $ = context.template({ options: [{
				name
			}]});
			expect($('.ncf__payment-term__weekly-price').length).to.equal(0);
		});

		it('should have weekly price text if passed', () => {
			const name = 'annual';
			const weeklyPrice = '£1.00';
			const $ = context.template({ options: [{
				name,
				weeklyPrice
			}]});
			expect($('.ncf__payment-term__weekly-price').length).to.equal(1);
		});

		describe('trial', () => {
			testTrial('annual');
		});
	});

	describe('quarterly', () => {
		it('should show the correct title copy', () => {
			const name = 'quarterly';
			const $ = context.template({ options: [{
				name
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Quarterly');
		});

		it('should show the price', () => {
			const name = 'quarterly';
			const price = '£1.01';
			const $ = context.template({ options: [{
				name,
				price
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(price);
		});

		describe('trial', () => {
			testTrial('quarterly');
		});
	});

	describe('monthly', () => {
		it('should show the correct title copy', () => {
			const name = 'monthly';
			const $ = context.template({ options: [{
				name
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Monthly');
		});

		it('should show the price', () => {
			const name = 'monthly';
			const price = '£1.01';
			const $ = context.template({ options: [{
				name,
				price
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(price);
		});

		describe('trial', () => {
			testTrial('monthly');
		});
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

	it('should not have discount text by default', () => {
		const option1 = { value: 'option1' };
		const option2 = { value: 'option2', selected: true };
		const $ = context.template({ options: [option1, option2]});
		expect($('.ncf__payment-term__discount').length).to.equal(0);
	});

	it('should have discount text if a discount is passed', () => {
		const option1 = { value: 'option1', discount: '25%' };
		const option2 = { value: 'option2', selected: true };
		const $ = context.template({ options: [option1, option2]});
		expect($('.ncf__payment-term__discount').length).to.equal(1);
	});

	function testTrial (name) {
		it('should show the correct title copy', () => {
			const $ = context.template({ options: [{
				name,
				isTrial: true
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Try the FT');
		});

		it('should show the price', () => {
			const price = '£1.01';
			const $ = context.template({ options: [{
				name,
				price,
				isTrial: true
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(price);
		});

		it('should show the trial price', () => {
			const price = '£1.01';
			const trialPrice = '£2.01';
			const $ = context.template({ options: [{
				name,
				price,
				trialPrice,
				isTrial: true
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(trialPrice);
		});

		it('should show 4 weeks by default', () => {
			const price = '£1.01';
			const trialPrice = '£2.01';
			const $ = context.template({ options: [{
				name,
				price,
				trialPrice,
				isTrial: true
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain('4 weeks');
		});

		it('should show the passed trialDuration', () => {
			const price = '£1.01';
			const trialPrice = '£2.01';
			const trialDuration = 'TEST DURATION';
			const $ = context.template({ options: [{
				name,
				price,
				trialPrice,
				trialDuration,
				isTrial: true
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.not.contain('4 weeks');
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(trialDuration);
		});
	}
});
