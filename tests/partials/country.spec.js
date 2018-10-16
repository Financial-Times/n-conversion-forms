const { expect } = require('chai');

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

	const mockCountries = [{ code: 'a', name: 'First' }, { code: 'b', name: 'Second' }, { code: 'c', name: 'Third' }];
	let countries;

	before(async () => {
		context.template = await fetchPartial('country.html');
		registerHelper('ncf-countries', function ({ fn }) {
			return fn(Object.assign({ countries }, this));
		});
	});

	beforeEach(() => {
		countries = mockCountries;
	});


	after(() => {
		unregisterHelper('ncf-countries');
	});

	it('should show just default option if none passed in', () => {
		countries = [];
		const $ = context.template({});
		expect($('select').find('option').length).to.equal(1);

		expect($('select option').first().attr('value')).to.equal('');
		expect($('select option').first().text()).to.equal('Please select a country');
	});

	it('should generate options if passed', () => {
		const $ = context.template({});
		expect($('select').find('option').length).to.equal(countries.length + 1);
	});

	it('should generate options with the correct label and value', () => {
		const $ = context.template({});
		const secondOption = $('select option').get(1);
		expect($(secondOption).attr('value')).to.equal(mockCountries[0].code);
		expect($(secondOption).text()).to.equal(mockCountries[0].name);
	});

	it('should select the correct option if value passed', () => {
		const value = countries[1].code;
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

	shouldBeRequired(context, 'select');

	shouldError(context);

	shouldBeDisableable(context, 'select');
});
