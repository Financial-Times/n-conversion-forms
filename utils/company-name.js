const FormElement = require('./form-element');

class CompanyName extends FormElement {
	constructor(document, fieldId = 'companyNameField') {
		super(document, `.ncf #${fieldId}`);
	}
}

module.exports = CompanyName;
