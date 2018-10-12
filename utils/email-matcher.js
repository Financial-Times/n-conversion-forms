class EmailMatcher {
	/**
	 * Initalise the EmailMatcher utility
	 */
	constructor (document) {
		if (!document) {
			throw new Error('Please supply the document object');
		}

		this.$email = document.querySelector('.ncf #email');
		this.$emailConfirm = document.querySelector('.ncf #emailConfirm');
		this.$emailConfirmField = document.querySelector('.ncf #emailConfirmField');

		if (!this.$email || !this.$emailConfirm) {
			throw new Error(`Please include the email partial on the page${!this.$emailConfirm ? ' making sure to specify showConfirm=true' : ''}.`);
		}

		this.$email.addEventListener('change', this.checkMatch.bind(this));
		this.$emailConfirm.addEventListener('change', this.checkMatch.bind(this));
	}

	/**
	 * Check the values of the two fields and update error state accordingly.
	 */
	checkMatch () {
		if (this.$emailConfirm.value) {
			if (this.$email.value !== this.$emailConfirm.value) {
				this.$emailConfirmField.classList.add('o-forms--error');
			} else {
				this.$emailConfirmField.classList.remove('o-forms--error');
			}
		}
	}
};

module.exports = EmailMatcher;
