const { expect } = require('chai');

const {
	fetchPartial,
	shouldBeDisableable,
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
		expect($('label').text()).to.contain('Post code');
	});

	it('should render zip code if asked', () => {
		const $ = context.template({
			isZipCode: true
		});
		expect($('label').text()).to.contain('Zip code');
	});

	shouldPopulateValue(context);

	shouldBeRequired(context, 'input');

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
