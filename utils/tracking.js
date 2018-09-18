const imageUrl = 'https://spoor-api.ft.com/px.gif';
const eventName = 'oTracking.event';

class Tracking {
	/**
	 * Construct with window and element
	 * @param {Window} window Window object to access Image and CustomEvent on
	 * @param {Element} element HTML element to dispatch event on, normally document.body
	 */
	constructor (window, element) {
		if (!window || !element) {
			throw new Error('Please supply a window and element');
		}

		this.window = window;
		this.element = element;
		this.initDebugData();
	}

	/**
	 * Dispatch a standard tracking event, falls back to dispacting tracking pixel
	 * @param {string} category
	 * @param {string} action
	 * @param {object} data
	 * @returns {number} Amount of events dispatched
	 */
	dispatch (category, action, data = {}) {
		if (!category || !action) {
			throw new Error('Please supply a category and action');
		}

		const eventData = Object.assign({}, data, { action, category });

		try {
			return this.dispatchCustomEvent(eventData);
		} catch (e) {
			return this.dispatchImage(eventData);
		}
	}

	/**
	 * Fire a CustomEvent on the given element with tracking data
	 * @param {object} data
	 * @returns {number} Amount of events dispatched
	 */
	dispatchCustomEvent (data = {}) {
		const event = new this.window.CustomEvent(eventName, {
			bubbles: true,
			cancelable: true,
			data
		});

		this.element.dispatchEvent(event);
		return this.addDebugData(data);
	}

	/**
	 * Load a tracking pixel with encoded tracking data
	 * @param {object} data
	 * @returns {number} Amount of events dispatched
	 */
	dispatchImage (data = {}) {
		const image = new this.window.Image();
		const encodedData = encodeURIComponent(JSON.stringify(data));

		image.src = `${imageUrl}?data=${encodedData}`;
		return this.addDebugData(data);
	}

	/**
	 * Initalise debug data array
	 * @returns {array}
	 */
	initDebugData () {
		return this.window.debugTracking = this.window.debugTracking || [];
	}

	/**
	 * Add a new debug message
	 * @param {object} data
	 * @returns {number} Number of debug messages
	 */
	addDebugData (data = {}) {
		return this.window.debugTracking.push({ time: new this.window.Date(), data });
	}

	/**
	 * Return all the debug data
	 * @returns {array}
	 */
	getDebugData () {
		return this.window.debugTracking || [];
	}
};

module.exports = Tracking;
