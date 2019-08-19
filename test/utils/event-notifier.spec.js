const { expect } = require('chai');
const sinon = require('sinon');

const EventNotifier = require('../../utils/event-notifier');

describe('Event Notifier', () => {

	const defaults = {
		event: 'focusin',
		buffer: 50,
		emitProperty: 'height',
		watchedProperty: 'clientHeight'
	};
	let sandbox;
	let mockElement;
	let alternativeWindow;

	beforeEach(() => {
		sandbox = sinon.createSandbox();
		mockElement = {
			clientWidth: 100,
			clientHeight: 25,
			addEventListener: sandbox.stub()
		};
		global.parent = {
			postMessage: sandbox.stub()
		};
		alternativeWindow = {
			postMessage: sandbox.stub()
		};
	});

	afterEach(() => {
		sandbox.restore();
		delete global.parent;
	});

	it('should not do anything if element not provided', () => {
		EventNotifier.init();
		expect(parent.postMessage.called).to.equal(false);
		expect(mockElement.addEventListener.called).to.equal(false);
	});

	it('should not do anything if element not valid', () => {
		EventNotifier.init(null);
		expect(parent.postMessage.called).to.equal(false);
		expect(mockElement.addEventListener.called).to.equal(false);
	});

	it('should attach an event listener of the default event to the provided element', () => {
		EventNotifier.init(mockElement);
		expect(mockElement.addEventListener.calledOnce).to.equal(true);
		expect(mockElement.addEventListener.calledWith(defaults.event)).to.equal(true);
	});

	it('should attach an event listener of custom event if one provided', () => {
		const customEvent = 'something';
		EventNotifier.init(mockElement, { event: customEvent });
		expect(mockElement.addEventListener.calledOnce).to.equal(true);
		expect(mockElement.addEventListener.calledWith(customEvent)).to.equal(true);
	});

	it('should immediately postMessage if "notifyOnStart" is true', () => {
		EventNotifier.init(mockElement, { notifyOnStart: true });
		expect(parent.postMessage.calledOnce).to.equal(true);
	});

	it('should not immediately postMessage if "notifyOnStart" is false', () => {
		EventNotifier.init(mockElement, { notifyOnStart: false });
		expect(parent.postMessage.calledOnce).to.equal(false);
	});

	it('should postMessage when the event listener is triggered', () => {
		mockElement.addEventListener.yields();
		EventNotifier.init(mockElement);
		expect(parent.postMessage.calledTwice).to.equal(true);
	});

	it('should postMessage when the event listener is triggered even if notifyOnStart is false', () => {
		mockElement.addEventListener.yields();
		EventNotifier.init(mockElement, { notifyOnStart: false });
		expect(parent.postMessage.calledOnce).to.equal(true);
	});

	it('should postMessage with the element clientHeight + default buffer value as the message height property by default', () => {
		const expectedPayload = JSON.stringify({ [defaults.emitProperty]: mockElement[defaults.watchedProperty] + defaults.buffer });
		EventNotifier.init(mockElement, { notifyOnStart: true });
		expect(parent.postMessage.calledWith(expectedPayload, '*')).to.equal(true);
	});

	it('can override emitted, watched and buffer properties', () => {
		const expectedPayload = JSON.stringify({ width: mockElement.clientWidth + 10 });
		EventNotifier.init(mockElement, { emitProperty: 'width', watchedProperty: 'clientWidth', buffer: 10 });
		expect(parent.postMessage.calledWith(expectedPayload, '*')).to.equal(true);
	});

	it('can take an alternative window to notify', () => {
		EventNotifier.init(mockElement, { targetWindow: alternativeWindow });
		expect(alternativeWindow.postMessage.calledOnce).to.equal(true);
		expect(parent.postMessage.called).to.equal(false);
	});

});
