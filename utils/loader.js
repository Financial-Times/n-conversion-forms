/**
 * Utility for the `n-conversion-forms/partial/loader.html` partial
 * @example
 * const loader = new Loader(document);
 *
 * loader.show();
 */
class Loader {
	/**
	 * Initalise the Loader utility
	 * @param {Element} element Usually the window.document
	 * @throws If the document not passed
	 * @throws When the loader element not found
	 */
	constructor (element) {
		if (!element) {
			throw new Error('Please supply a DOM element');
		}

		this.VISIBLE_CLASS = 'is-visible';
		this.HIDDEN_CLASS = 'ncf__hidden';

		this.element = element;
		this.$loader = element.querySelector('.ncf__loader');
		this.$loaderContent = element.querySelector('.ncf__loader__content');
		this.$loaderContentTitle = element.querySelector('.ncf__loader__content__title');
		this.$loaderContentMain = element.querySelector('.ncf__loader__content__main');

		if (!this.$loader) {
			throw new Error('Please include the loader partial on the page');
		}
	}

	/**
	 * Clear the content.
	 */
	clearContent () {
		this.$loaderContent.innerHTML = '';
	}

	/**
	 * Set the html content.
	 *
	 * @param {string} title The HTML markup/string containing the title of the message.
	 * @param {string} content The HTML markup/string containing the main content of the message.
	 */
	setContent ({ title, content}) {
		if (title) {
			if (!this.$loaderContentTitle) {
				this.$loaderContentTitle = document.createElement('div');
				this.$loaderContentTitle.classList.add('ncf__loader__content__title');
				this.$loaderContent.insertBefore(this.$loaderContentTitle, this.$loaderContentMain);
			}
			this.$loaderContentTitle.innerHTML = title;
		}
		if (content) {
			this.$loaderContentMain.innerHTML = content;
		}
	}

	/**
	 * Show the loader
	 *
	 * @param {object} content The optional content to set *before* showing the loader.
	 */
	show (content) {
		this._previouslyFocused = document.activeElement;

		if (content) {
			this.setContent(content);
		}
		this.$loader.classList.add(this.VISIBLE_CLASS);
		this.$loader.classList.remove(this.HIDDEN_CLASS);

		this.$loader.tabIndex = 1;
		this.$loader.focus();
	}

	/**
	 * Show the loader and stop the user from being able to tab away from it or to what's underneath it.
	 *
	 * @param {object} content The optional content to set *before* showing the loader.
	 */
	showAndPreventTabbing (content) {
		this.show(content);

		this.element.addEventListener('keydown', this.interceptTab);
	}

	/**
	 * Hide the loader
	 */
	hide () {
		this.$loader.classList.add(this.HIDDEN_CLASS);
		this.$loader.classList.remove(this.VISIBLE_CLASS);
		this.$loader.removeAttribute('tabindex');

		this.element.removeEventListener('keydown', this.interceptTab);

		if (this._previouslyFocused) {
			this._previouslyFocused.focus();
			delete this._previouslyFocused;
		}
	}

	/**
	 * Intercepts Tab key events that normally navigate through the content on the page.
	 * @param {object} event The event object for the keypress.
	 */
	interceptTab (event) {
		if (event.keyCode === 9) {
			event.preventDefault();
		}
	}

	/**
	 * Display a loader on top of the element passed
	 * @param {DOMElement} element Show loader over this
	 * @param {Object} content Content for the loader in standard format
	 */
	showOnElement (element, content) {
		const existingLoader = element.querySelector('.ncf__loader');
		const loader = new DOMParser().parseFromString(this.template(content), 'text/html').querySelector('.ncf__loader');

		if (!existingLoader) {
			element.appendChild(loader);
		} else {
			existingLoader.innerHTML = loader;
		}
	}

	/**
	 * Remove loader from a given element
	 * @param {DOMElement} element Loader inside
	 */
	removeFromElement (element) {
		element.querySelector('.ncf__loader').remove();
	}

	/**
	 * Return a string to be injected into the page
	 * @param {String} title
	 * @param {String} content
	 */
	template ({ title='Loading', content='' }) {
		return `
		<div class="ncf__loader is-visible ncf__loader--element"
			role="dialog"
			aria-labelledby="loader-aria-label-element"
			aria-describedby="loader-aria-description-element"
			aria-modal="true"
			tabindex="1">
			<div class="ncf__loader__content">
				<div class="ncf__loader__content__title" id="loader-aria-label-element">
					${title}
				</div>
				<div class="ncf__loader__content__main" id="loader-aria-description-element">
					${content}
				</div>
			</div>
		</div>`;
	}
};

module.exports = Loader;
