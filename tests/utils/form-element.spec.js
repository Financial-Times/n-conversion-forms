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
					classList: {
						add: addStub,
						remove: removeStub
					}
				};
			}
		};
		formElement = new FormElement(document);
		sandbox = sinon.createSandbox();
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if document element isn\'t passed in.', () => {
			expect(() => {
				new FormElement();
			}).to.throw();
		});

		it('should throw an error if form element does not exist on the page', () => {
			expect(() => {
				document.querySelector = () => { };
				new FormElement(document);
			}).to.throw();
		});
	});

	describe('hide', () => {
		it('should add the n-ui-hide class', () => {
			formElement.hide();

			expect(addStub.getCall(0).args[0]).to.equal('n-ui-hide');
		});
	});

	describe('show', () => {
		it('should remove the n-ui-hide class', () => {
			formElement.show();

			expect(removeStub.getCall(0).args[0]).to.equal('n-ui-hide');
		});
	});

});
