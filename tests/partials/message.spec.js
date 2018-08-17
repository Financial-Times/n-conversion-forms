const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const CLASS_ERROR = 'o-message--error';
const CLASS_SUCCESS = 'o-message--success';
const CLASS_NEUTRAL = 'o-message--neutral';
const SELECTOR_MESSAGE = '.o-message__content-main';
const SELECTOR_CONTAINER = '.o-message';

let context = {};

describe('message template', () => {
	before(async () => {
		context.template = await fetchPartial('message.html');
	});

	it('should say nothing by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_MESSAGE).text()).to.equal('');
	});

	it('should output the message if passed', () => {
		const message = 'This is an example message for testing';
		const $ = context.template({
			message
		});

		expect($(SELECTOR_MESSAGE).text()).to.equal(message);
	});

	it('should have the error class if isError passed', () => {
		const $ = context.template({
			isError: true
		});

		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_ERROR);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_SUCCESS);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_NEUTRAL);
	});

	it('should have the success class if isSuccess passed', () => {
		const $ = context.template({
			isSuccess: true
		});

		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_ERROR);
		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_SUCCESS);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_NEUTRAL);
	});

	it('should have the neutral class by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_ERROR);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_SUCCESS);
		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_NEUTRAL);
	});
});
