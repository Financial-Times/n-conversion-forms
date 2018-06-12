const fs = require('fs');
const cheerio = require('cheerio');
const expect = require('chai').expect;
const promisify = require('util').promisify;
const handlebars = require('@financial-times/n-handlebars').handlebars;

const readFile = promisify(fs.readFile);
const PARTIAL_DIR = __dirname + '/../templates/';
const options = [
	{value: 'testValue1', label: 'testLabel1'},
	{value: 'testValue2', label: 'testValue2'},
	{value: 'testValue3', label: 'testLabel3'}
];
const optionsWithDefault = options.map((option, index) => ({...option, isSelected: index === 1}));
const selectedOption = optionsWithDefault.find(option => option.isSelected);

const registerPartial = (name, partial) => {
	return handlebars().registerPartial(name, partial);
};

const unregisterPartial = name => {
	return handlebars().unregisterPartial(name);
};

const fetchPartial = async name => {
	const file = await readFile(PARTIAL_DIR + name, 'utf8');
	const template = handlebars().compile(file);

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

const shouldBeRequired = function (context, selector) {
	it('should be required', () => {
		const $ = context.template({});

		expect($(selector).attr('required')).to.equal('required');
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

module.exports = {
    registerPartial,
    unregisterPartial,
    fetchPartial,
    shouldPopulateOptions,
    shouldSelectOption,
    shouldPopulateValue,
    shouldBeRequired,
    shouldContainPartials
};
