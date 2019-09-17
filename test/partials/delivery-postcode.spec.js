const { expect } = require('chai');

const {
	fetchPartial,
	shouldBeDisableable,
	shouldBeHiddable,
	shouldBeRequired,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('delivery postcode template', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-postcode.html');
	});

	it('should be Delivery', () => {
		const $ = context.template({});
		expect($('label').text()).to.contain('Delivery');
	});

	it('should be post code by default', () => {
		const $ = context.template({
			postcodeReference: 'postcode'
		});
		expect($.text()).to.contain('postcode');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');

	shouldBeHiddable(context, '#deliveryPostcodeField');
});
