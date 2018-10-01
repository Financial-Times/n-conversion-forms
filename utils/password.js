class Password {
	/**
	 * Initalise the Password utility
	 * @param {Element} password Input element
	 */
	constructor (password) {
		if (!password) {
			throw new Error('Please supply a password element');
		}

		this.password = password;
	}

	/**
	 * Setup checkbox to toggle password visibility
	 * @param {Element} checkbox
	 */
	registerVisibilityCheckbox (checkbox) {
		if (!checkbox) {
			throw new Error('Please supply a checkbox element');
		}
		checkbox.addEventListener('change', () => {
			this.toggleVisibility(checkbox.checked);
		});
	}

	/**
	 * Make a decision to show or hide password when a change occurs
	 * @param {Boolean} visible Pass true to display password in plain text
	 * @return {String} Current input type
	 */
	toggleVisibility (visible) {
		if (visible) {
			return this.password.type = 'text';
		} else {
			return this.password.type = 'password';
		}
	}
};

module.exports = Password;
