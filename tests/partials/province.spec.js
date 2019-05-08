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

describe('province template', () => {
	before(async () => {
		context.template = await fetchPartial('province.html');
	});

	beforeEach(() => {
		registerHelper('ncf-common-data', ncfCommonData);
	});

	afterEach(() => {
		unregisterHelper('ncf-common-data');
	});

	describe('options', () => {
		it('should show only default option if no provinces', () => {
			registerHelper('ncf-common-data', ({fn}) => fn(this));
			const $ = context.template({});

			expect($('select').find('option').length).to.equal(1);
			expect($('select option').first().attr('value')).to.equal('');
			expect($('select option').first().text()).to.equal('Please select a province');
		});

		it('should generate options if passed', () => {
			const $ = context.template({});

			expect($('select').find('option').length).to.be.greaterThan(1);
		});

		it('should generate options with the correct label and value', () => {
			const provinces = [{ code: 'test', name: 'test'}];
			registerHelper('ncf-common-data', ({fn}) => fn(Object.assign({}, { provinces }, this)));
			const $ = context.template({});
			const secondOption = $('select option').get(1);

			expect($(secondOption).attr('value')).to.equal(provinces[0].code);
			expect($(secondOption).text()).to.equal(provinces[0].name);
		});
	});

	shouldBeRequired(context, 'select');

	shouldError(context);

	shouldBeDisableable(context, 'select');

});
