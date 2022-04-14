const Tracking = require('./tracking');

describe('Tracking', () => {
	let element;
	let window;
	let tracking;

	beforeEach(() => {
		element = { dispatchEvent: () => {} };
		window = {
			CustomEvent: function () {},
			Image: function () {},
			Date: function () {},
		};
		tracking = new Tracking(window, element);

		jest.spyOn(tracking, 'dispatchCustomEvent');
		jest.spyOn(tracking, 'dispatchImage');
		jest.spyOn(window, 'CustomEvent');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if window not passed', () => {
			expect(() => {
				new Tracking();
			}).toThrow();
		});

		it('throws an error if element not passed', () => {
			expect(() => {
				new Tracking(window);
			}).toThrow();
		});
	});

	describe('dispatch', () => {
		describe('parameter validation', () => {
			it('throws an error if nothing passed', () => {
				expect(() => {
					tracking.dispatch();
				}).toThrow();
			});

			it('throws an error if action is missing', () => {
				expect(() => {
					tracking.dispatch('test');
				}).toThrow();
			});
		});

		describe('dispatch events', () => {
			it('calls dispatchEvent', () => {
				tracking.dispatch('test', 'test');
				expect(tracking.dispatchCustomEvent).toHaveBeenCalled();
			});

			it('fallbacks to dispatchImage if dispatchEvent errors', () => {
				tracking.dispatchCustomEvent.mockRestore();
				tracking.dispatchCustomEvent = jest.fn().mockImplementation(() => {
					throw new Error();
				});
				tracking.dispatch('test', 'test');
				expect(tracking.dispatchImage).toHaveBeenCalled();
			});
		});

		describe('extra data', () => {
			it('merges extra tracking data', () => {
				const data = { extra: 'data' };
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent).toHaveBeenCalledWith(
					expect.objectContaining(data)
				);
			});

			it('does not overwrite the given action and test', () => {
				const data = { action: 'bad', category: 'bad' };
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent).not.toHaveBeenCalledWith({
					action: 'bad',
					category: 'bad',
				});
			});
		});

		describe('empty properties', () => {
			const data = {
				testUndefined: undefined,
				testNull: null,
				testEmptyString: '',
				testZero: 0,
				testFalse: false,
			};

			it('does not send undefined properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent).toHaveBeenCalledWith(
					expect.not.objectContaining({ testUndefined: undefined })
				);
			});

			it('does not send null properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent).toHaveBeenCalledWith(
					expect.not.objectContaining({ testNull: null })
				);
			});

			it('does not send empty string properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent).toHaveBeenCalledWith(
					expect.not.objectContaining({ testEmptyString: '' })
				);
			});

			it('sends zero properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent).toHaveBeenCalledWith(
					expect.objectContaining({ testZero: 0 })
				);
			});

			it('sends false properties', () => {
				tracking.dispatch('test', 'test', data);

				expect(tracking.dispatchCustomEvent).toHaveBeenCalledWith(
					expect.objectContaining({ testFalse: false })
				);
			});
		});
	});

	describe('dispatchCustomEvent', () => {
		const eventData = { action: 'test', category: 'test' };

		it('does not throw an error', () => {
			expect(() => {
				tracking.dispatchCustomEvent(eventData);
			}).not.toThrow();
		});

		it('passes event data to the CustomEvent detail parameter', () => {
			tracking.dispatchCustomEvent(eventData);
			expect(window.CustomEvent).toHaveBeenCalledWith(
				expect.anything(),
				expect.objectContaining({ detail: eventData })
			);
		});

		it('writes debug data', () => {
			tracking.dispatchCustomEvent(eventData);
			expect(tracking.getDebugData()[0].data).toMatchObject(eventData);
		});
	});

	describe('dispatchImage', () => {
		const eventData = { action: 'test', category: 'test' };

		it('does not throw an error', () => {
			expect(() => {
				tracking.dispatchImage(eventData);
			}).not.toThrow();
		});

		it('writes debug data', () => {
			tracking.dispatchImage(eventData);
			expect(tracking.getDebugData()[0].data).toMatchObject(eventData);
		});
	});
});
