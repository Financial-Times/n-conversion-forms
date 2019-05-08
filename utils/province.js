const FormElement = require('./form-element');

class Province extends FormElement {
	constructor (document) {
		super(document, '.ncf #province');
	}
}

module.exports = Province;
