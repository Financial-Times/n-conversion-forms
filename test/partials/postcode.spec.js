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

describe('postcode template', () => {
	before(async () => {
		context.template = await fetchPartial('postcode.html');
	});

	it('should be post code by default', () => {
		const $ = context.template({});
		expect($('label').text()).to.contain('Post Code');
	});

	it('should render zip code if asked', () => {
		const $ = context.template({
			isZipCode: true
		});
		expect($('label').text()).to.contain('Zip Code');
	});

	it('should be not be billing by default', () => {
		const $ = context.template({});
		expect($('input').attr('name')).to.contain('postCode');
	});

	it('should be billing if asked', () => {
		const $ = context.template({
			isBillingPostcode: true
		});
		expect($('label').text()).to.contain('Billing');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');

	shouldBeHiddable(context, '#postCodeField');
});
