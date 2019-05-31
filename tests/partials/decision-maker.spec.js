const { expect } = require('chai');

const {
	fetchPartial,
	shouldError
} = require('../helpers');

let context = {};

describe('decision-maker template', () => {
	before(async () => {
		context.template = await fetchPartial('decision-maker.html');
	});

	it('should not have any checked fields by default', () => {
		const $ = context.template({});
		expect($('input[checked]').length).to.equal(0);
	});

	it('should check the yes input if yes passed as value', () => {
		const value = 'yes';
		const $ = context.template({
			value
		});
		expect($('input[value="yes"]').attr('checked')).to.equal('checked');
	});

	it('should check the no input if no passed as value', () => {
		const value = 'no';
		const $ = context.template({
			value
		});
		expect($('input[value="no"]').attr('checked')).to.equal('checked');
	});

	it('should not check anything if rubbish passed in', () => {
		const value = 'rubbish';
		const $ = context.template({
			value
		});
		expect($('input[checked]').length).to.equal(0);
	});

	shouldError(context);
});
