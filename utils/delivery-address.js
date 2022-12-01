const FormElement = require('./form-element');

class DeliveryAddress extends FormElement {
	constructor(document, fieldId = 'deliveryAddressFields') {
		super(document, `.ncf #${fieldId}`);
	}
}

module.exports = DeliveryAddress;
