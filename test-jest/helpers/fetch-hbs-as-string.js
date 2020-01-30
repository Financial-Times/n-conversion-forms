const fs = require('fs');
const cheerio = require('cheerio');
const promisify = require('util').promisify;
const Handlebars = require('@financial-times/n-handlebars').standalone;

const readFile = promisify(fs.readFile);
const PARTIAL_DIR = __dirname + '/../../partials/';

const fetchPartial = async (name, returnString = false, partialBlockString = '') => {
	const hbsStandalone = await Handlebars({
		directory: '../../',
		partialsDir: './partials'
	});
	const handlebars = hbsStandalone.handlebars;

	let file = await readFile(PARTIAL_DIR + name, 'utf8');
	// We need to replace any internal references to ncf partials.
	file = file.replace(/\{\{> n-conversion-forms\/partials\//gm, '{{> ');
	// HACK ALERT: this is necessary to make testing @partial-block work. It does mean that any test where
	//  a @partial-block helper isn't registered will blow up, but that will just have to be worked around
	//  by always registering it - even with an empty value if necessary.
	//  We need to use the `#if` around the partial block to make using that in a template optional.
	file = file.replace(/{{#if @partial-block}}([\s\S]*){{\/if}}/gm, '$1');
	file = file.replace(/{{> @partial-block\s?}}/gm, partialBlockString);
	const template = handlebars.compile(file);
	if (returnString) {
		return (context) => template(context);
	}
	return (context) => cheerio.load(template(context));
};

const fetchPartialAsString = async (name, partialBlockString) => fetchPartial(name, true, partialBlockString);

module.exports = {
	fetchPartialAsString
};
