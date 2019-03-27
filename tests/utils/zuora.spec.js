const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const PaymentType = require('../../utils/payment-type');

let FormElementStub = sinon.stub();
const Zuora = proxyquire('../../utils/zuora', {
	'./form-element': FormElementStub
});

let fixtures = {
	render: {
		code: 'firstNameRequired',
		key: 'firstName',
		message: 'firstName required'
	}
};

describe('Zuora', () => {
	let window;
	let sandbox;
	let zuora;

	beforeEach(() => {
		window = {
			Z: {
				prepopulate: sinon.stub(),
				renderWithErrorHandler: sinon.stub(),
				sendErrorMessageToHpm: sinon.stub(),
				setEventHandler: sinon.stub(),
				submit: sinon.stub(),
				validate: sinon.stub()
			}
		};
		zuora = new Zuora(window);
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		sandbox.restore();
	});

	context('constructor', () => {
		it('Sets up global listeners', () => {
			expect(window.Z.setEventHandler.getCall(0).args[0]).to.equal('blur_mode_enabled');
			expect(window.Z.setEventHandler.getCall(1).args[0]).to.equal('blur_mode_disabled');
		});

		it('gets Z from window and adds to class scope', () => {
			expect(zuora.Z).to.equal(window.Z);
		});
	});

	context('render', () => {
		const params = { foo: 'bar' };
		const prepopulatedFields = { firstName: 'John' };
		const hostedPaymentPageCallback = () => { };

		it('calls relevant Zuora functions', async () => {
			await zuora.render({ params, prepopulatedFields, hostedPaymentPageCallback });

			expect(window.Z.renderWithErrorHandler.called).to.be.true;
		});

		it('sets up error handler that calls sendErrorMessageToHpm', async () => {
			await zuora.render({ params, prepopulatedFields, hostedPaymentPageCallback });
			const handler = window.Z.renderWithErrorHandler.getCall(0).args[3];

			handler();
			expect(window.Z.sendErrorMessageToHpm.called).to.be.true;
		});

		it('sets up error handler that calls sendErrorMessageToHpm with correct error', async () => {
			await zuora.render({ params, prepopulatedFields, hostedPaymentPageCallback });
			const handler = window.Z.renderWithErrorHandler.getCall(0).args[3];

			handler(fixtures.render.key, fixtures.render.code, fixtures.render.message);
			expect(window.Z.sendErrorMessageToHpm.getCall(0).args).to.deep.equal(['firstName', 'First Name is invalid']);
		});
	});

	context('submit', () => {
		it('rejects if paymentType is not valid', async () => {
			let error;
			try {
				await zuora.submit('');
			} catch (e) {
				error = e;
			}

			expect(error instanceof Zuora.ZuoraErrorInvalidPaymentType).to.be.true;
		});

		context(PaymentType.CREDITCARD, () => {
			it('should call validate', async () => {
				window.Z.validate.callsFake(callback => callback({success: true}));
				await zuora.submit(PaymentType.CREDITCARD);

				expect(window.Z.validate.called).to.be.true;
			});

			it('should reject if the validation fails', async () => {
				let error;
				window.Z.validate.callsFake(callback => callback({success: false}));
				try {
					await zuora.submit(PaymentType.CREDITCARD);
				} catch (e) {
					error = e;
				}

				expect(error instanceof Zuora.ZuoraErrorValidation).to.be.true;
			});

			it('should call submit if validation passes', async () => {
				window.Z.validate.callsFake(callback => callback({success: true}));
				await zuora.submit(PaymentType.CREDITCARD);

				expect(window.Z.submit.called).to.be.true;
			});
		});

		context(PaymentType.DIRECTDEBIT, () => {
			it('should call validate', async () => {
				zuora.onDirectDebitConfirmation = sandbox.stub().callsFake(callback => callback(true));
				window.Z.validate.callsFake(callback => callback({success: true}));
				await zuora.submit(PaymentType.DIRECTDEBIT);

				expect(window.Z.validate.called).to.be.true;
			});

			it('should reject if the validation fails', async () => {
				let error;
				zuora.onDirectDebitConfirmation = sandbox.stub().callsFake(callback => callback(true));
				window.Z.validate.callsFake(callback => callback({success: false}));
				try {
					await zuora.submit(PaymentType.DIRECTDEBIT);
				} catch (e) {
					error = e;
				}

				expect(error instanceof Zuora.ZuoraErrorValidation).to.be.true;
			});

			it('should call submit if validation passes', async () => {
				zuora.onDirectDebitConfirmation = sandbox.stub().callsFake(callback => callback(true));
				window.Z.validate.callsFake(callback => callback({success: true}));
				await zuora.submit(PaymentType.DIRECTDEBIT);

				expect(window.Z.submit.called).to.be.true;
			});

			it('should reject if the direct debit is not confirmed', async () => {
				let error;
				zuora.onDirectDebitConfirmation = sandbox.stub().callsFake(callback => callback(false));
				window.Z.validate.callsFake(callback => callback({success: true}));
				try {
					await zuora.submit(PaymentType.DIRECTDEBIT);
				} catch (e) {
					error = e;
				}

				expect(error instanceof Zuora.ZuoraErrorMandateCancel).to.be.true;
			});
		});
	});

	context('onAgreementCheckboxChange', () => {
		let callbackStub;

		beforeEach(() => {
			callbackStub = sandbox.stub();
		});

		it('sets up agreement checkbox event handlers', () => {
			window.Z.setEventHandler.callsArg(1);

			zuora.onAgreementCheckboxChange(callbackStub);

			// The first 2 calls to this happen in setupListeners
			expect(window.Z.setEventHandler.getCall(2).args[0]).to.equal('agreement_checked');
			expect(window.Z.setEventHandler.getCall(3).args[0]).to.equal('agreement_unchecked');
		});

		it('passes the appropriate data to the callback when checked', () => {
			window.Z.setEventHandler.withArgs('agreement_checked').callsArg(1);

			zuora.onAgreementCheckboxChange(callbackStub);

			expect(callbackStub.getCall(0).args[0]).to.be.true;
		});

		it('passes the appropriate data to the callback when unchecked', async () => {
			window.Z.setEventHandler.withArgs('agreement_unchecked').callsArg(1);

			zuora.onAgreementCheckboxChange(callbackStub);

			expect(callbackStub.getCall(0).args[0]).to.be.false;
		});
	});

	context('onDirectDebitConfirmation', () => {
		let callbackStub;

		beforeEach(() => {
			callbackStub = sandbox.stub();
		});

		it('sets up mandate confirmation event handlers', () => {
			window.Z.setEventHandler.callsArg(1);
			zuora.onDirectDebitConfirmation(callbackStub);

			// The first 2 calls to this happen in setupListeners
			expect(window.Z.setEventHandler.getCall(2).args[0]).to.equal('mandate_confirmed');
			expect(window.Z.setEventHandler.getCall(3).args[0]).to.equal('mandate_cancelled');
		});

		it('passes the appropriate data to the callback when confirmed', () => {
			window.Z.setEventHandler.withArgs('mandate_confirmed').callsArg(1);

			zuora.onDirectDebitConfirmation(callbackStub);

			expect(callbackStub.getCall(0).args[0]).to.be.true;
		});

		it('passes the appropriate data to the callback when cancelled', () => {
			window.Z.setEventHandler.withArgs('mandate_cancelled').callsArg(1);

			zuora.onDirectDebitConfirmation(callbackStub);

			expect(callbackStub.getCall(0).args[0]).to.be.false;
		});
	});
});
