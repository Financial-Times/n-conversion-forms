const Loader = require('../../utils/loader');
const expect = require('chai').expect;
const sinon = require('sinon');
const sandbox = sinon.createSandbox();

global.document = {};

describe('Loader', () => {
	let loader;
	let documentStub;
	let elementStub;

	beforeEach(() => {
		elementStub = {
			classList: {
				add: sandbox.stub(),
				remove: sandbox.stub()
			},
			focus: sandbox.stub(),
			removeAttribute: sandbox.stub()
		};
		documentStub = {
			addEventListener: sandbox.stub(),
			querySelector: sandbox.stub(),
			removeEventListener: sandbox.stub()
		};
	});

	afterEach(() => {
		sandbox.restore();
	});

	describe('constructor', () => {
		it('should throw an error if nothing passed', () => {
			expect(() => {
				new Loader();
			}).to.throw();
		});

		it('should throw an error if loader not present', () => {
			expect(() => {
				documentStub.querySelector.returns(false);
				new Loader(documentStub);
			}).to.throw();
		});
	});

	context('constructed', () => {
		beforeEach(() => {
			documentStub.querySelector.returns(elementStub);
			loader = new Loader(documentStub);
		});

		describe('clearContent', () => {
			it('should clear the content of the partial', () => {
				loader.setContent('<div>Baz</div>');
				loader.clearContent();
				expect(elementStub.innerHTML).to.equal('');
			});
		});

		describe('setContent', () => {
			it('should set the title of the partial', () => {
				loader.setContent({ title: 'Hooray!'});
				expect(elementStub.innerHTML).to.equal('Hooray!');
			});
			it('should set the content of the partial', () => {
				loader.setContent({ content: '<div>Baz</div>'});
				expect(elementStub.innerHTML).to.equal('<div>Baz</div>');
			});
		});

		describe('show', () => {
			it('should show the loader', () => {
				loader.show();
				expect(elementStub.classList.add.getCall(0).args[0]).to.equal(loader.VISIBLE_CLASS);
				expect(elementStub.classList.remove.getCall(0).args[0]).to.equal(loader.HIDDEN_CLASS);
			});
			it('should call setContent if content is passed', () => {
				const content = { title: 'foo' };
				sandbox.stub(loader, 'setContent');

				loader.show(content);
				expect(loader.setContent.getCall(0).args[0]).to.equal(content);
			});
		});

		describe('hide', () => {
			it('should hide the loader', () => {
				loader.hide();
				expect(elementStub.classList.add.getCall(0).args[0]).to.equal(loader.HIDDEN_CLASS);
				expect(elementStub.classList.remove.getCall(0).args[0]).to.equal(loader.VISIBLE_CLASS);
			});
		});
	});

	context('a11y', () => {
		beforeEach(() => {
			documentStub.querySelector.returns(elementStub);
			loader = new Loader(documentStub);
		});

		describe('show', () => {
			it('should give the loader the focus', () => {
				loader.show();

				expect(elementStub.tabIndex).to.equal(1);
				expect(elementStub.focus.called).to.be.true;
			});
		});

		describe('showAndPreventTabbing', () => {
			it('should intercept tab keypresses to prevent tabbing to content underneath', () => {
				loader.showAndPreventTabbing();
				expect(documentStub.addEventListener.getCall(0).args[0]).to.equal('keydown');
				expect(documentStub.addEventListener.getCall(0).args[1].name).to.equal('interceptTab');
			});
		});

		describe('hide', () => {
			it('should remove focus from the loader', () => {
				loader.hide();

				expect(elementStub.removeAttribute.getCall(0).args[0]).to.equal('tabindex');
			});

			it('should stop intercepting tab keypresses', () => {
				loader.hide();

				expect(documentStub.removeEventListener.getCall(0).args[0]).to.equal('keydown');
				expect(documentStub.removeEventListener.getCall(0).args[1].name).to.equal('interceptTab');
			});

			it('should return focus to a previously focused element', () => {
				loader.showAndPreventTabbing();
				loader.hide();

				expect(elementStub.focus.called).to.be.true;
			});
		});
	});
});
