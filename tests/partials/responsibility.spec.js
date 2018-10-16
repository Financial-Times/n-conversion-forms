const { expect } = require('chai');

const {
	fetchPartial,
	registerHelper,
	unregisterHelper,
	shouldBeRequired,
	shouldError
} = require('../helpers');

let context = {};

describe('responsibility template', () => {
	let options;
	before(async () => {
		registerHelper('ncf-common-data', function ({ fn }) {
			return fn(Object.assign({}, { options }, this));
		});
		context.template = await fetchPartial('responsibility.html');
	});

	beforeEach(() => {
		options = [{code: 'code-a', description: 'A' }, {code: 'code-b', description: 'B' }, {code: 'code-c', description: 'C' }];
	});

	after(() => {
		unregisterHelper('ncf-common-data');
	});

	it('should show no options if none passed in', () => {
		options = [];
		const $ = context.template({});
		expect($('select').find('option').length).to.equal(1);

		expect($('select option').first().attr('value')).to.equal('');
		expect($('select option').first().text()).to.equal('Please select a job responsibility');
	});

	it('should generate options including the default', () => {
		const $ = context.template({});
		expect($('select').find('option').length).to.equal(options.length + 1);
	});

	it('should generate options with the correct label and value', () => {
		const $ = context.template({});
		const secondOption = $('select option').get(1);

		expect($(secondOption).attr('value')).to.equal(options[0].code);
		expect($(secondOption).text()).to.equal(options[0].description);
	});

	it('should select the correct option if value passed', () => {
		const value = options[1].value;
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
});
