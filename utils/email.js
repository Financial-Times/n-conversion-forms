class Email {
	/**
	 * Initalise the Email utility
	 */
	constructor (document) {
		if (!document) {
			throw new Error('Please supply the document object');
		}

		this.$email = document.querySelector('.ncf #email');
		this.$emailConfirm = document.querySelector('.ncf #emailConfirm');
		this.$emailConfirmField = document.querySelector('.ncf #emailConfirmField');

		if (!this.$email) {
			throw new Error('Please include the email partial on the page.');
		}

		if (this.$emailConfirm) {
			this.$email.addEventListener('blur', this.checkMatch.bind(this));
			this.$emailConfirm.addEventListener('blur', this.checkMatch.bind(this));
		}
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

module.exports = Email;
