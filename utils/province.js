const FormElement = require('./form-element');

class Province extends FormElement {
	constructor(document) {
		super(document, '.ncf #provinceField');
	}
}

module.exports = Province;
