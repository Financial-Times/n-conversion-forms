const { expect } = require('chai');
const {
	fetchPartial,
} = require('../helpers');

let context = {};

describe('payment-type', () => {
	before(async () => {
		context.template = await fetchPartial('payment-type.html');
	});

	it('should default to no payment type selected', () => {
		const $ = context.template({});

		expect($('input[checked]').length).to.equal(0);
	});

	it('should default to the given value of creditcard', () => {
		const value = 'creditcard';
		const $ = context.template({
			value
		});
		expect($('input[checked]').attr('value')).to.equal(value);
	});

	it('should default to the given value of directdebit', () => {
		const value = 'directdebit';
		const $ = context.template({
			value
		});
		expect($('input[checked]').attr('value')).to.equal(value);
	});

	it('should default to the given value of paypal', () => {
		const value = 'paypal';
		const $ = context.template({
			value
		});
		expect($('input[checked]').attr('value')).to.equal(value);
	});

	it('should default to the given value of applepay', () => {
		const value = 'applepay';
		const $ = context.template({
			value
		});
		expect($('input[checked]').attr('value')).to.equal(value);
	});
});
