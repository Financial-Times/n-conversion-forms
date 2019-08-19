const {
	fetchPartial
} = require('../helpers');
const expect = require('chai').expect;

let context = {};
const CONTENT_SELECTOR = '.ncf__package-change__content';
const TITLE_SELECTOR = '.ncf__package-change__title';
const DESCRIPTION_SELECTOR = '.ncf__package-change__description';
const ANNUAL_COPY_SELECTOR = '.ncf__package-change__annual-copy';
const DISCOUNT_SELECTOR = '.ncf__package-change__discount';

describe('package-change template', () => {
	before(async () => {
		context.template = await fetchPartial('package-change.html');
	});

	it('should set the link correctly', () => {
		const data = { changePackageUrl: '/foo' };
		const $ = context.template(data);

		expect($('a').attr('href')).to.equal('/foo');
	});

	it('should display package name and price when passed', () => {
		const data = { currentPackage: 'Digital' };
		const $ = context.template(data);

		expect($(CONTENT_SELECTOR).text()).to.contain(data.currentPackage);
	});

	describe('trial', () => {
		it('should show the correct title copy', () => {
			const name = 'trial';
			const $ = context.template({ terms: [{
				name
			}]});
			expect($(TITLE_SELECTOR).text()).to.equal('Try the FT');
		});

		it('should show the trial price', () => {
			const name = 'trial';
			const price = '£1.01';
			const trialPrice = '£2.01';
			const $ = context.template({ terms: [{
				name,
				price,
				trialPrice
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(trialPrice);
		});
	});

	describe('annual', () => {
		it('should show the correct title copy', () => {
			const name = 'annual';
			const $ = context.template({ terms: [{
				name
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Annually');
		});

		it('should show the price', () => {
			const name = 'annual';
			const price = '£1.01';
			const $ = context.template({ terms: [{
				name,
				price
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(price);
		});

		it('should show discount copy if not discounted', () => {
			const name = 'annual';
			const $ = context.template({ terms: [{
				name
			}]});
			expect($(ANNUAL_COPY_SELECTOR).length).to.equal(1);
		});

		it('should not show discount copy if discounted', () => {
			const name = 'annual';
			const discount = '25%';
			const $ = context.template({ terms: [{
				name,
				discount
			}]});
			expect($(ANNUAL_COPY_SELECTOR).length).to.not.equal(1);
		});
	});

	describe('quarterly', () => {
		it('should show the correct title copy', () => {
			const name = 'quarterly';
			const $ = context.template({ terms: [{
				name
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Quarterly');
		});

		it('should show the price', () => {
			const name = 'quarterly';
			const price = '£1.01';
			const $ = context.template({ terms: [{
				name,
				price
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(price);
		});
	});

	describe('monthly', () => {
		it('should show the correct title copy', () => {
			const name = 'monthly';
			const $ = context.template({ terms: [{
				name
			}]});
			expect($(TITLE_SELECTOR).text()).to.contain('Monthly');
		});

		it('should show the price', () => {
			const name = 'monthly';
			const price = '£1.01';
			const $ = context.template({ terms: [{
				name,
				price
			}]});
			expect($(DESCRIPTION_SELECTOR).text()).to.contain(price);
		});
	});

	it('should not have discount text by default', () => {
		const option1 = { name: 'quarterly', price: '£10' };
		const option2 = { name: 'monthly', price: '£20' };
		const $ = context.template({ terms: [option1, option2]});
		expect($(DISCOUNT_SELECTOR).length).to.equal(0);
	});

	it('should have discount text if a discount is passed', () => {
		const option1 = { name: 'quarterly', discount: '25%', price: '£10' };
		const option2 = { name: 'monthly', price: '£20' };
		const $ = context.template({ terms: [option1, option2]});
		expect($(DISCOUNT_SELECTOR).length).to.equal(1);
	});
});
