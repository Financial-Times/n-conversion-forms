const { expect } = require('chai');
const {
	registerPartial,
	unregisterPartial,
	fetchPartial,
} = require('../helpers');

let context = {};

describe('error page template', () => {

	before(async () => {
		registerPartial('@partial-block', '<div>Foo Bar</div>');
		context.template = await fetchPartial('error-page.html');
	});

	after(() => {
		unregisterPartial('@partial-block');
	});

	it('should display an error icon', () => {
		const $ = context.template({});
		expect($('.ncf__icon--error').length).to.equal(1);
	});

	it('should set the header text if provided', () => {
		const sampleHeaderText = 'hello my unit tests!';
		const $ = context.template({
			header: sampleHeaderText
		});
		expect($('h1.ncf__header').text()).to.equal(sampleHeaderText);
	});

	it('should default the header text if not provided', () => {
		const $ = context.template({});
		expect($('h1.ncf__header').text()).to.equal('Sorry, something went wrong');
	});

	it('should set the message text if provided', () => {
		const sampleMessage = 'Call now and receive a 98.56% discount!';
		const $ = context.template({
			message: sampleMessage
		});
		expect($('#error-message').text()).to.equal(sampleMessage);
	});

	it('should default the message text if not provided', () => {
		const $ = context.template({});
		expect($('#error-message').text()).to.equal('Speak to our Customer Care team now so we can help.');
	});

	it('should display the international customer care number', () => {
		const $ = context.template({});
		expect($('a#error-international-number').text()).to.equal('+ 800 0705 6477');
	});

	it('should set the international customer care number on the link', () => {
		const $ = context.template({});
		expect($('a#error-international-number').attr('href')).to.equal('tel:+80007056477');
	});

	it('should allow content in the partial', () => {
		const $ = context.template();
		expect($('.ncf__error-page__content').html().trim()).to.equal('<div>Foo Bar</div>');
	});

});
