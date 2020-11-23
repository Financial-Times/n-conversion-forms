const { expect } = require('chai');
const sandbox = require('sinon').createSandbox();

const BillingPostcode = require('../../utils/billing-postcode');

describe('BillingPostcode', () => {
	let billingPostcode;
	let querySelectorStub;
	let querySelectorAllStub;

	beforeEach(() => {
		const document = {
			querySelector: () => {
				return {
					querySelectorAll: () => {},
					querySelector: () => {},
				};
			},
		};
		billingPostcode = new BillingPostcode(
			document,
			'.ncf #billingPostcodeField'
		);
		querySelectorStub = sandbox.stub(billingPostcode.$el, 'querySelector');
		querySelectorAllStub = sandbox.stub(
			billingPostcode.$el,
			'querySelectorAll'
		);
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should return an element', () => {
		expect(billingPostcode.$el).to.exist;
	});

	describe('changePostcodeReferenceForCountry', () => {
		beforeEach(() => {
			querySelectorStub.returns({ innerHTML: '' });
			querySelectorAllStub.returns([{ innerHTML: '' }, { innerHTML: '' }]);
		});

		context('postcode reference name', () => {
			it('should call querySelector with [data-reference]', () => {
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorAllStub.calledWith('[data-reference=postcode]')).to
					.be.true;
			});

			it('should set postcodeReference to post code by default', () => {
				const expectedResponse = [
					{ innerHTML: 'postcode' },
					{ innerHTML: 'postcode' },
				];
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(billingPostcode.reference).to.eql(expectedResponse);
			});

			it('should set postcodeReference to zip code when country code is USA', () => {
				const expectedResponse = [
					{ innerHTML: 'zip code' },
					{ innerHTML: 'zip code' },
				];
				billingPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(billingPostcode.reference).to.eql(expectedResponse);
			});

			it('should set postcodeReference to postal code when country code is Canada', () => {
				const expectedResponse = [
					{ innerHTML: 'postal code' },
					{ innerHTML: 'postal code' },
				];
				billingPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(billingPostcode.reference).to.eql(expectedResponse);
			});
		});

		context('placeholder', () => {
			it('should call querySelector with span input', () => {
				querySelectorStub.returns({ placeholder: 'Enter your postcode' });
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorStub.calledWith('input')).to.be.true;
			});

			it('should set postcode placeholder to `Enter your postcode` by default', () => {
				querySelectorStub.returns({ placeholder: 'Enter your zip code' });
				billingPostcode.changePostcodeReferenceForCountry = 'GBR';
				expect(billingPostcode.postcodeInput.placeholder).to.equal(
					'Enter your postcode'
				);
			});

			it('should set postcode placeholder to `Enter your zip code` when country code is USA', () => {
				querySelectorStub.returns({ placeholder: 'Enter your postcode' });
				billingPostcode.changePostcodeReferenceForCountry = 'USA';
				expect(billingPostcode.postcodeInput.placeholder).to.equal(
					'Enter your zip code'
				);
			});

			it('should set postcode placeholder to `Enter your postal code` when country code is Canada', () => {
				querySelectorStub.returns({ placeholder: 'Enter your zip code' });
				billingPostcode.changePostcodeReferenceForCountry = 'CAN';
				expect(billingPostcode.postcodeInput.placeholder).to.equal(
					'Enter your postal code'
				);
			});
		});
	});

	describe('getPostcodeReferenceByCountry', () => {
		it('should return post code by default ', () => {
			expect(BillingPostcode.getPostcodeReferenceByCountry('ZAR')).to.equal(
				'postcode'
			);
		});

		it('should return postal code when country is Canada', () => {
			expect(BillingPostcode.getPostcodeReferenceByCountry('CAN')).to.equal(
				'postal code'
			);
		});

		it('should return zip code when country is USA', () => {
			expect(BillingPostcode.getPostcodeReferenceByCountry('USA')).to.equal(
				'zip code'
			);
		});
	});
});
