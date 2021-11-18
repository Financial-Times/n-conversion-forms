const FormElement = require('./form-element');

class DeliveryInstructions extends FormElement {
	constructor (document, fieldId = 'deliveryInstructionsField') {
		super(document, `.ncf #${fieldId}`);
	}
}

module.exports = DeliveryInstructions;
