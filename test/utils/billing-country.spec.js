const BillingCountry = require('../../utils/billing-country');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();

describe('BillingCountry', () => {
	let billingCountry;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			addEventListener: sandbox.stub(),
			selectedIndex: 1,
			options: [{ value: 0 }, { value: 1 }, { value: 2 }],
		};
		documentStub = {
			querySelector: sandbox.stub(),
		};
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if nothing passed', () => {
			expect(() => {
				new BillingCountry();
			}).to.throw();
		});

		it('should throw an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new BillingCountry(documentStub);
			}).to.throw();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.returns(elementStub);
			billingCountry = new BillingCountry(documentStub);
		});

		describe('onChange', () => {
			it('should add an event listener on change', () => {
				billingCountry.onChange();
				expect(elementStub.addEventListener.calledWith('change')).to.be.true;
			});

			it('should call the callback', () => {
				const callback = sandbox.stub();
				elementStub.addEventListener = (type, callback) => callback();
				billingCountry.onChange(callback);
				expect(callback.called).to.be.true;
			});
		});

		describe('getSelected', () => {
			it('should throw an error if nothing selected', () => {
				elementStub.options = [];
				elementStub.selectedIndex = 0;
				expect(() => {
					billingCountry.getSelected();
				}).to.throw();
			});

			it('should throw an error if something selected that is not there', () => {
				elementStub.selectedIndex = 4;
				expect(() => {
					billingCountry.getSelected();
				}).to.throw();
			});

			it('should return the selected option', () => {
				expect(billingCountry.getSelected()).to.equal(1);
			});

			it('should return the changed selected option', () => {
				elementStub.selectedIndex = 0;
				expect(billingCountry.getSelected()).to.equal(0);
			});
		});
	});
});
