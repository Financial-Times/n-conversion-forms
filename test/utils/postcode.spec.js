const { expect } = require('chai');
const sinon = require('sinon');
const sandbox = sinon.createSandbox();

const Postcode = require('../../utils/postcode');

describe('postcode', () => {
	let postcode;
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
		postcode = new Postcode(document);
		querySelectorStub = sandbox.stub(postcode.$el, 'querySelector');
		querySelectorAllStub = sandbox.stub(postcode.$el, 'querySelectorAll');
	});

	afterEach(() => {
		sandbox.restore();
	});

	it('should return an element', () => {
		expect(postcode.$el).to.exist;
	});

	describe('getPostcodeReferenceByCountry', () => {
		it('return postcode by default', () => {
			expect(Postcode.getPostcodeReferenceByCountry('GBR')).to.equal(
				'postcode'
			);
		});

		it('return zip code when country code is USA', () => {
			expect(Postcode.getPostcodeReferenceByCountry('USA')).to.equal(
				'zip code'
			);
		});

		it('return postal when country code is CAN', () => {
			expect(Postcode.getPostcodeReferenceByCountry('CAN')).to.equal(
				'postal code'
			);
		});
	});

	describe('changePostcodeReferenceForCountry', () => {
		beforeEach(() => {
			querySelectorStub.returns({ innerHTML: '' });
			querySelectorAllStub.returns([{ innerHTML: '' }, { innerHTML: '' }]);
		});

		context('postcode reference name', () => {
			it('should call querySelector with [data-reference]', () => {
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorAllStub.calledWith('[data-reference=postcode]')).to
					.be.true;
			});

			it('should set postcodeReference to post code by default', () => {
				const expectedResponse = [
					{ innerHTML: 'postcode' },
					{ innerHTML: 'postcode' },
				];
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(postcode.reference).to.eql(expectedResponse);
			});

			it('should set postcodeReference to zip code when country code is USA', () => {
				const expectedResponse = [
					{ innerHTML: 'zip code' },
					{ innerHTML: 'zip code' },
				];
				postcode.changePostcodeReferenceForCountry = 'USA';
				expect(postcode.reference).to.eql(expectedResponse);
			});

			it('should set postcodeReference to postal code when country code is Canada', () => {
				const expectedResponse = [
					{ innerHTML: 'postal code' },
					{ innerHTML: 'postal code' },
				];
				postcode.changePostcodeReferenceForCountry = 'CAN';
				expect(postcode.reference).to.eql(expectedResponse);
			});
		});

		context('placeholder', () => {
			it('should call querySelector with span input', () => {
				querySelectorStub.returns({ placeholder: 'Enter your postcode' });
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(querySelectorStub.calledWith('input')).to.be.true;
			});

			it('should set postcode placeholder to `Enter your postcode` by default', () => {
				querySelectorStub.returns({ placeholder: 'Enter your zip code' });
				postcode.changePostcodeReferenceForCountry = 'GBR';
				expect(postcode.postcodeInput.placeholder).to.equal(
					'Enter your postcode'
				);
			});

			it('should set postcode placeholder to `Enter your zip code` when country code is USA', () => {
				querySelectorStub.returns({ placeholder: 'Enter your postcode' });
				postcode.changePostcodeReferenceForCountry = 'USA';
				expect(postcode.postcodeInput.placeholder).to.equal(
					'Enter your zip code'
				);
			});

			it('should set postcode placeholder to `Enter your postal code` when country code is Canada', () => {
				querySelectorStub.returns({ placeholder: 'Enter your zip code' });
				postcode.changePostcodeReferenceForCountry = 'CAN';
				expect(postcode.postcodeInput.placeholder).to.equal(
					'Enter your postal code'
				);
			});
		});
	});
});
