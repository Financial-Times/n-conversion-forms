const FormElement = require('./form-element');

class State extends FormElement {
	constructor (document) {
		super(document, '.ncf #state');
	}
}

module.exports = State;
