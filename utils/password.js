class Password {
	/**
	 * Initalise the Password utility
	 * @param {Element} password Input element
	 * @param {Element} checkbox Optional checkbox element for visibility toggle
	 */
	constructor (password, checkbox) {
		if (!password) {
			throw new Error('Please supply a password element');
		}
		this.password = password;

		if (checkbox) {
			this.registerVisibilityCheckbox(checkbox);
		}
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
		return this.password.type = (visible ? 'text' : 'password');
	}
};

module.exports = Password;
