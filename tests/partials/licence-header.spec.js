const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('licence-header template', () => {
	before(async () => {
		context.template = await fetchPartial('licence-header.html');
	});

	it('should not mention trial by default', () => {
		const $ = context.template({});

		expect($.text()).not.to.contain('trial');
	});

	it('should mention trial when isTrial is set', () => {
		const $ = context.template({
			isTrial: true
		});

		expect($.text()).to.contain('trial');
	});

	it('should add a display name when set', () => {
		const displayName = 'Company Test Name';
		const $ = context.template({
			displayName
		});

		expect($.text()).to.contain(displayName);
	});

	it('should show welcome test when set', () => {
		const welcomeText = 'The quick brown fox jumped over the lazy hare';
		const $ = context.template({
			welcomeText
		});

		expect($.text()).to.contain(welcomeText);
	});

	it('should show welcome test when set', () => {
		const welcomeText = 'The quick brown fox jumped over the lazy hare';
		const $ = context.template({
			welcomeText
		});

		expect($.text()).to.contain(welcomeText);
	});

	it('should allow html in the welcome text', () => {
		const welcomeText = 'The quick <strong id="strong">brown</strong> fox jumped over the lazy hare';
		const $ = context.template({
			welcomeText
		});

		expect($('#strong').length).to.equal(1);
	});
});
