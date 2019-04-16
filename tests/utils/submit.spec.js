const Submit = require('../../utils/submit');
const expect = require('chai').expect;
const sandbox = require('sinon').createSandbox();

describe('Submit', () => {
	let submit;
	let documentStub;
	let elementStub;
	let newString;

	beforeEach(() => {
		elementStub = {
			querySelector: sandbox.stub(),
			innerHTML: 'default'
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
				new Submit();
			}).to.throw();
		});

		it('should throw an error if button not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new Submit(documentStub);
			}).to.throw();
		});
	});

	describe('constructed', () => {
		beforeEach(() => {
			newString = ('test');
			documentStub.querySelector.returns(elementStub);
			submit = new Submit(documentStub);

		});

		describe('updateText', () => {
			it('should throw if no string given', () => {
				expect(() => {
					submit.updateText();
				}).to.throw();
			});

			it('should update the innerHTML of the button', () => {
				submit.updateText(newString);
				expect(elementStub.innerHTML).to.equal('test');
			});
		});
	});
});
