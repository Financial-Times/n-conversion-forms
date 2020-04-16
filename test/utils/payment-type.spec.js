const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();
const proxyquire = require('proxyquire').noCallThru();

const expanderInstance = 'expanderInstance';
const initStub = sandbox.stub().returns(expanderInstance);
const PaymentType = proxyquire('../../utils/payment-type', {
	'o-expander': {
		default: {
			init: initStub,
		},
	},
});

describe('PaymentType', () => {
	let paymentType;
	let documentStub;
	let elementStub;
	let parentStub;

	beforeEach(() => {
		parentStub = {
			classList: {
				add: sandbox.stub(),
				remove: sandbox.stub(),
			},
		};
		elementStub = {
			querySelector: sandbox.stub(),
			querySelectorAll: sandbox.stub(),
			getAttribute: sandbox.stub(),
			addEventListener: sandbox.stub(),
			parentElement: {
				parentElement: parentStub,
			},
			classList: {
				add: sandbox.stub(),
				remove: sandbox.stub(),
				contains: sandbox.stub(),
			},
		};
		documentStub = {
			querySelector: sandbox.stub(),
		};

		documentStub.querySelector.returns(elementStub);
		elementStub.querySelector.returns(elementStub);
		elementStub.querySelectorAll.returns([elementStub]);
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if nothing passed', () => {
			expect(() => {
				new PaymentType();
			}).to.throw();
		});

		it('should throw an error if field not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new PaymentType(documentStub);
			}).to.throw();
		});

		it('should call initialise the expander', () => {
			new PaymentType(documentStub);
			expect(initStub.called).to.be.true;
		});

		it('should have an expander property exposing the expander element', () => {
			const util = new PaymentType(documentStub);
			expect(util.expander).to.deep.eq(expanderInstance);
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			paymentType = new PaymentType(documentStub);
		});

		describe('show', () => {
			it('should remove class from the parent node', () => {
				paymentType.show(PaymentType.CREDITCARD);
				expect(parentStub.classList.remove.called).to.true;
			});
		});

		describe('hide', () => {
			it('should add class to the parent node', () => {
				paymentType.hide(PaymentType.CREDITCARD);
				expect(parentStub.classList.add.called).to.true;
			});
		});

		describe('displayError', () => {
			it('should add a class to the paymentType element', () => {
				paymentType.displayError();
				expect(elementStub.classList.add.called).to.be.true;
			});
		});

		describe('removeError', () => {
			it('should remove a class to the paymentType element', () => {
				paymentType.removeError();
				expect(elementStub.classList.remove.called).to.be.true;
			});
		});

		describe('onChange', () => {
			it('should add an event listener on change', () => {
				paymentType.onChange();
				expect(elementStub.addEventListener.calledWith('change')).to.be.true;
			});

			it('should call the callback', () => {
				const callback = sandbox.stub();
				elementStub.addEventListener = (type, callback) => callback();
				paymentType.onChange(callback);
				expect(callback.called).to.be.true;
			});
		});

		describe('getSelected', () => {
			it('should throw an error if nothing selected', () => {
				elementStub.querySelector.returns(false);
				expect(() => {
					paymentType.getSelected();
				}).to.throw();
			});

			it('should return the value of the selected term', () => {
				paymentType.getSelected();
				expect(elementStub.getAttribute.calledWith('value')).to.be.true;
			});
		});
	});
});
