const { expect } = require('chai');
const { fetchPartial } = require('../helpers');

let context = {};

describe('confirmation template', () => {
	before(async () => {
		context.template = await fetchPartial('confirmation.html');
	});

	it('should populate the email', () => {
		const email = 'test@example.com';
		const $ = context.template({
			email
		});

		expect($.text()).to.contain(email);
	});

	it('should display the offer name', () => {
		const offer = 'Test Offer Name';
		const $ = context.template({
			offer
		});

		expect($.text()).to.contain(offer);
	});

	it('should display all details passed', () => {
		const details = [
			{ title: 'test1', data: 'test1' },
			{ title: 'test2', data: 'tes2' },
		];
		const $ = context.template({
			details
		});

		expect($('dl dt').length).to.equal(2);
	});

	it('should display a description', () => {
		const details = [
			{ title: 'test1', data: 'test1', description: 'test1' }
		];
		const $ = context.template({
			details
		});

		expect($('dl dd').length).to.equal(2);
	});

	it('should display dd mandate link', () => {
		const directDebitMandateUrl = 'www.ft.com';
		const $ = context.template({
			directDebitMandateUrl
		});

		expect($('dl dt').length).to.equal(0);
		expect(Array.from($('a')).filter(elem => elem.attribs['data-trackable'] && elem.attribs['data-trackable'].includes('dd-mandate-link')).length).to.equal(1);
	});

	it('should NOT display dd mandate link if link is not present', () => {
		const $ = context.template({});

		expect($('dl dt').length).to.equal(0);
		expect(Array.from($('a')).filter(elem => elem.attribs['data-trackable'] && elem.attribs['data-trackable'].includes('dd-mandate-link')).length).to.equal(0);
	});


	it('should display redirect to MMA', () => {
		const details = [];
		const $ = context.template({
			details
		});

		expect($('dl dt').length).to.equal(0);
		expect(Array.from($('a')).filter(elem => elem.attribs['data-trackable'] && elem.attribs['data-trackable'].includes('yourAccount')).length).to.equal(1);
	});

	it('should display correct button label for print only offer', () => {
		const isPrintOnly = true;
		const $ = context.template({
			isPrintOnly
		});

		const buttonText = 'Explore our E-Paper';
		expect($.text()).to.contain(buttonText);
	});

	it('should display correct button label for non print only offer', () => {
		const isPrintOnly = false;
		const $ = context.template({
			isPrintOnly
		});

		const buttonText = 'Start exploring';
		expect($.text()).to.contain(buttonText);
	});
});
