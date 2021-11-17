class AppBanner {
	constructor(window) {
		if (!window) {
			throw new Error('Please supply a Window object');
		}

		this.$banner = window.document.querySelector('.ncf__app-banner');

		if (!this.$banner) {
			throw new Error('Please include the app banner partial on the page');
		}

		this.$androidAction = this.$banner.querySelector(
			'.ncf__app-banner-action--android'
		);
		this.$iosAction = this.$banner.querySelector(
			'.ncf__app-banner-action--ios'
		);

		// If user agent can be detected remove the action that's not needed
		if (/(android)/i.test(window.navigator.userAgent)) {
			this.$iosAction.remove();
		} else if (/(ipad|iphone|ipod)/i.test(window.navigator.userAgent)) {
			this.$androidAction.remove();
		}
	}
}

module.exports = AppBanner;
