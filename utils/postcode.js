const FormElement = require('./form-element');

class Postcode extends FormElement {
	constructor(document, query = '.ncf #postCodeField') {
		super(document, query);
	}

	set changePostcodeReferenceForCountry(countryCode) {
		const name = Postcode.getPostcodeReferenceByCountry(countryCode);
		this.reference = this.$el.querySelectorAll('[data-reference=postcode]');
		for (let i = 0; i < this.reference.length; i++) {
			this.reference[i].innerHTML = name;
		}
		this.postcodeInput = this.$el.querySelector('input');
		this.postcodeInput.placeholder = 'Enter your ' + name;
	}

	static getPostcodeReferenceByCountry(countryCode) {
		if (countryCode === 'CAN') {
			return 'postal code';
		} else if (countryCode === 'USA') {
			return 'zip code';
		} else {
			return 'postcode';
		}
	}
}

module.exports = Postcode;
