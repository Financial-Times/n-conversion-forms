const {
	fetchPartial
} = require('../helpers');
const expect = require('chai').expect;

let context = {};

describe('package-change template', () => {
	before(async () => {
		context.template = await fetchPartial('package-change.html');
	});

	it('should set the form up correctly', () => {
		const data = { changePackageUrl: '/foo' };
		const $ = context.template(data);

		expect($('form').attr('action')).to.equal('/foo');
		expect($('form [type=submit]').length).to.equal(1);
	});

	it('should display package name and price when passed', () => {
		const data = {
			currentPackage: 'Digital',
			currentPrice: '£5.60 per week'
		};
		const $ = context.template(data);

		expect($('.ncf__package-change').text()).to.contain(data.currentPackage);
		expect($('.ncf__package-change').text()).to.contain(data.currentPrice);
	});

	it('should display package name and price when passed', () => {
		const data = {
			formData: [{
				name: 'foo',
				value: 'bar'
			}]
		};
		const $ = context.template(data);

		expect($('form input[name="foo"][value="bar"]').length).to.equal(1);
	});
});
