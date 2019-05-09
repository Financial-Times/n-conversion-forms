const FormElement = require('./form-element');

class State extends FormElement {
	constructor (document) {
		super(document, '.ncf #stateField');
	}
}

module.exports = State;
