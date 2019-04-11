const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('debug template', () => {
	before(async () => {
		context.template = await fetchPartial('debug.html');
	});

	it('shouldn\'t show anything if isTest=false and showHelpers=false', () => {
		const $ = context.template();

		expect($.text()).to.equal('');
	});

	it('should show something if isTest=true and showHelpers=false', () => {
		const $ = context.template({ isTest: true });

		expect($.text()).to.not.equal('');
	});

	it('should show something if isTest=false and showHelpers=true', () => {
		const $ = context.template({ showHelpers: true });

		expect($.text()).to.not.equal('');
	});

	it('should show the appropriate notice when using TEST apis', () => {
		const $ = context.template({ isTest: true, showHelpers: true });

		expect($('.ncf__debug-label').text()).to.contain('TEST');
	});

	it('should show the appropriate notice when using PROD apis', () => {
		const $ = context.template({ isTest: false, showHelpers: true });

		expect($('.ncf__debug-label').text()).to.contain('PROD');
	});

	it('should show helpers if showHelpers=true', () => {
		const $ = context.template({ showHelpers: true });

		expect($('.ncf__debug-helpers').length).to.equal(1);
	});

	it('should show CC helpers if isTest=true', () => {
		const $ = context.template({ isTest: true, showHelpers: true });

		expect($('#ncf-copy-uk-visa').length).to.equal(1);
		expect($('#ncf-copy-us-visa').length).to.equal(1);
		expect($('#ncf-copy-us-amex').length).to.equal(1);
	});
});
