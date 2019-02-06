const { expect } = require('chai');
const {
	fetchPartial,
} = require('../helpers');

let context = {};
let params;

describe('payment-type', () => {
	before(async () => {
		context.template = await fetchPartial('payment-type.html');
		params = {
			enableCreditcard: true,
			enableDirectdebit: true,
			enablePaypal: true,
			enableApplepay: true
		};
	});

	it('should default to no payment type selected', () => {
		const $ = context.template(params);
		expect($('input[checked]').length).to.equal(0);
	});

	it('should default to the given value of creditcard', () => {
		params.value = 'creditcard';
		const $ = context.template(params);
		expect($('input[checked]').attr('value')).to.equal(params.value);
	});

	it('should default to the given value of directdebit', () => {
		params.value = 'directdebit';
		const $ = context.template(params);
		expect($('input[checked]').attr('value')).to.equal(params.value);
	});

	it('should default to the given value of paypal', () => {
		params.value = 'paypal';
		const $ = context.template(params);
		expect($('input[checked]').attr('value')).to.equal(params.value);
	});

	it('should default to the given value of applepay', () => {
		params.value = 'applepay';
		const $ = context.template(params);
		expect($('input[checked]').attr('value')).to.equal(params.value);
	});

	it('should show no payment options by default', () => {
		expectPaymentType(context);
	});

	it('should show only creditcard', () => {
		expectPaymentType(context, { creditcard: true });
	});

	it('should show only directdebit', () => {
		expectPaymentType(context, { directdebit: true });
	});

	it('should show only paypal', () => {
		expectPaymentType(context, { paypal: true });
	});

	it('should show only applepay', () => {
		expectPaymentType(context, { applepay: true });
	});

	it('should show creditcard and applepay', () => {
		expectPaymentType(context, {
			creditcard: true,
			applepay: true
		});
	});

	it('should show all payment types', () => {
		expectPaymentType(context, {
			creditcard: true,
			directdebit: true,
			paypal: true,
			applepay: true
		});
	});
});

function expectPaymentType (context, { creditcard=false, directdebit=false, paypal=false, applepay=false }={}) {
	const $ = context.template({
		enableCreditcard: creditcard,
		enableDirectdebit: directdebit,
		enablePaypal: paypal,
		enableApplepay: applepay
	});
	expect($('input[value="creditcard"]').length === 1).to.equal(creditcard);
	expect($('label[for="creditcard"]').length === 1).to.equal(creditcard);
	expect($('input[value="directdebit"]').length === 1).to.equal(directdebit);
	expect($('label[for="directdebit"]').length === 1).to.equal(directdebit);
	expect($('input[value="paypal"]').length === 1).to.equal(paypal);
	expect($('label[for="paypal"]').length === 1).to.equal(paypal);
	expect($('input[value="applepay"]').length === 1).to.equal(applepay);
	expect($('label[for="applepay"]').length === 1).to.equal(applepay);
}
