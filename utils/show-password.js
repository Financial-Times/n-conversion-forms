
class ShowPassword {
	/**
	 * Initalise the ShowPassword
	 * @param {Element} password Input element
	 * @param {Element} control Control element
	 */
	constructor (password, control) {
		if (!password || !control) {
			throw new Error('Please supply a password and control elements');
		}

		this.password = password;
		this.control = control;
		this.control.addEventListener('change', this.onChange);
	}

	/**
	 * Make a decision to show or hide password when a change occurs
	 * @return {String} Current input type
	 */
	onChange () {
		if (this.control.checked) {
			return this.showPassword();
		} else {
			return this.hidePassword();
		}
	}

	/**
	 * Set the passwords input type to password hiding the text
	 * @return {String} Current input type 'password'
	 */
	hidePassword () {
		return this.password.type = 'password';
	}

	/**
	 * Set the passwords input type to password hiding the text
	 * @return {String} Current input type 'text'
	 */
	showPassword () {
		return this.password.type = 'text';
	}
};

module.exports = ShowPassword;
