/**
 * Tracking helper to either fire an oTracking event or image
 * @example
 * const tracking = new Tracking(window, document.body);
 * tracking.dispatch('test', 'test', { example: 'data' });
 */
class Tracking {
	/**
	 * Construct with window and element
	 * @param {Window} window Window object to access Image and CustomEvent on
	 * @param {Element} element HTML element to dispatch event on, normally document.body
	 * @throws If the window or element is not supplied
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
	 * @param {String} category
	 * @param {String} action
	 * @param {Object} data
	 * @returns {Number} Amount of events dispatched
	 * @throws If the category or action is not supplied
	 */
	dispatch (category, action, data = {}) {
		if (!category || !action) {
			throw new Error('Please supply a category and action');
		}

		const eventData = Object.assign({}, data, { action, category });

		// Clean eventData of empty properties
		for (const property in eventData) {
			if (eventData[property] === undefined ||
				eventData[property] === null ||
				eventData[property] === '') {
				delete eventData[property];
			}
		}

		try {
			return this.dispatchCustomEvent(eventData);
		} catch (e) {
			return this.dispatchImage(eventData);
		}
	}

	/**
	 * Fire a CustomEvent on the given element with tracking data
	 * @param {Object} data
	 * @returns {Number} Amount of events dispatched
	 */
	dispatchCustomEvent (data = {}) {
		const event = new this.window.CustomEvent('oTracking.event', {
			bubbles: true,
			cancelable: true,
			detail: data
		});

		this.element.dispatchEvent(event);
		return this.addDebugData(data);
	}

	/**
	 * Load a tracking pixel with encoded tracking data
	 * @param {Object} data
	 * @returns {Number} Amount of events dispatched
	 */
	dispatchImage (data = {}) {
		const image = new this.window.Image();
		const encodedData = encodeURIComponent(JSON.stringify(data));

		image.src = `https://spoor-api.ft.com/px.gif?data=${encodedData}`;
		return this.addDebugData(data);
	}

	/**
	 * Initalise debug data array
	 * @returns {Array}
	 */
	initDebugData () {
		return this.window.debugTracking = this.window.debugTracking || [];
	}

	/**
	 * Add a new debug message
	 * @param {Object} data
	 * @returns {Number} Number of debug messages
	 */
	addDebugData (data = {}) {
		return this.window.debugTracking.push({ time: new this.window.Date(), data });
	}

	/**
	 * Return all the debug data
	 * @returns {Array}
	 */
	getDebugData () {
		return this.window.debugTracking || [];
	}
};

module.exports = Tracking;
