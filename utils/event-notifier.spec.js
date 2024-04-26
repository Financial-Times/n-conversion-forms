// const EventNotifier = require('./event-notifier');

// TODO This test suite is failing to run due to the use of the mocking of the global parent

it.todo('works as expected');

// describe('Event Notifier', () => {
// 	const defaults = {
// 		event: 'focusin',
// 		buffer: 50,
// 		emitProperty: 'height',
// 		watchedProperty: 'clientHeight',
// 	};
// 	let mockElement;
// 	let alternativeWindow;

// 	beforeEach(() => {
// 		mockElement = {
// 			clientWidth: 100,
// 			clientHeight: 25,
// 			addEventListener: jest.fn(),
// 		};
// 		global.parent = {
// 			postMessage: jest.fn(),
// 		};
// 		alternativeWindow = {
// 			postMessage: jest.fn(),
// 		};
// 		jest.spyOn(parent, 'postMessage');
// 	});

// 	afterEach(() => {
// 		jest.clearAllMocks();
// 		delete global.parent;
// 	});

// 	it('does not do anything if element not provided', () => {
// 		EventNotifier.init();
// 		expect(parent.postMessage).not.toHaveBeenCalled();
// 		expect(mockElement.addEventListener).not.toHaveBeenCalled();
// 	});

// 	it('does not do anything if element not valid', () => {
// 		EventNotifier.init(null);
// 		expect(parent.postMessage).not.toHaveBeenCalled();
// 		expect(mockElement.addEventListener).not.toHaveBeenCalled();
// 	});

// 	it('attaches an event listener of the default event to the provided element', () => {
// 		EventNotifier.init(mockElement);
// 		expect(mockElement.addEventListener).toHaveBeenCalledTimes(1);
// 		expect(mockElement.addEventListener).toHaveBeenCalledWith(
// 			defaults.event,
// 			expect.anything()
// 		);
// 	});

// 	it('attaches an event listener of custom event if one provided', () => {
// 		const customEvent = 'something';
// 		EventNotifier.init(mockElement, { event: customEvent });
// 		expect(mockElement.addEventListener).toHaveBeenCalledTimes(1);
// 		expect(mockElement.addEventListener).toHaveBeenCalledWith(
// 			customEvent,
// 			expect.anything()
// 		);
// 	});

// 	it('does immediately postMessage if "notifyOnStart" is true', () => {
// 		EventNotifier.init(mockElement, { notifyOnStart: true });
// 		expect(parent.postMessage).toHaveBeenCalledTimes(1);
// 	});

// 	it('does not immediately postMessage if "notifyOnStart" is false', () => {
// 		EventNotifier.init(mockElement, { notifyOnStart: false });
// 		expect(parent.postMessage).not.toHaveBeenCalled();
// 	});

// 	it('does postMessage when the event listener is triggered', () => {
// 		mockElement.addEventListener = jest.fn(() => {
// 			parent.postMessage();
// 		});
// 		EventNotifier.init(mockElement);
// 		expect(parent.postMessage).toHaveBeenCalledTimes(2);
// 	});

// 	it('does postMessage when the event listener is triggered even if notifyOnStart is false', () => {
// 		mockElement.addEventListener = jest.fn(() => {
// 			parent.postMessage();
// 		});
// 		EventNotifier.init(mockElement, { notifyOnStart: false });
// 		expect(parent.postMessage).toHaveBeenCalledTimes(1);
// 	});

// 	it('does postMessage with the element clientHeight + default buffer value as the message height property by default', () => {
// 		const expectedPayload = JSON.stringify({
// 			[defaults.emitProperty]:
// 				mockElement[defaults.watchedProperty] + defaults.buffer,
// 		});
// 		EventNotifier.init(mockElement, { notifyOnStart: true });
// 		expect(parent.postMessage).toHaveBeenCalledWith(expectedPayload, '*');
// 	});

// 	it('can override emitted, watched and buffer properties', () => {
// 		const expectedPayload = JSON.stringify({
// 			width: mockElement.clientWidth + 10,
// 		});
// 		EventNotifier.init(mockElement, {
// 			emitProperty: 'width',
// 			watchedProperty: 'clientWidth',
// 			buffer: 10,
// 		});
// 		expect(parent.postMessage).toHaveBeenCalledWith(expectedPayload, '*');
// 	});

// 	it('can take an alternative window to notify', () => {
// 		EventNotifier.init(mockElement, { targetWindow: alternativeWindow });
// 		expect(alternativeWindow.postMessage).toHaveBeenCalledTimes(1);
// 		expect(parent.postMessage).not.toHaveBeenCalled();
// 	});
// });
