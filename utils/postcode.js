const FormElement = require('./form-element');

class Postcode extends FormElement {
	constructor (document) {
		super(document, '.ncf #postCodeField');
	}
}

module.exports = Postcode;
