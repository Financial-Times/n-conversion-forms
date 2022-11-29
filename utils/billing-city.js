const FormElement = require('./form-element');

class BillingCity extends FormElement {
	constructor(document) {
		super(document, '.ncf #billingCityField');
	}
}

module.exports = BillingCity;
