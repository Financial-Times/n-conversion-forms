const Postcode = require('./postcode');

class DeliveryPostcode extends Postcode {
	constructor (document) {
		super(document, '.ncf #deliveryPostcodeField');
	}
}

module.exports = DeliveryPostcode;
