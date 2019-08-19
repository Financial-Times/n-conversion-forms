const Tracking = require('../../utils/tracking');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Tracking', () => {
	let element;
	let window;
	let sandbox;
	let tracking;

	beforeEach(() => {
		element = { dispatchEvent: () => {} };
		window = { CustomEvent: function () {}, Image: function () {}, Date: function () {} };
		tracking = new Tracking(window, element);

		sandbox = sinon.createSandbox();
		sandbox.spy(tracking, 'dispatchCustomEvent');
		sandbox.spy(tracking, 'dispatchImage');
		sandbox.spy(window, 'CustomEvent');
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if window not passed', () => {
			expect(() => {
				new Tracking();
			}).to.throw();
		});

		it('should throw an error if element not passed', () => {
			expect(() => {
				new Tracking(window);
			}).to.throw();
		});
	});

	describe('dispatch', () => {
		describe('parameter validation', () => {
			it('should throw an error if nothing passed', () => {
				expect(() => {
					tracking.dispatch();
				}).to.throw();
			});

			it('should throw an error if action is missing', () => {
				expect(() => {
					tracking.dispatch('test');
				}).to.throw();
			});
		});

		describe('dispatch events', () => {
			it('should call dispatchEvent', () => {
				tracking.dispatch('test', 'test');
				expect(tracking.dispatchCustomEvent.calledOnce).to.be.true;
			});

			it('should fallback to dispatchImage if dispatchEvent errors', () => {
				tracking.dispatchCustomEvent.restore();
				sandbox.stub(tracking, 'dispatchCustomEvent').callsFake(() => {
					throw new Error();
				});
				tracking.dispatch('test', 'test');
				expect(tracking.dispatchImage.calledOnce).to.be.true;
			});
		});

		describe('extra data', () => {
			it('should merge extra tracking data', () => {
				const data = { extra: 'data' };
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent.getCall(0).args[0]).to.include(data);
			});

			it('should not overwrite the given action and test', () => {
				const data = { action: 'bad', category: 'bad' };
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent.getCall(0).args[0]).to.not.include({ action: 'bad', category: 'bad' });
			});
		});

		describe('empty properties', () => {
			const data = {
				testUndefined: undefined,
				testNull: null,
				testEmptyString: '',
				testZero: 0,
				testFalse: false
			};

			it('should not send undefined properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent.getCall(0).args[0]).to.not.include({ testUndefined: undefined });
			});

			it('should not send null properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent.getCall(0).args[0]).to.not.include({ testNull: null });
			});

			it('should not send empty string properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent.getCall(0).args[0]).to.not.include({ testEmptyString: '' });
			});

			it('should send zero properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent.getCall(0).args[0]).to.include({ testZero: 0 });
			});

			it('should send false properties', () => {
				tracking.dispatch('test', 'test', data);
				expect(tracking.dispatchCustomEvent.getCall(0).args[0]).to.include({ testFalse: false });
			});
		});
	});

	describe('dispatchCustomEvent', () => {
		const eventData = { action: 'test', category: 'test' };

		it('should not throw an error', () => {
			expect(() => {
				tracking.dispatchCustomEvent(eventData);
			}).to.not.throw();
		});

		it('should pass event data to the CustomEvent detail parameter', () => {
			tracking.dispatchCustomEvent(eventData);
			expect(window.CustomEvent.getCall(0).args[1].detail).to.equal(eventData);
		});

		it('should write debug data', () => {
			tracking.dispatchCustomEvent(eventData);
			expect(tracking.getDebugData()[0].data).to.include(eventData);
		});
	});

	describe('dispatchImage', () => {
		const eventData = { action: 'test', category: 'test' };

		it('should not throw an error', () => {
			expect(() => {
				tracking.dispatchImage(eventData);
			}).to.not.throw();
		});

		it('should write debug data', () => {
			tracking.dispatchImage(eventData);
			expect(tracking.getDebugData()[0].data).to.include(eventData);
		});
	});
});
