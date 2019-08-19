const expect = require('chai').expect;
const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeRequired,
	shouldError
} = require('../helpers');

let context = {};

describe('delivery-address template', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-address.html');
	});

	it('should have a blank value if one is not passed in', () => {
		const $ = context.template({});

		expect($('#deliveryAddressLine1').val()).to.equal('');
		expect($('#deliveryAddressLine2').val()).to.equal('');
		expect($('#deliveryAddressLine3').val()).to.equal('');
	});

	it('should populate the correct value', () => {
		const line1 = 'line1';
		const line2 = 'line2';
		const line3 = 'line3';
		const $ = context.template({
			line1, line2, line3
		});

		expect($('#deliveryAddressLine1').val()).to.equal(line1);
		expect($('#deliveryAddressLine2').val()).to.equal(line2);
		expect($('#deliveryAddressLine3').val()).to.equal(line3);
	});

	shouldBeRequired(context, '#deliveryAddressLine1');

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
