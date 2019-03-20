const expect = require('chai').expect;
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

let FormElementStub = sinon.stub();
const Zuora = proxyquire('../../utils/zuora', {
  './form-element': FormElementStub
});

let fixtures = {
  prepopulatedFields: {
    firstName: 'John',
    lastName: 'Doe'
  },
  render: {
    code: 'firstNameRequired',
    key: 'firstName',
    message: 'firstName required'
  },
  serverError: {
    message: 'firstName:firstNameError, cardnumber: invalid'
  }
};

describe.only('Zuora', () => {
  let window;
  let sandbox;
  let zuora;
  
  beforeEach(() => {
    window = {
      Z: {
        prepopulate: sinon.stub(),
        renderWithErrorHandler: sinon.stub().callsArgWith(3, fixtures.render.key, fixtures.render.code, fixtures.render.message),
        runAfterRender: sinon.stub().callsArg(0),
        sendErrorMessageToHpm: sinon.stub(),
        setEventHandler: sinon.stub(),
        submit: sinon.stub(),
        validate: sinon.stub()
      }
    };
    zuora = new Zuora(window);
    sandbox = sinon.createSandbox();
  }); 

  afterEach(() => {
    sandbox.restore();
  });

  context('setupListeners', () => {
    it('Sets up global listeners', () => {
      window.Z.setEventHandler.callsArg(1);

      expect(window.Z.setEventHandler.getCall(0).args[0]).to.equal('blur_mode_enabled');
      expect(window.Z.setEventHandler.getCall(1).args[0]).to.equal('blur_mode_disabled');
    });
  });

  context('getServerErrorObjFromString', () => {
    it('formats the server error string as an object.', () => {  
      expect(zuora.getServerErrorObjFromString(fixtures.serverError.message)).to.deep.equal({
        firstName: 'firstNameError',
        cardnumber: 'invalid'
      });
    });
  });

  context('displayServerFieldValidationError', () => {
    it('renders the validation errors', () => {
      zuora.displayServerFieldValidationError(fixtures.serverError);

      expect(window.Z.sendErrorMessageToHpm.getCalls().length).to.equal(2);
      expect(window.Z.sendErrorMessageToHpm.getCall(0).args).to.deep.equal(['firstName', 'First Name is invalid']);
      expect(window.Z.sendErrorMessageToHpm.getCall(1).args).to.deep.equal(['cardnumber', 'Field is invalid']);
    });
  });

  context('displayGeneralServerError', () => {
    it('renders the validation errors', () => {
      zuora.displayGeneralServerError(fixtures.serverError);

      expect(window.Z.sendErrorMessageToHpm.getCalls().length).to.equal(1);
      expect(window.Z.sendErrorMessageToHpm.getCall(0).args).to.deep.equal(['creditCardNumber', 'Card Number is invalid']);
    });
  });

  context('submit', () => {
    it('calls Z.submit()', async () => {
      await zuora.submit();

      expect(window.Z.submit.called).to.be.true;
    });

    it('throws if there are client side errors', async () => {
      const promise = zuora.submit();
      zuora.clientSideErrors = true;

      try {
        await promise;
      } catch (error) {
        expect(error.message).to.equal('clientSideErrors');
      }
    });
  });

  context('submit - DD mandate', () => {
    it('calls Z.submit()', async () => {
      sandbox.stub(zuora, 'onDDConfirmation').resolves({ confirmed: true });
      await zuora.submit(true);

      expect(window.Z.submit.called).to.be.true;
    });

    it('throws if there are client side errors', async () => {
      const promise = zuora.submit(true);
      zuora.clientSideErrors = true;

      try {
        await promise;
      } catch (error) {
        expect(error.message).to.equal('clientSideErrors');
      }
    });

    it('resolves successfully when mandate is confirmed.', async () => {
      sandbox.stub(zuora, 'onDDConfirmation').resolves({ confirmed: true });
      const result = await zuora.submit(true);

      expect(result === true).to.be.true;
    });

    it('throws when mandate is cancelled.', async () => {
      sandbox.stub(zuora, 'onDDConfirmation').resolves({ confirmed: false });
      
      try {
        await zuora.submit(true);
      } catch (error) {
        expect(error.message).to.equal('mandateCancelled');
      }
    });

    it('throws when mandate promise fails.', async () => {
      sandbox.stub(zuora, 'onDDConfirmation').rejects(new Error('foo'));
      
      try {
        await zuora.submit(true);
      } catch (error) {
        expect(error.message).to.equal('foo');
      }
    });
  });

  context('validatePaymentForm', () => {
    it('validates the zuora form', () => {
      zuora.validatePaymentForm();

      expect(window.Z.validate.called).to.be.true;
    });
  });

  context('render', () => {
    const params = { foo: 'bar' };
    const prepopulatedFields = { firstName: 'John' };
    const hostedPaymentPageCallback = () => {};

    it('calls relevant Zuora functions', async () => {
      await zuora.render({ params, prepopulatedFields, hostedPaymentPageCallback });

      expect(window.Z.renderWithErrorHandler.called).to.be.true;
      expect(window.Z.runAfterRender.called).to.be.true;
    });
  });

  context('populateFields', () => {
    it('sets up agreement checkbox event handlers', async () => {
      await zuora.populateFields(fixtures.prepopulatedFields);

      expect(window.Z.prepopulate.getCall(0).args[0]).to.equal(fixtures.prepopulatedFields);
    });
  });

  context('onAgreementCheckboxChange', () => {
    let callbackStub;
    
    beforeEach(() => {
      callbackStub = sandbox.stub();
    });
    
    it('sets up agreement checkbox event handlers', () => {
      window.Z.setEventHandler.callsArg(1);

      zuora.onAgreementCheckboxChange(callbackStub);
      
      // The first 2 calls to this happen in setupListeners
      expect(window.Z.setEventHandler.getCall(2).args[0]).to.equal('agreement_checked');
      expect(window.Z.setEventHandler.getCall(3).args[0]).to.equal('agreement_unchecked');
    });

    it('passes the appropriate data to the callback when checked', () => {
      window.Z.setEventHandler.withArgs('agreement_checked').callsArg(1);

      zuora.onAgreementCheckboxChange(callbackStub);

      expect(callbackStub.getCall(0).args[0]).to.deep.equal({ checked: true });
    });

    it('passes the appropriate data to the callback when unchecked', async () => {
      window.Z.setEventHandler.withArgs('agreement_unchecked').callsArg(1);

      zuora.onAgreementCheckboxChange(callbackStub);

      expect(callbackStub.getCall(0).args[0]).to.deep.equal({ checked: false });
    });
  });

  context('onDDConfirmation', () => {
    let callbackStub;

    beforeEach(() => {
      callbackStub = sandbox.stub();
    });

    it('sets up mandate confirmation event handlers', () => {
      window.Z.setEventHandler.callsArg(1);
      zuora.onDDConfirmation(callbackStub);
      
      // The first 2 calls to this happen in setupListeners
      expect(window.Z.setEventHandler.getCall(2).args[0]).to.equal('mandate_confirmed');
      expect(window.Z.setEventHandler.getCall(3).args[0]).to.equal('mandate_cancelled');
    });

    it('passes the appropriate data to the callback when confirmed', () => {
      window.Z.setEventHandler.withArgs('mandate_confirmed').callsArg(1);

      zuora.onDDConfirmation(callbackStub);

      expect(callbackStub.getCall(0).args[0]).to.deep.equal({ confirmed: true });
    });

    it('passes the appropriate data to the callback when cancelled', () => {
      window.Z.setEventHandler.withArgs('mandate_cancelled').callsArg(1);

      zuora.onDDConfirmation(callbackStub);

      expect(callbackStub.getCall(0).args[0]).to.deep.equal({ confirmed: false });
    });
  });

  context('onDDConfirmationPopup', () => {
    let callbackStub;

    beforeEach(() => {
      callbackStub = sandbox.stub();
    });

    it('sets up mandate confirmation event handlers', () => {
      window.Z.setEventHandler.callsArg(1);
      zuora.onDDConfirmationPopup(callbackStub);

      // The first 2 calls to this happen in setupListeners
      expect(window.Z.setEventHandler.getCall(2).args[0]).to.equal('blur_mode_enabled');
      expect(window.Z.setEventHandler.getCall(3).args[0]).to.equal('blur_mode_disabled');
    });

    it('passes the appropriate data to the callback when confirmed', () => {
      window.Z.setEventHandler.withArgs('blur_mode_enabled').callsArg(1);

      zuora.onDDConfirmationPopup(callbackStub);

      expect(callbackStub.getCall(0).args[0]).to.deep.equal({ popupActive: true });
    });

    it('passes the appropriate data to the callback when cancelled', () => {
      // Need to call enabled first so the popup is marked as active.
      window.Z.setEventHandler.withArgs('blur_mode_enabled').callsArg(1);
      window.Z.setEventHandler.withArgs('blur_mode_disabled').callsArg(1);

      zuora.onDDConfirmationPopup(callbackStub);

      expect(callbackStub.getCall(1).args[0]).to.deep.equal({ popupActive: false });
    });
  });

  context('onServerError', () => {
    it('displays field validation errors', () => {
      sandbox.stub(zuora, 'displayServerFieldValidationError');
      
      zuora.serverError = { code: 'HostedPageFieldValidationError' };
      zuora.onServerError();

      expect(zuora.displayServerFieldValidationError.called).to.be.true;
    });

    it('displays general error', () => {
      sandbox.stub(zuora, 'displayGeneralServerError');
      
      zuora.serverError = { code: 'OtherGenericError' };
      zuora.onServerError();

      expect(zuora.displayGeneralServerError.called).to.be.true;
    });
  });

  context('onClientErrorMessage', () => {
    it('renders form error messages in hpm', () => {
      zuora.onClientErrorMessage(fixtures.render.key, fixtures.render.code, fixtures.render.message);

      expect(window.Z.sendErrorMessageToHpm.getCall(0).args).to.deep.equal([ 'firstName', 'First Name is invalid' ]);
    });
  });
});
