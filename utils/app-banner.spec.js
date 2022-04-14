const AppBanner = require('./app-banner');

describe('Apple Pay', () => {
	let window;
	let element;
	let iosAction;
	let androidAction;

	beforeEach(() => {
		iosAction = { remove: jest.fn() };
		androidAction = { remove: jest.fn() };
		const classNameMap = {
			'.ncf__app-banner-action--android': androidAction,
			'.ncf__app-banner-action--ios': iosAction,
		};
		element = {
			querySelector: jest.fn((className) => {
				return classNameMap[className];
			}),
		};
		window = {
			document: { querySelector: jest.fn(() => element) },
			navigator: { userAgent: '' },
		};
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if window not provided', () => {
			expect(() => {
				new AppBanner();
			}).toThrow();
		});

		it('throws an error if banner not found', () => {
			window.document.querySelector = jest.fn(() => false);
			expect(() => {
				new AppBanner(window);
			}).toThrow();
		});

		it('does not remove any actions if the user agent is not sniffed', () => {
			new AppBanner(window);

			expect(iosAction.remove).not.toHaveBeenCalled();
			expect(androidAction.remove).not.toHaveBeenCalled();
		});

		it('removes ios action if the user agent is android', () => {
			window.navigator.userAgent = 'android';
			new AppBanner(window);

			expect(iosAction.remove).toHaveBeenCalled();
			expect(androidAction.remove).not.toHaveBeenCalled();
		});

		it('removes android action if the user agent is ios', () => {
			window.navigator.userAgent = 'iphone';
			new AppBanner(window);

			expect(iosAction.remove).not.toHaveBeenCalled();
			expect(androidAction.remove).toHaveBeenCalled();
		});
	});
});
