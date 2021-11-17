/**
 * Utility for the `n-conversion-forms/partial/password.html` partial
 * @example
 * const password = new Password(document);
 *
 * // Manually toggle the mask
 * password.toggleMask(true);
 */
class Password {
	/**
	 * Initalise the Password utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the password element not found
	 */
	constructor(element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.$password = element.querySelector('.ncf #password');
		this.$checkbox = element.querySelector('.ncf #showPassword');

		if (!this.$password || !this.$checkbox) {
			throw new Error('Please include the password partial on the page');
		}

		this.$checkbox.addEventListener('change', () => {
			this.toggleMask(!this.$checkbox.checked);
		});
	}

	/**
	 * Toggle whether the password is shown in plain text or not
	 * @param {Boolean} mask Pass false to show plain text
	 */
	toggleMask(mask) {
		this.$password.type = mask ? 'password' : 'text';
	}
}

module.exports = Password;
