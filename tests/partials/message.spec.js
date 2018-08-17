const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const CLASS_ERROR = 'o-message--error';
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

	it('should not have the error class if isError is not passed', () => {
		const $ = context.template({});

		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_ERROR);
	});

	it('should have the error class if isError passed', () => {
		const $ = context.template({
			isError: true
		});

		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_ERROR);
	});
});
