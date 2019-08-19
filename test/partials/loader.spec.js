const { expect } = require('chai');
const {
	registerPartial,
	unregisterPartial,
	fetchPartial,
} = require('../helpers');

let context = {};

describe('loader template', () => {

	before(async () => {
		registerPartial('@partial-block', '<div>Foo Bar</div>');
		context.template = await fetchPartial('loader.html');
	});

	after(() => {
		unregisterPartial('@partial-block');
	});

	it('should have the loader element', () => {
		const $ = context.template();

		expect($('.ncf__loader').length).to.equal(1);
		expect($('.ncf__loader__content').length).to.equal(1);
	});

	it('should allow a title in the partial', () => {
		const $ = context.template({ title: 'Hooray!' });

		expect($('.ncf__loader__content__title').html().trim()).to.equal('Hooray!');
	});

	it('should allow content in the partial', () => {
		const $ = context.template();

		expect($('.ncf__loader__content__main').html().trim()).to.equal('<div>Foo Bar</div>');
	});

	it('should show loader when showLoader is set to true', () => {
		const $ = context.template({ showLoader: true });

		expect($('.ncf__loader.is-visible').length).to.equal(1);
		expect($('.ncf__loader.n-ui-hide').length).to.equal(0);
	});

	it('should hide loader when showLoader is not set', () => {
		const $ = context.template();

		expect($('.ncf__loader.is-visible').length).to.equal(0);
		expect($('.ncf__loader.n-ui-hide').length).to.equal(1);
	});

	describe('a11y', () => {
		it('should have the appropriate dialog/modal attributes', () => {
			const $ = context.template();
			const $container = $('.ncf__loader');

			expect($container.attr('role')).to.equal('dialog');
			expect($container.attr('aria-modal')).to.equal('true');
			expect($container.attr('aria-labelledby')).to.equal('loader-aria-label');
			expect($('#loader-aria-label').length).to.equal(1);
			expect($container.attr('aria-describedby')).to.equal('loader-aria-description');
			expect($('#loader-aria-description').length).to.equal(1);
		});

		it('should use the title as the aria label', () => {
			const $ = context.template({ title: 'Hooray!' });

			expect($('#loader-aria-label').html().trim()).to.equal('Hooray!');
		});

		it('should show a fallback aria label if no title is passed in', () => {
			const $ = context.template();

			expect($('#loader-aria-label').html().trim()).to.equal('Loading');
		});

		it('should have the correct content in the aria description', () => {
			const $ = context.template();

			expect($('#loader-aria-description').html().trim()).to.equal('<div>Foo Bar</div>');
		});
	});

});
