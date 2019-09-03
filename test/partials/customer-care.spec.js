const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('customer care template', () => {
	before(async () => {
		context.template = await fetchPartial('customer-care.html');
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
		expect($('h1.ncf__header').text()).to.equal('Sorry, this is not available online');
	});

	it('should set the message text if provided', () => {
		const sampleMessage = 'Call now and receive a 98.56% discount!';
		const $ = context.template({
			message: sampleMessage
		});
		expect($('#customer-care-message').text()).to.equal(sampleMessage);
	});

	it('should default the message text if not provided', () => {
		const $ = context.template({});
		expect($('#customer-care-message').text()).to.equal('Speak now to our Customer Care team to discuss your options');
	});

	it('should display the international customer care number', () => {
		const $ = context.template({});
		expect($('a#customer-care-internation-number').text()).to.equal('+ 800 0705 6477');
	});

	it('should set the international customer care number on the link', () => {
		const $ = context.template({});
		expect($('a#customer-care-internation-number').attr('href')).to.equal('tel:+80007056477');
	});

});
