const FormElement = require('./form-element');

class BillingPostcode extends FormElement {
	constructor (document) {
		super(document, '.ncf #billingPostcodeField');
	}
}

module.exports = BillingPostcode;
