jest.mock('./form-element');
const PaymentType = require('./payment-type');
const Zuora = require('./zuora');

let fixtures = {
	render: {
		code: 'firstNameRequired',
		key: 'firstName',
		message: 'firstName required',
	},
};

describe('Zuora', () => {
	let window;
	let zuora;

	beforeEach(() => {
		window = {
			Z: {
				prepopulate: jest.fn(),
				runAfterRender: jest.fn(),
				renderWithErrorHandler: jest.fn(),
				sendErrorMessageToHpm: jest.fn(),
				setEventHandler: jest.fn(),
				submit: jest.fn(),
				validate: jest.fn(),
			},
		};
		zuora = new Zuora(window);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('sets up global listeners', () => {
			expect(window.Z.setEventHandler).toHaveBeenNthCalledWith(
				1,
				'blur_mode_enabled',
				expect.anything()
			);
			expect(window.Z.setEventHandler).toHaveBeenNthCalledWith(
				2,
				'blur_mode_disabled',
				expect.anything()
			);
		});

		it('sets up dom elements', () => {
			expect(zuora.iframe).toBeDefined();
			expect(zuora.overlay).toBeDefined();
		});

		it('gets Z from window and adds to class scope', () => {
			expect(zuora.Z).toEqual(window.Z);
		});
	});

	describe('render', () => {
		const params = { foo: 'bar' };
		const prepopulatedFields = { firstName: 'John' };
		const renderCallback = () => {};

		it('calls relevant Zuora functions', async () => {
			await zuora.render({ params, prepopulatedFields, renderCallback });

			expect(window.Z.renderWithErrorHandler).toHaveBeenCalled();
		});

		it('sets up error handler that calls sendErrorMessageToHpm', async () => {
			await zuora.render({ params, prepopulatedFields, renderCallback });
			const handler = window.Z.renderWithErrorHandler.mock.calls[0][3];

			handler();
			expect(window.Z.sendErrorMessageToHpm).toHaveBeenCalled();
		});

		it('sets up error handler that calls sendErrorMessageToHpm with correct error', async () => {
			await zuora.render({ params, prepopulatedFields, renderCallback });
			const handler = window.Z.renderWithErrorHandler.mock.calls[0][3];

			handler(
				fixtures.render.key,
				fixtures.render.code,
				fixtures.render.message
			);
			expect(window.Z.sendErrorMessageToHpm).toHaveBeenCalledWith(
				'firstName',
				'First Name is invalid'
			);
		});

		it('binds the renderCallback to Zuora`s runAfterRender function', async () => {
			await zuora.render({ params, prepopulatedFields, renderCallback });

			expect(window.Z.runAfterRender).toHaveBeenCalled();
		});
	});

	describe('submit', () => {
		it('rejects if paymentType is not valid', async () => {
			let error;
			try {
				await zuora.submit('');
			} catch (e) {
				error = e;
			}

			expect(error instanceof Zuora.ZuoraErrorInvalidPaymentType).toBe(true);
		});

		describe(PaymentType.CREDITCARD, () => {
			it('calls validate', async () => {
				window.Z.validate.mockImplementation((callback) =>
					callback({ success: true })
				);
				await zuora.submit(PaymentType.CREDITCARD);

				expect(window.Z.validate).toHaveBeenCalled();
			});

			it('rejects if the validation fails', async () => {
				let error;
				window.Z.validate.mockImplementation((callback) =>
					callback({ success: false })
				);
				try {
					await zuora.submit(PaymentType.CREDITCARD);
				} catch (e) {
					error = e;
				}

				expect(error instanceof Zuora.ZuoraErrorValidation).toBe(true);
			});

			it('calls submit if validation passes', async () => {
				window.Z.validate.mockImplementation((callback) =>
					callback({ success: true })
				);
				await zuora.submit(PaymentType.CREDITCARD);

				expect(window.Z.submit).toHaveBeenCalled();
			});
		});

		describe(PaymentType.DIRECTDEBIT, () => {
			it('calls validate', async () => {
				zuora.onDirectDebitConfirmation = jest.fn((callback) => callback(true));
				window.Z.validate.mockImplementation((callback) =>
					callback({ success: true })
				);
				await zuora.submit(PaymentType.DIRECTDEBIT);

				expect(window.Z.validate).toHaveBeenCalled();
			});

			it('rejects if the validation fails', async () => {
				let error;
				zuora.onDirectDebitConfirmation = jest.fn((callback) => callback(true));
				window.Z.validate.mockImplementation((callback) =>
					callback({ success: false })
				);
				try {
					await zuora.submit(PaymentType.DIRECTDEBIT);
				} catch (e) {
					error = e;
				}

				expect(error instanceof Zuora.ZuoraErrorValidation).toBe(true);
			});

			it('calls submit if validation passes', async () => {
				zuora.onDirectDebitConfirmation = jest.fn((callback) => callback(true));
				window.Z.validate.mockImplementation((callback) =>
					callback({ success: true })
				);
				await zuora.submit(PaymentType.DIRECTDEBIT);

				expect(window.Z.submit).toHaveBeenCalled();
			});

			it('rejects if the direct debit is not confirmed', async () => {
				let error;
				zuora.onDirectDebitConfirmation = jest.fn((callback) =>
					callback(false)
				);
				window.Z.validate.mockImplementation((callback) =>
					callback({ success: true })
				);
				try {
					await zuora.submit(PaymentType.DIRECTDEBIT);
				} catch (e) {
					error = e;
				}

				expect(error instanceof Zuora.ZuoraErrorMandateCancel).toBe(true);
			});
		});
	});

	describe('onAgreementCheckboxChange', () => {
		let callbackStub;

		beforeEach(() => {
			callbackStub = jest.fn();
		});

		it('sets up agreement checkbox event handlers', () => {
			zuora.onAgreementCheckboxChange(callbackStub);

			// The first 2 calls to this happen in setupListeners
			expect(window.Z.setEventHandler).toHaveBeenNthCalledWith(
				3,
				'agreement_checked',
				expect.any(Function)
			);
			expect(window.Z.setEventHandler).toHaveBeenNthCalledWith(
				4,
				'agreement_unchecked',
				expect.any(Function)
			);
		});
	});

	describe('onDirectDebitConfirmation', () => {
		let callbackStub;

		beforeEach(() => {
			callbackStub = jest.fn();
		});

		it('sets up mandate confirmation event handlers', () => {
			zuora.onDirectDebitConfirmation(callbackStub);

			// The first 2 calls to this happen in setupListeners
			expect(window.Z.setEventHandler).toHaveBeenNthCalledWith(
				3,
				'mandate_confirmed',
				expect.any(Function)
			);
			expect(window.Z.setEventHandler).toHaveBeenNthCalledWith(
				4,
				'mandate_cancelled',
				expect.any(Function)
			);
		});
	});
});
