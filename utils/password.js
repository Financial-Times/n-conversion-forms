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
	 * Toggle whether the password is shown in plain text or not
	 * @param {Boolean} visible Pass true to show plain text
	 */
	toggleVisibility (visible) {
		const type = visible ? 'text' : 'password';
		this.password.type = type;
	}
};

module.exports = Password;
