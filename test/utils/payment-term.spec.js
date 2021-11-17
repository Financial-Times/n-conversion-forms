const PaymentTerm = require('../../utils/payment-term');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();

describe('PaymentTerm', () => {
	let paymentTerm;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			querySelector: sandbox.stub(),
			querySelectorAll: sandbox.stub(),
			getAttribute: sandbox.stub(),
			setAttribute: sandbox.stub(),
			cloneNode: sandbox.stub(),
			remove: sandbox.stub(),
			insertBefore: sandbox.stub(),
			parentElement: elementStub,
			addEventListener: sandbox.stub(),
			value: 'test',
			dataset: {
				baseAmount: 100,
			},
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
				new PaymentTerm();
			}).to.throw();
		});

		it('should throw an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new PaymentTerm(documentStub);
			}).to.throw();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.returns(elementStub);
			paymentTerm = new PaymentTerm(documentStub);
		});

		describe('getSelected', () => {
			it('should throw an error if nothing selected', () => {
				elementStub.querySelector.returns(false);
				expect(() => {
					paymentTerm.getSelected();
				}).to.throw();
			});

			it('should return the value of the selected term', () => {
				elementStub.querySelector.returns(elementStub);
				paymentTerm.getSelected();
				expect(elementStub.getAttribute.calledWith('value')).to.be.true;
			});
		});

		describe('onChange', () => {
			it('should add an event listener on change', () => {
				paymentTerm.onChange();
				expect(elementStub.addEventListener.calledWith('change')).to.be.true;
			});

			it('should call the callback', () => {
				const callback = sandbox.stub();
				elementStub.addEventListener = (type, callback) => callback();
				paymentTerm.onChange(callback);
				expect(callback.called).to.be.true;
			});
		});

		describe('updateOptions', () => {
			beforeEach(() => {
				paymentTerm.getSelected = sandbox.stub().returns(true);
				elementStub.querySelector.returns(elementStub);
				elementStub.cloneNode.returns(elementStub);
				elementStub.querySelectorAll.returns([elementStub]);
			});

			it('should throw an error if not all terms have an update', () => {
				expect(() => {
					paymentTerm.updateOptions([]);
				}).to.throw();
			});

			it('should replace the price with the correct updated price', () => {
				const priceStub = {};
				elementStub.querySelector
					.withArgs('.ncf__payment-term__price')
					.returns(priceStub);
				paymentTerm.updateOptions([
					{
						value: 'test',
						price: '£1.01',
					},
				]);
				expect(priceStub.innerHTML).to.equal('£1.01');
			});

			it('should replace the trial price with the correct updated trial price', () => {
				const trialPriceStub = {};
				elementStub.querySelector
					.withArgs('.ncf__payment-term__trial-price')
					.returns(trialPriceStub);
				paymentTerm.updateOptions([
					{
						value: 'test',
						trialPrice: '£1.01',
					},
				]);
				expect(trialPriceStub.innerHTML).to.equal('£1.01');
			});

			it('should replace the monthly price with the correct updated monthly price', () => {
				const monthlyPriceStub = {};
				elementStub.querySelector
					.withArgs('.ncf__payment-term__monthly-price')
					.returns(monthlyPriceStub);
				paymentTerm.updateOptions([
					{
						value: 'test',
						monthlyPrice: '£1.01',
					},
				]);
				expect(monthlyPriceStub.innerHTML).to.equal('£1.01');
			});

			describe('updating base amount', () => {
				const updatedOptions = [
					{
						value: 'test',
						monthlyPrice: '£1.01',
						amount: 500,
						trialAmount: 1,
					},
				];

				beforeEach(() => {
					elementStub.querySelector.returns(elementStub);
				});

				it('should replace the base amount with the correct updated trial amount', () => {
					updatedOptions[0].isTrial = true;
					paymentTerm.updateOptions(updatedOptions);
					expect(elementStub.setAttribute.calledWith('data-base-amount', 1)).to
						.be.true;
				});

				it('should replace the base amount with the correct updated amount', () => {
					updatedOptions[0].isTrial = false;
					paymentTerm.updateOptions(updatedOptions);
					expect(elementStub.setAttribute.calledWith('data-base-amount', 500))
						.to.be.true;
				});
			});

			describe('getBaseAmount', () => {
				it('should throw an error if nothing selected', () => {
					elementStub.querySelector.returns(false);
					expect(() => {
						paymentTerm.getBaseAmount();
					}).to.throw();
				});

				it('should return base amount of the selected term', () => {
					elementStub.dataset.baseAmount = 99;
					elementStub.querySelector.returns(elementStub);
					const returnedAmount = paymentTerm.getBaseAmount();
					expect(returnedAmount).to.equal(99);
				});
			});
		});
	});
});
