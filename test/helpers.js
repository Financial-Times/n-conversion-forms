const fs = require('fs');
const cheerio = require('cheerio');
const expect = require('chai').expect;
const promisify = require('util').promisify;
const Handlebars = require('@financial-times/n-handlebars').handlebars;

const readFile = promisify(fs.readFile);
const PARTIAL_DIR = __dirname + '/../partials/';
const ERROR_CLASS = 'o-forms--error';
const options = [
	{value: 'testValue1', label: 'testLabel1'},
	{value: 'testValue2', label: 'testValue2'},
	{value: 'testValue3', label: 'testLabel3'}
];
const optionsWithDefault = options.map((option, index) => ({...option, isSelected: index === 1}));
const selectedOption = optionsWithDefault.find(option => option.isSelected);
const handlebars = Handlebars();

const registerPartial = (name, partial) => {
	return handlebars.registerPartial(name, partial);
};

const registerHelper = (name, helper) => {
	return handlebars.registerHelper(name, helper);
};

const unregisterPartial = name => {
	return handlebars.unregisterPartial(name);
};

const unregisterHelper = name => {
	return handlebars.unregisterHelper(name);
};

const fetchPartial = async name => {
	let file = await readFile(PARTIAL_DIR + name, 'utf8');
	// HACK ALERT: this is necessary to make testing @partial-block work. It does mean that any test where
	//  a @partial-block helper isn't registered will blow up, but that will just have to be worked around
	//  by always registering it - even with an empty value if necessary.
	//  We need to use the `#if` around the partial block to make using that in a template optional.
	file = file.replace(/{{#if @partial-block}}([\s\S]*){{\/if}}/gm, '$1');
	const template = handlebars.compile(file);

	return (context) => cheerio.load(template(context));
};

const shouldPopulateOptions = function (context) {
	it('should show no options if none passed in', () => {
		const $ = context.template({});
		expect($('select').find('option').length).to.equal(0);
	});

	it('should generate options if passed', () => {
		const $ = context.template({
			options
		});

		expect($('select').find('option').length).to.equal(options.length);
	});

	it('should generate options with the correct label and value', () => {
		const $ = context.template({
			options
		});

		expect($('select option').first().attr('value')).to.equal('testValue1');
		expect($('select option').first().text()).to.equal('testLabel1');
	});
};

const shouldSelectOption = function (context) {

	it('should select the correct option if value passed', () => {
		const value = options[1].value;
		const $ = context.template({
			options,
			value
		});

		expect($('select option[selected]').attr('value')).to.equal(value);
	});

	it('should select nothing if value is not an option', () => {
		const value = 'thisIsNotAnOption';
		const $ = context.template({
			options,
			value
		});

		expect($('select option[selected]').length).to.equal(0);
	});

	it('should select default if no value is set', () => {
		const $ = context.template({
			options: optionsWithDefault
		});

		expect($('select option[selected]').attr('value')).to.equal(selectedOption.value);
	});

	it('should not select default if actual value is set', () => {
		const value = options[2].value;
		const $ = context.template({
			options: optionsWithDefault,
			value
		});

		expect($('select option[selected]').attr('value')).not.to.equal(selectedOption.value);
		expect($('select option[selected]').attr('value')).to.equal(value);
	});

	it('should select nothing if rubbish value is passed even with defaults set', () => {
		const value = 'thisIsNotAnOption';

		const $ = context.template({
			options: optionsWithDefault,
			value
		});

		expect($('select option[selected]').length).to.equal(0);
	});
};

const shouldPopulateValue = function (context) {
	it('should have a blank value if one isnt passed in', () => {
		const $ = context.template({});

		expect($('input').val()).to.equal('');
	});

	it('should populate the correct value', () => {
		const value = 'ThisIsAValue';
		const $ = context.template({
			value
		});

		expect($('input').val()).to.equal(value);
	});
};

const shouldBeDisableable = function (context, selector, options) {
	it('should be able to get disabled', () => {
		const $ = context.template(Object.assign({ isDisabled: true }, options));

		expect($(selector).attr('disabled')).to.equal('disabled');
	});
};

const shouldBeHiddable = function (context, selector, options) {
	it('should be displayed by default', () => {
		const $ = context.template(Object.assign({ }, options));

		expect($(selector).attr('class')).to.not.contain('n-ui-hide');
	});

	it('should be hidden if isHidden is passed', () => {
		const $ = context.template(Object.assign({ isHidden: true }, options));

		expect($(selector).attr('class')).to.contain('n-ui-hide');
	});
};

const shouldBeRequired = function (context, selector) {
	it('should be required', () => {
		const $ = context.template({});

		expect($(selector).attr('required')).to.equal('required');
	});
};

const shouldAllowPattern = function (context, selector) {
	it('should not have a pattern by default', () => {
		const $ = context.template({});

		expect($(selector).attr('pattern')).to.be.undefined;
	});

	it('should not have a pattern if passed', () => {
		const $ = context.template({
			pattern: 'test'
		});

		expect($(selector).attr('pattern')).to.equal('test');
	});
};

const shouldContainPartials = function (context, partials) {
	it('should contain partials', () => {
		partials.forEach(({id, partial}) => registerPartial(partial, `<div id="${id}"></div>`));

		const $ = context.template({});

		partials.forEach(({id, partial}) => {
			unregisterPartial(partial);
			expect($(`#${id}`).length).to.equal(1);
		});
	});
};

const shouldError = function (context, errorParams = { hasError: true }) {
	it('should not have error class by default', () => {
		const $ = context.template({});

		expect($(ERROR_CLASS).length).to.equal(0);
	});

	it('should have error class if hasError is passed', () => {
		const $ = context.template(errorParams);

		expect($(`.${ERROR_CLASS}`).length).to.equal(1);
	});
};

module.exports = {
	registerPartial,
	unregisterPartial,
	registerHelper,
	unregisterHelper,
	fetchPartial,
	shouldPopulateOptions,
	shouldSelectOption,
	shouldPopulateValue,
	shouldBeDisableable,
	shouldBeHiddable,
	shouldBeRequired,
	shouldAllowPattern,
	shouldContainPartials,
	shouldError
};
