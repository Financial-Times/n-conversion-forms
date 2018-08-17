const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const SELECTOR_BUTTON = '.ncf__button';
const PARAM_LOCATION = '?location=';

let context = {};

describe('social login template', () => {
	before(async () => {
		context.template = await fetchPartial('social-login.html');
	});

	it('should have a button', () => {
		const $ = context.template({});

		expect($(SELECTOR_BUTTON).length).to.equal(1);
	});

	it('should not have a location param by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_BUTTON).attr('href')).to.not.contain(PARAM_LOCATION);
	});

	it('should append a location to the URL if passed', () => {
		const location = 'https://www.ft.com';
		const $ = context.template({
			location
		});

		expect($(SELECTOR_BUTTON).attr('href')).to.contain(`${PARAM_LOCATION}${location}`);
	});
});
