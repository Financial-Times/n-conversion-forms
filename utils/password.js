class Password {
	/**
	 * Initalise the Password utility
	 */
	constructor (document) {
		if (!document) {
			throw new Error('Please supply the document object');
		}

		this.$password = document.querySelector('.ncf #password');
		this.$checkbox = document.querySelector('.ncf #showPassword');

		if (!this.$password) {
			throw new Error('Please include the password partial on the page');
		}

		this.registerMaskCheckbox();
	}

	/**
	 * Setup checkbox to toggle password visibility
	 */
	registerMaskCheckbox () {
		if (this.$checkbox) {
			this.$checkbox.addEventListener('change', () => {
				this.toggleMask(!this.$checkbox.checked);
			});
		}
	}

	/**
	 * Toggle whether the password is shown in plain text or not
	 * @param {Boolean} mask Pass true to show plain text
	 */
	toggleMask (mask) {
		this.$password.type = mask ? 'password' : 'text';
	}
};

module.exports = Password;
