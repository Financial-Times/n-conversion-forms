const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

const CLASS_ALERT = 'o-message--alert-inner';
const CLASS_NOTICE = 'o-message--notice-inner';
const CLASS_ERROR = 'o-message--error';
const CLASS_ACTIONS_PRIMARY = 'o-message__actions__primary';
const CLASS_ACTIONS_SECONDARY = 'o-message__actions__secondary';
const CLASS_INFORM = 'o-message--inform';
const CLASS_SUCCESS = 'o-message--success';
const CLASS_NEUTRAL = 'o-message--neutral';
const SELECTOR_ACTIONS = '.o-message__actions';
const SELECTOR_ADDITIONAL = '.o-message__content--additional';
const SELECTOR_MESSAGE = '.o-message__content-main';
const SELECTOR_CONTAINER = '.o-message';
const SELECTOR_TITLE = '.o-message__content-highlight';

let context = {};

describe('message template', () => {
	before(async () => {
		context.template = await fetchPartial('message.html');
	});

	it('should say nothing by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_MESSAGE).text().trim()).to.equal('');
	});

	it('should output the message if passed', () => {
		const message = 'This is an example message for testing';
		const $ = context.template({
			message
		});

		expect($(SELECTOR_MESSAGE).text().trim()).to.equal(message);
	});

	it('should have the notice message type if isNotice is passed', () => {
		const $ = context.template({
			isNotice: true
		});

		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_NOTICE);
	});

	it('should default to the alert message type', () => {
		const $ = context.template();

		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_ALERT);
	});

	it('should have the error class if isError is passed', () => {
		const $ = context.template({
			isError: true
		});

		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_ERROR);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_INFORM);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_SUCCESS);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_NEUTRAL);
	});

	it('should have the success class if isSuccess is passed', () => {
		const $ = context.template({
			isSuccess: true
		});

		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_ERROR);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_INFORM);
		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_SUCCESS);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_NEUTRAL);
	});

	it('should have the inform class if isSuccess is passed', () => {
		const $ = context.template({
			isInform: true
		});

		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_ERROR);
		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_INFORM);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_SUCCESS);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_NEUTRAL);
	});

	it('should have the neutral class by default', () => {
		const $ = context.template({});

		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_ERROR);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_INFORM);
		expect($(SELECTOR_CONTAINER).attr('class')).to.not.contain(CLASS_SUCCESS);
		expect($(SELECTOR_CONTAINER).attr('class')).to.contain(CLASS_NEUTRAL);
	});

	it('should not display a title if not specified', () => {
		const $ = context.template({});
		const $title = $(SELECTOR_TITLE);

		expect($title.length).to.equal(0);
	});

	it('should display a title if specified', () => {
		const $ = context.template({ title: 'Foo' });
		const $title = $(SELECTOR_TITLE);

		expect($title.length).to.equal(1);
		expect($title.text().trim()).to.equal('Foo');
	});

	it('should not display additional copy if not specified', () => {
		const $ = context.template({});
		const $additional = $(SELECTOR_ADDITIONAL);

		expect($additional.length).to.equal(0);
	});

	it('should display additional copy if specified', () => {
		const $ = context.template({ additional: ['Foo', 'Bar'] });
		const $additional = $(SELECTOR_ADDITIONAL);

		expect($additional.length).to.equal(2);
		expect($additional.eq(0).text().trim()).to.equal('Foo');
		expect($additional.eq(1).text().trim()).to.equal('Bar');
	});

	it('should add actions if specified', () => {
		const $ = context.template({ actions: [{ link: '#', text: 'Foo' }] });
		const $link = $(`${SELECTOR_ACTIONS} a`);

		expect($(SELECTOR_ACTIONS).length).to.equal(1);
		expect($link.attr('class')).to.contain(CLASS_ACTIONS_PRIMARY);
		expect($link.attr('href')).to.equal('#');
		expect($link.text()).to.equal('Foo');
	});

	it('should add multiple actions if specified', () => {
		const $ = context.template({ actions: [{ link: '#', text: 'Foo' }, { link: '#', text: 'Bar' }] });

		expect($(`${SELECTOR_ACTIONS} a`).length).to.equal(2);
	});

	it('should add secondary action if specified', () => {
		const $ = context.template({ actions: [{ link: '#', text: 'Foo', isSecondary: true }] });

		expect($(`${SELECTOR_ACTIONS} a`).attr('class')).to.contain(CLASS_ACTIONS_SECONDARY);
	});
});
