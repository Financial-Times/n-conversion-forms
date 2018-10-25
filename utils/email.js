const fetchres = require('fetchres');

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
		this.$csrfToken = document.querySelector('.ncf #csrfToken');

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
	 * @param {string} url URL to the email exists endpoint.
	 * @param {function} onFound Callback function to run if email does exist
	 * @param {function} onNotFound Callback function to run if email does *not* exist.
	 * @returns {function} The handler function so the caller can unregister it if they need.
	 */
	registerEmailExistsCheck (url, onFound, onNotFound) {
		const handler = () => {
			this.handleEmailExistsChange(url, onFound, onNotFound);
		};

		this.$email.addEventListener('change', handler);

		return handler;
	}

	handleEmailExistsChange (url, onFound, onNotFound) {
		if (this.$email.value) {
			return fetch(url, {
				method: 'POST',
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
					if (response.userExists) {
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
