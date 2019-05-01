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
			addEventListener: sandbox.stub()
		};
		documentStub = {
			querySelector: sandbox.stub()
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

			it('should throw if no options given', () => {
				expect(() => {
					paymentTerm.updateOptions();
				}).to.throw();
			});

			it('should throw if options not array', () => {
				expect(() => {
					paymentTerm.updateOptions('test');
				}).to.throw();
			});

			it('should clone two nodes for each option', () => {
				const options = [{}, {}];
				paymentTerm.updateOptions(options);

				expect(elementStub.cloneNode.callCount).to.equal(options.length * 2);
			});

			it('should set the value for each input', () => {
				const options = [{ value: 1 }, { value: 2 }];
				paymentTerm.updateOptions(options);

				expect(elementStub.setAttribute.calledWith('value', options[0].value)).to.be.true;
				expect(elementStub.setAttribute.calledWith('value', options[1].value)).to.be.true;
			});

			it('should set the id for each input', () => {
				const options = [{ value: 1 }, { value: 2 }];
				paymentTerm.updateOptions(options);

				expect(elementStub.setAttribute.calledWith('id', options[0].value)).to.be.true;
				expect(elementStub.setAttribute.calledWith('id', options[1].value)).to.be.true;
			});

			it('should set the for for each label', () => {
				const options = [{ value: 1 }, { value: 2 }];
				paymentTerm.updateOptions(options);

				expect(elementStub.setAttribute.calledWith('for', options[0].value)).to.be.true;
				expect(elementStub.setAttribute.calledWith('for', options[1].value)).to.be.true;
			});
		});
	});
});
