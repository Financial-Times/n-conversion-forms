const AppBanner = require('../../utils/app-banner');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();

describe('Apple Pay', () => {
	let window;
	let element;
	let iosAction;
	let androidAction;

	beforeEach(() => {
		iosAction = { remove: sandbox.stub() };
		androidAction = { remove: sandbox.stub() };
		element = { querySelector: sandbox.stub() };
		window = {
			document: { querySelector: sandbox.stub().returns(element) },
			navigator: { userAgent: '' },
		};

		element.querySelector
			.withArgs('.ncf__app-banner-action--android')
			.returns(androidAction);
		element.querySelector
			.withArgs('.ncf__app-banner-action--ios')
			.returns(iosAction);
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if window not provided', () => {
			expect(() => {
				new AppBanner();
			}).to.throw();
		});

		it('should throw an error if banner not found', () => {
			window.document.querySelector.returns(false);
			expect(() => {
				new AppBanner(window);
			}).to.throw();
		});

		it("should not remove any actions if the user agent isn't sniffed", () => {
			new AppBanner(window);

			expect(iosAction.remove.called).to.be.false;
			expect(androidAction.remove.called).to.be.false;
		});

		it('should remove ios action if the user agent is android', () => {
			window.navigator.userAgent = 'android';
			new AppBanner(window);

			expect(iosAction.remove.called).to.be.true;
			expect(androidAction.remove.called).to.be.false;
		});

		it('should remove android action if the user agent is ios', () => {
			window.navigator.userAgent = 'iphone';
			new AppBanner(window);

			expect(iosAction.remove.called).to.be.false;
			expect(androidAction.remove.called).to.be.true;
		});
	});
});
