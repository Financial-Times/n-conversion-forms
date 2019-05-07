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

		expect($('.is-visible').length).to.equal(1);
		expect($('.n-ui-hide').length).to.equal(0);
	});

	it('should hide loader when showLoader is not set', () => {
		const $ = context.template();

		expect($('.is-visible').length).to.equal(0);
		expect($('.n-ui-hide').length).to.equal(1);
	});

});
