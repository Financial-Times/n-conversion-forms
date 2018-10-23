/**
 * Utility for the `n-conversion-forms/partial/password.html` partial
 * @memberof utils
 */
class Password {
	/**
	 * Create password utility and register change listener to toggle password mask
 	 * @param {Document} document Windows [document](https://developer.mozilla.org/en-US/docs/Web/API/Document) object
	 * @throws If `document` object is not passed
   	 * @throws If password or checkbox elements not found in document
     * @example
     * // Initiate with window.document
     * const password = new Password(window.document);
	 */
	constructor (document) {
		if (!document) {
			throw new Error('Please supply the document object');
		}

		this.$password = document.querySelector('.ncf #password');
		this.$checkbox = document.querySelector('.ncf #showPassword');

		if (!this.$password || !this.$checkbox) {
			throw new Error('Please include the password partial on the page');
		}

		this.$checkbox.addEventListener('change', () => {
			this.toggleMask(!this.$checkbox.checked);
		});
	}

	/**
	 * Toggles whether the password is shown in plain text or not
	 * @param {Boolean} mask Pass `false` to show the password in plain text
	 * @example
 	 * // Show the password in plain text
	 * password.toggleMask(false);
	 */
	toggleMask (mask) {
		this.$password.type = mask ? 'password' : 'text';
	}
};

module.exports = Password;
