jest.mock('fetchres');
const fetchres = require('fetchres');
const DeliveryStartDate = require('./delivery-start-date');

describe('DeliveryStartDate', () => {
	let document;
	let startDateContainer;
	let startDateFieldStub;
	let startDateTextStub;
	let dateTestInput;
	let csrfFieldElement;

	beforeEach(() => {
		fetchres.json = jest.fn((response) => response.json());
		global.fetch = jest.fn(() =>
			Promise.resolve({
				status: 200,
			})
		);

		dateTestInput = {
			setAttribute: jest.fn(),
		};
		startDateContainer = {
			classList: { add: jest.fn(), remove: jest.fn() },
		};
		startDateFieldStub = {
			value: '2019-02-16',
			setAttribute: jest.fn(),
			removeAttribute: jest.fn(),
		};
		startDateTextStub = { innerHTML: 'Saturday 16th of February 2019' };
		csrfFieldElement = { value: '1234567890' };

		document = {
			querySelector: jest.fn((elementIdentifier) => {
				const classMapping = {
					'#deliveryStartDateField .o-forms-input': startDateContainer,
					'#deliveryStartDate': startDateFieldStub,
					'.js-start-date-text': startDateTextStub,
					'.ncf #csrfToken': csrfFieldElement,
				};

				return classMapping[elementIdentifier] || false;
			}),
			createElement: jest.fn((elementType) => {
				return elementType === 'input' ? dateTestInput : false;
			}),
		};
	});

	afterEach(() => {
		fetch.mockClear();
		jest.clearAllMocks();
	});

	describe('constructor', () => {
		it('throws an error if document element is not passed in', () => {
			expect(() => {
				new DeliveryStartDate();
			}).toThrow();
		});

		it('throws an error if delivery start date element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => {};
				new DeliveryStartDate(document);
			}).toThrow();
		});
	});

	describe('handleDeliveryStartDateChange', () => {
		let startDateUtil;
		let startDateChangeResult;

		async function setup() {
			global.fetch = jest.fn(() =>
				Promise.resolve({
					json: () =>
						Promise.resolve({
							firstDeliveryDate: '2019-04-13',
							firstDeliveryDateString: 'Saturday 13th of April 2019',
						}),
				})
			);

			startDateUtil = new DeliveryStartDate(document);
			startDateChangeResult = await startDateUtil.handleDeliveryStartDateChange(
				'/api/path',
				() => {
					return { foo: 'bar' };
				}
			);
		}

		it('does only call the api if the field has a value', async () => {
			delete startDateFieldStub.value;
			await setup();
			expect(fetch).not.toHaveBeenCalled();
		});

		it('makes a call to the api for the start date', async () => {
			await setup();
			expect(fetch).toHaveBeenCalled();
			expect(fetch).toHaveBeenCalledWith(
				'/api/path',
				expect.objectContaining({
					method: 'POST',
					credentials: 'include',
					headers: {
						'CSRF-Token': '1234567890',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						foo: 'bar',
						startDate: '2019-02-16',
					}),
				})
			);
		});

		it('updates the page according to the response from the API call', async () => {
			await setup();
			expect(startDateFieldStub.value).toBe('2019-04-13');
			expect(startDateTextStub.innerHTML).toBe('Saturday 13th of April 2019');
		});

		it('clears errors and return true if the fetch call succeeds', async () => {
			await setup();
			expect(startDateContainer.classList.remove).toHaveBeenCalledWith(
				'o-forms-input--invalid'
			);
			expect(startDateChangeResult).toBe(true);
		});

		it('displays an error and return false if the fetch call errors', async () => {
			const fetchError = new Error('API is down');
			global.fetch = jest.fn(() => Promise.reject(fetchError));
			startDateUtil = new DeliveryStartDate(document);

			let startDateChangeResult =
				await startDateUtil.handleDeliveryStartDateChange(
					'/api/path',
					() => {}
				);

			expect(startDateContainer.classList.add).toHaveBeenCalledWith(
				'o-forms-input--invalid'
			);
			expect(startDateChangeResult).toBe(false);
		});
	});

	describe('enable', () => {
		it('enables the start date field', () => {
			let startDateUtil = new DeliveryStartDate(document);
			startDateUtil.enable();

			expect(startDateFieldStub.removeAttribute).toHaveBeenCalledWith(
				'disabled'
			);
		});
	});

	describe('disable', () => {
		it('disables the start date field', () => {
			let startDateUtil = new DeliveryStartDate(document);
			startDateUtil.disable();

			expect(startDateFieldStub.setAttribute).toHaveBeenCalledWith(
				'disabled',
				'true'
			);
		});
	});
});
