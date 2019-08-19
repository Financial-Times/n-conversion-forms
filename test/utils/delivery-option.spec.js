const DeliveryOption = require('../../utils/delivery-option');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('DeliveryOption', () => {
	let sandbox = sinon.createSandbox();

	let document;
	let formStub;
	let deliveryOption1Listener;
	let deliveryOption2Listener;

	beforeEach(() => {
		document = { querySelector: sandbox.stub().returns(false) };
		deliveryOption1Listener = sandbox.stub();
		deliveryOption2Listener = sandbox.stub();

		formStub = {
			deliveryOption: [
				{ addEventListener: deliveryOption1Listener },
				{ addEventListener: deliveryOption2Listener }
			]
		};

		document.querySelector.withArgs('form.ncf').returns(formStub);
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
				document.querySelector = () => { };
				new DeliveryOption(document);
			}).to.throw();
		});
	});

	describe('handleDeliveryOptionChange', () => {
		it('binds the given callback to the change event on the delivery option fields', async () => {
			let deliveryOptionUtil = new DeliveryOption(document);
			let callback = sinon.stub();
			deliveryOptionUtil.handleDeliveryOptionChange(callback);

			expect(deliveryOption1Listener.calledWith('change', callback)).to.be.true;
			expect(deliveryOption2Listener.calledWith('change', callback)).to.be.true;
		});
	});

});
