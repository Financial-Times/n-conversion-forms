const expander = require('o-expander');
const FormElement = require('./form-element');

/**
 * Direct Debit utils.
 * @example
 * new DirectDebitGuarantee();
 *
 */
class DirectDebitGuarantee extends FormElement {

	/**
	 * Constructor for the DirectDebitGuarantee component.
	 * @param {object} document The global document object
	 */
	constructor (document) {
		super(document, '#dd-guarantee');

		this.expander = expander.init(this.$el, {
			contentClassName: 'dd-guarantee__list',
			toggleSelector: '.dd-guarantee__toggle'
		});
	}

}

module.exports = DirectDebitGuarantee;
