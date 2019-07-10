const expect = require('chai').expect;
const {
	fetchPartial,
	shouldBeDisableable,
	shouldPopulateValue,
	shouldError
} = require('../helpers');

let context = {};

describe('delivery-start-date template', () => {
	before(async () => {
		context.template = await fetchPartial('delivery-start-date.html');
	});

	it('should set a min and max value if set', () => {
		const $ = context.template({
			max: '2019-04-13',
			min: '2019-02-16'
		});

		expect($('input').attr('max')).to.equal('2019-04-13');
		expect($('input').attr('min')).to.equal('2019-02-16');
	});

	shouldPopulateValue(context);

	shouldError(context);

	shouldBeDisableable(context, 'input');
});
