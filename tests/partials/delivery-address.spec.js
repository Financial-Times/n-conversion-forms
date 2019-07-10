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

	it('should have a blank value if one isnt passed in', () => {
		const $ = context.template({});

		expect($('#addressLine1').val()).to.equal('');
		expect($('#addressLine2').val()).to.equal('');
		expect($('#addressLine3').val()).to.equal('');
	});

	it('should populate the correct value', () => {
		const values = ['line 1', 'line 2', 'line 3'];
		const $ = context.template({
			values
		});

		expect($('#addressLine1').val()).to.equal(values[0]);
		expect($('#addressLine2').val()).to.equal(values[1]);
		expect($('#addressLine3').val()).to.equal(values[2]);
	});

	shouldBeRequired(context, '#addressLine1');

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
