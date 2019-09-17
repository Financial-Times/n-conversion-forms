const { expect } = require('chai');
const sandbox = require('sinon').createSandbox();

const DeliveryPostcode = require('../../utils/delivery-postcode');

describe('DeliveryPostcode', () => {
	let deliveryPostcode;
	let querySelectorStub;
	let querySelectorAllStub;

	beforeEach(() => {
		const document = {
			querySelector: () => {
				return {
					querySelectorAll: () => {},
					querySelector: () => {}
				};
			}
		};
		deliveryPostcode = new DeliveryPostcode(document, '.ncf #deliveryPostcodeField');
		querySelectorStub = sandbox.stub(deliveryPostcode.$el, 'querySelector');
		querySelectorAllStub = sandbox.stub(deliveryPostcode.$el, 'querySelectorAll');
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should return an element', () => {
		expect(deliveryPostcode.$el).to.exist;
	});

	describe('changePostcodeReferenceForCountry', () => {

		beforeEach(() => {
			querySelectorStub.returns({ innerHTML: '' });
			querySelectorAllStub.returns([{ innerHTML: '' }, { innerHTML: '' }]);
		});

		context('postcode reference name', () => {
			it('should call querySelector with [data-reference]', () => {
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorAllStub.calledWith('[data-reference=postcode]')).to.be.true;
			});

			it('should set postcodeReference to post code by default', () => {
				const expectedResponse = [{ innerHTML: 'postcode' }, { innerHTML: 'postcode' }];
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(deliveryPostcode.reference).to.eql(expectedResponse);
			});

			it('should set postcodeReference to zip code when country code is USA', () => {
				const expectedResponse = [{ innerHTML: 'zip code' }, { innerHTML: 'zip code' }];
				deliveryPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(deliveryPostcode.reference).to.eql(expectedResponse);
			});

			it('should set postcodeReference to postal code when country code is Canada', () => {
				const expectedResponse = [{ innerHTML: 'postal code' }, { innerHTML: 'postal code' }];
				deliveryPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(deliveryPostcode.reference).to.eql(expectedResponse);
			});
		});

		context('placeholder', () => {
			it('should call querySelector with span input', () => {
				querySelectorStub.returns({ placeholder: 'Enter your postcode' });
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorStub.calledWith('input')).to.be.true;
			});

			it('should set postcode placeholder to `Enter your postcode` by default', () => {
				querySelectorStub.returns({ placeholder: 'Enter your zip code' });
				deliveryPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(deliveryPostcode.postcodeInput.placeholder).to.equal('Enter your postcode');
			});

			it('should set postcode placeholder to `Enter your zip code` when country code is USA', () => {
				querySelectorStub.returns({ placeholder: 'Enter your postcode' });
				deliveryPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(deliveryPostcode.postcodeInput.placeholder).to.equal('Enter your zip code');
			});

			it('should set postcode placeholder to `Enter your postal code` when country code is Canada', () => {
				querySelectorStub.returns({ placeholder: 'Enter your zip code' });
				deliveryPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(deliveryPostcode.postcodeInput.placeholder).to.equal('Enter your postal code');
			});
		});
	});

	describe('getPostcodeReferenceByCountry', () => {
		it('should return post code by default ', () => {
			expect(DeliveryPostcode.getPostcodeReferenceByCountry('ZAR')).to.equal('postcode');
		});

		it('should return postal code when country is Canada', () => {
			expect(DeliveryPostcode.getPostcodeReferenceByCountry('CAN')).to.equal('postal code');
		});

		it('should return zip code when country is USA', () => {
			expect(DeliveryPostcode.getPostcodeReferenceByCountry('USA')).to.equal('zip code');
		});
	});
});
