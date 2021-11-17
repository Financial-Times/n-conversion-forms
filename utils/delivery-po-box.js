const FormElement = require('./form-element');

class DeliveryPOBox extends FormElement {
	constructor(document, fieldId = 'deliveryPOBoxField') {
		super(document, `.ncf #${fieldId}`);
	}
}

module.exports = DeliveryPOBox;
