const FormElement = require('../../utils/form-element');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('FormElement', () => {
	let formElement;
	let document;
	let sandbox;
	let addStub;
	let removeStub;

	beforeEach(() => {
		addStub = sinon.stub();
		removeStub = sinon.stub();
		document = {
			querySelector: () => {
				return {
					querySelectorAll: () => {},
					querySelector: () => {
						return {
							value: 'test',
						};
					},
					classList: {
						add: addStub,
						remove: removeStub,
					},
				};
			},
		};
		formElement = new FormElement(document);
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it("should throw an error if document element isn't passed in.", () => {
			expect(() => {
				new FormElement();
			}).to.throw();
		});

		it('should throw an error if form element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => {};
				new FormElement(document);
			}).to.throw();
		});
	});

	describe('hide', () => {
		it('should add the ncf__hidden class', () => {
			formElement.hide();

			expect(addStub.getCall(0).args[0]).to.equal('ncf__hidden');
		});
	});

	describe('show', () => {
		it('should remove the ncf__hidden class', () => {
			formElement.show();

			expect(removeStub.getCall(0).args[0]).to.equal('ncf__hidden');
		});
	});

	describe('value', () => {
		it('should return the value', () => {
			expect(formElement.value()).to.equal('test');
		});
	});
});
