const FormElement = require('./form-element');

class Postcode extends FormElement {
	constructor (document) {
		super(document, '.ncf #postCode');
	}
}

module.exports = Postcode;
