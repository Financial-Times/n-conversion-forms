
/**
 * Emits details (via postMessage) on a given element
 * Primary Usecase: Allowing forms embedded in iframes to notify the parent frame of form height changes.
 */

module.exports = {
	init: (watchedElement, { event = 'focusin', buffer = 50, emitProperty = 'height', watchedProperty = 'clientHeight', notifyOnStart = true, targetWindow = parent } = {}) => {

		if (watchedElement) {
			// Notify immediately
			notifyOnStart && notifier({ [emitProperty]: watchedElement[watchedProperty] + buffer }, targetWindow);
			// Add listener for given event to notify when required
			watchedElement.addEventListener(event, () => {
				notifier({ [emitProperty]: watchedElement[watchedProperty] + buffer }, targetWindow);
			});
		}

		return {
			notify: () => {
				if (!watchedElement) return;

				return notifier({ [emitProperty]: watchedElement[watchedProperty] + buffer }, targetWindow);
			}
		};

	}
};

function notifier (payload, windowObject) {
	windowObject.postMessage(JSON.stringify(payload), '*');
}
