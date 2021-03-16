const DeliveryOption = require('../../utils/delivery-option');
const expect = require('chai').expect;
const sinon = require('sinon');
const { JSDOM } = require('jsdom');

describe('DeliveryOption', () => {
	let sandbox = sinon.createSandbox();
	let document;

	beforeEach(() => {
		document = { querySelector: sandbox.stub().returns(false) };
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if document element isn\'t passed in.', () => {
			expect(() => {
				new DeliveryOption();
			}).to.throw();
		});

		it('should throw an error if delivery option element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => {};
				new DeliveryOption(document);
			}).to.throw();
		});
	});

	describe('handleDeliveryOptionChange', () => {
		describe('can handle an array', () => {
			let deliveryOption1Listener;
			let deliveryOption2Listener;

			beforeEach(() => {
				deliveryOption1Listener = sandbox.stub();
				deliveryOption2Listener = sandbox.stub();

				const formStub = {
					elements: {
						deliveryOption: [
							{ addEventListener: deliveryOption1Listener },
							{ addEventListener: deliveryOption2Listener },
						],
					}
				};

				document.querySelector.withArgs('form.ncf').returns(formStub);
			});

			afterEach(() => {
				sandbox.restore();
			});

			it('binds the given callback to the change event on the delivery option fields', async () => {
				let deliveryOptionUtil = new DeliveryOption(document);
				let callback = sinon.stub();
				deliveryOptionUtil.handleDeliveryOptionChange(callback);

				expect(deliveryOption1Listener.calledWith('change', callback)).to.be
					.true;
				expect(deliveryOption2Listener.calledWith('change', callback)).to.be
					.true;
			});
		});

		describe('can handle a single node element', () => {
			let deliveryOptionUtil;
			let callback;
			let deliveryOptionListener;

			beforeEach(() => {
				const dom = new JSDOM();
				const formElement = dom.window.document.createElement(
					'HTMLInputElement'
				);

				deliveryOptionListener = sandbox.stub();
				formElement.addEventListener = deliveryOptionListener;

				const altFormStub = {
					elements: { deliveryOption: formElement },
				};

				document.querySelector.withArgs('form.ncf').returns(altFormStub);

				deliveryOptionUtil = new DeliveryOption(document);
				callback = sinon.stub();
			});

			afterEach(() => {
				sandbox.restore();
			});

			it('can handle having only one form element', () => {
				expect(() => {
					deliveryOptionUtil.handleDeliveryOptionChange(callback);
				}).to.not.throw();
			});

			it('adds the event listener', () => {
				deliveryOptionUtil.handleDeliveryOptionChange(callback);
				expect(deliveryOptionListener.calledWith('change', callback)).to.be
					.true;
			});
		});
	});
});
