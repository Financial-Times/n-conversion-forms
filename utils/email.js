const fetchres = require('fetchres');

/**
 * Utility for the `n-conversion-forms/partial/email.html` partial
 * @example
 * const email = new Email(document);
 */
class Email {
	/**
	 * Initalise the Email utility
	 * @param {Element} element Usually the window.document
	 * @throws If the element not passed
	 * @throws When the email element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply the DOM element');
		}

		this.$email = element.querySelector('.ncf #email');
		this.$emailConfirm = element.querySelector('.ncf #emailConfirm');
		this.$emailConfirmField = element.querySelector('.ncf #emailConfirmField');
		this.$csrfToken = element.querySelector('.ncf #csrfToken');

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

	/**
	 * Register the email exists call.
	 * **NB** It's recommended you have a hidden #csrfToken input element that you validate the request with in your backend service.
	 *
	 * @param {String} url URL to the email exists endpoint.
	 * @param {Function} onFound Callback function to run if email does exist
	 * @param {Function} onNotFound Callback function to run if email does *not* exist.
	 * @returns {Function} The handler function so the caller can unregister it if they need.
	 */
	registerEmailExistsCheck (url, onFound, onNotFound) {
		const handler = () => {
			this.handleEmailExistsChange(url, onFound, onNotFound);
		};

		this.$email.addEventListener('change', handler);

		return handler;
	}

	/**
	 * Calls the membership service to check the email
	 * @param {String} url URL of email checking service
	 * @param {Function} onFound Function to call when email found
	 * @param {Function} onNotFound Function to call when not found
	 * @return {Promise}
	 */
	handleEmailExistsChange (url, onFound, onNotFound) {
		if (this.$email.value) {
			return fetch(url, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: this.$email.value,
					csrfToken: this.$csrfToken && this.$csrfToken.value
				})
			})
				.then(fetchres.json)
				.then(response => {
					if (response === true) {
						onFound();
					} else {
						onNotFound();
					}
				})
				.catch(onNotFound);
		} else {
			onNotFound();
		}
	};

};

module.exports = Email;
