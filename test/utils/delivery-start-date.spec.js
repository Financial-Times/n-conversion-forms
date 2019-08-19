const DeliveryStartDate = require('../../utils/delivery-start-date');
const expect = require('chai').expect;
const fetchMock = require('fetch-mock');
const sinon = require('sinon');

describe('DeliveryStartDate', () => {
	let sandbox = sinon.createSandbox();

	let document;
	let startDateContainer;
	let startDateFieldStub;
	let startDateTextStub;

	beforeEach(() => {
		document = { querySelector: sandbox.stub().returns(false) };

		startDateContainer = { classList: { add: sandbox.stub(), remove: sandbox.stub() } };
		startDateFieldStub = { value: '2019-02-16' };
		startDateTextStub = { innerHTML: 'Saturday 16th of February 2019' };

		document.querySelector.withArgs('#deliveryStartDateField').returns(startDateContainer);
		document.querySelector.withArgs('#deliveryStartDate').returns(startDateFieldStub);
		document.querySelector.withArgs('.js-start-date-text').returns(startDateTextStub);
	});

	afterEach(() => {
		fetchMock.restore();
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if document element isn\'t passed in.', () => {
			expect(() => {
				new DeliveryStartDate();
			}).to.throw();
		});

		it('should throw an error if delivery start date element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => { };
				new DeliveryStartDate(document);
			}).to.throw();
		});
	});

	describe('handleDeliveryStartDateChange', () => {
		let startDateUtil;
		let startDateChangeResult;

		async function setup () {
			fetchMock.mock('/api/path', {
				firstDeliveryDate: '2019-04-13',
				firstDeliveryDateString: 'Saturday 13th of April 2019'
			});
			startDateUtil = new DeliveryStartDate(document);
			startDateChangeResult = await startDateUtil.handleDeliveryStartDateChange('/api/path', () => {
				return { foo: 'bar' };
			});
		};

		afterEach(() => {
			fetchMock.restore();
		});

		it('should only call the api if the field has a value', async () => {
			delete startDateFieldStub.value;
			await setup();
			expect(fetchMock.called()).to.be.false;
		});

		it('should make a call to the api for the start date', async () => {
			await setup();
			expect(fetchMock.called()).to.be.true;
			expect(fetchMock.lastUrl()).to.equal('/api/path');
			expect(fetchMock.lastOptions().body).to.equal(JSON.stringify({
				foo: 'bar',
				startDate: '2019-02-16'
			}));
		});

		it('should update the page according to the response from the API call', async () => {
			await setup();
			expect(startDateFieldStub.value).to.equal('2019-04-13');
			expect(startDateTextStub.innerHTML).to.equal('Saturday 13th of April 2019');
		});

		it('should clear errors and return true if the fetch call succeeds', async () => {
			await setup();
			expect(startDateContainer.classList.remove.calledWith('o-forms--error')).to.be.true;
			expect(startDateChangeResult).to.be.true;
		});

		it('should display an error and return false if the fetch call errors', async () => {
			fetchMock.mock('/api/path', 500);
			startDateUtil = new DeliveryStartDate(document);

			let startDateChangeResult = await startDateUtil.handleDeliveryStartDateChange('/api/path', () => {});

			expect(startDateContainer.classList.add.calledWith('o-forms--error')).to.be.true;
			expect(startDateChangeResult).to.be.false;
		});
	});

});
