const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('continue-reading template', () => {
	before(async () => {
		context.template = await fetchPartial('continue-reading.html');
	});

	it('should display the given quote', () => {
		const quote = 'This is the given quote';
		const $ = context.template({
			quote
		});

		expect($.text()).to.contain(quote);
	});

	it('should not display a link by default', () => {
		const $ = context.template({});

		expect($('a').length).to.equal(0);
	});

	it('should display a link if passed', () => {
		const link = 'https://google.com';
		const $ = context.template({
			link
		});

		expect($('a').attr('href')).to.equal(link);
	});

	it('should not have links with any target attribute', () => {
		const link = 'https://google.com';
		const $ = context.template({
			link
		});

		expect($('a[target]').length).to.equal(0);
	});

	it('should add target top to links when the form is embedded', () => {
		const link = 'https://google.com';
		const $ = context.template({
			link,
			isEmbedded: true
		});

		expect($('a[target="_top"]').length).to.be.greaterThan(0);
	});
});
