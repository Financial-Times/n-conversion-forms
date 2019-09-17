const Postcode= require('./postcode');

class BillingPostcode extends Postcode {
	constructor (document) {
		super(document, '.ncf #billingPostcodeField');
	}
}

module.exports = BillingPostcode;
