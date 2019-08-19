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

	it('should be post code by default', () => {
		const $ = context.template({});
		expect($.text()).to.contain('Post code');
	});

	it('should render zip code if asked', () => {
		const $ = context.template({
			isZipCode: true
		});
		expect($.text()).to.contain('Zip code');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');

	shouldBeHiddable(context, '#deliveryPostcodeField');
});
