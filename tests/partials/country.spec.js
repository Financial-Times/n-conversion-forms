const { expect } = require('chai');
const ncfCountries = require('../../helpers/ncf-countries');
const {
	fetchPartial,
	registerHelper,
	unregisterHelper,
	shouldBeDisableable,
	shouldBeRequired,
	shouldError
} = require('../helpers');

let context = {};

describe('country template', () => {
	before(async () => {
		context.template = await fetchPartial('country.html');
	});

	beforeEach(() => {
		registerHelper('ncf-countries', ncfCountries);
	});

	afterEach(() => {
		unregisterHelper('ncf-countries');
	});

	describe('isBillingCountry', () => {
		it('should be have the name country by default', () => {
			const $ = context.template({});
			expect($('select').attr('name')).to.equal('country');
		});

		it('should be have the name billingCountry if isBillingCountry', () => {
			const $ = context.template({
				isBillingCountry: true
			});
			expect($('select').attr('name')).to.equal('billingCountry');
		});
	});

	describe('selection', () => {
		it('should select the correct option if value passed', () => {
			const value = 'GBR';
			const $ = context.template({ value });

			expect($('select option[selected]').attr('value')).to.equal(value);
		});

		it('should select nothing if value is not an option', () => {
			const value = 'thisIsNotAnOption';
			const $ = context.template({
				value
			});

			expect($('select option[selected]').length).to.equal(0);
		});

		it('should not select an option if no value is set', () => {
			const $ = context.template({});

			expect($('select option[selected]').length).to.equal(0);
		});
	});

	describe('options', () => {
		it('should show only default option if no countries', () => {
			registerHelper('ncf-countries', ({fn}) => fn(this));
			const $ = context.template({});

			expect($('select').find('option').length).to.equal(1);
			expect($('select option').first().attr('value')).to.equal('');
			expect($('select option').first().text()).to.equal('Please select a country');
		});

		it('should generate options if passed', () => {
			const $ = context.template({});

			expect($('select').find('option').length).to.be.greaterThan(1);
		});

		it('should generate options with the correct label and value', () => {
			const countries = [{ code: 'test', name: 'test'}];
			registerHelper('ncf-countries', ({fn}) => fn(Object.assign({}, { countries }, this)));
			const $ = context.template({});
			const secondOption = $('select option').get(1);

			expect($(secondOption).attr('value')).to.equal(countries[0].code);
			expect($(secondOption).text()).to.equal(countries[0].name);
		});
	});

	describe('groups', () => {
		it('should have optgroup tags', () => {
			const $ = context.template({});

			expect($('select optgroup').length).to.equal(2);
		});

		it('should have labels', () => {
			const $ = context.template({});
			const first = $('select optgroup').get(0);
			const second = $('select optgroup').get(1);

			expect($(first).attr('label')).to.exist;
			expect($(second).attr('label')).to.exist;
		});

		it('should select only country in frequently used if selected', () => {
			const value = 'GBR';
			const $ = context.template({
				value
			});
			const first = $('select optgroup').get(0);

			expect($('select option[value="GBR"]').length).to.equal(2);
			expect($('select option[selected]').length).to.equal(1);
			expect($(first).find('option[selected]').length).to.equal(1);
		});
	});

	shouldBeRequired(context, 'select');

	shouldError(context);

	shouldBeDisableable(context, 'select');
});
