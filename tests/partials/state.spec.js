const { expect } = require('chai');
const ncfCommonData = require('../../helpers/ncf-common-data');
const {
	fetchPartial,
	registerHelper,
	unregisterHelper,
	shouldBeDisableable,
	shouldBeRequired,
	shouldError
} = require('../helpers');

let context = {};

describe('state template', () => {
	before(async () => {
		context.template = await fetchPartial('state.html');
	});

	beforeEach(() => {
		registerHelper('ncf-common-data', ncfCommonData);
	});

	afterEach(() => {
		unregisterHelper('ncf-common-data');
	});

	describe('options', () => {
		it('should show only default option if no states', () => {
			registerHelper('ncf-common-data', ({fn}) => fn(this));
			const $ = context.template({});

			expect($('select').find('option').length).to.equal(1);
			expect($('select option').first().attr('value')).to.equal('');
			expect($('select option').first().text()).to.equal('Please select a state');
		});

		it('should generate options if passed', () => {
			const $ = context.template({});

			expect($('select').find('option').length).to.be.greaterThan(1);
		});

		it('should generate options with the correct label and value', () => {
			const states = [{ code: 'test', name: 'test'}];
			registerHelper('ncf-common-data', ({fn}) => fn(Object.assign({}, { states }, this)));
			const $ = context.template({});
			const secondOption = $('select option').get(1);

			expect($(secondOption).attr('value')).to.equal(states[0].code);
			expect($(secondOption).text()).to.equal(states[0].name);
		});
	});

	it('should be not be billing by default', () => {
		const $ = context.template({});
		expect($('select').attr('name')).to.contain('state');
	});

	it('should be be billing if asked', () => {
		const $ = context.template({
			isBillingState: true
		});
		expect($('select').attr('name')).to.contain('billingState');
	});

	shouldBeRequired(context, 'select');

	shouldError(context);

	shouldBeDisableable(context, 'select');

});
