/* global Z */
const customiseZuoraError = require('./zuora-error-map');
const FormElement = require('./form-element');
/**
 * ZUORA
 * Wrapper for the 3rd party Zuora library
 *
 * The library is inserted via a script tag in partials/zuora.html.
 *
 * 'Z' is the global of the 3rd party Zuora lib, its methods:
 * Z.submit                  submit the form, will trigger Z.runAfterRender*
 * Z.sendErrorMessageToHpm   send errors to display within the Zuora iframe
 * Z.setEventHandler         provide a handler for Direct Debit agreement checkbox in iframe
 * Z.renderWithErrorHandler  render + client side validation of iframe, then Z.runAfterRender*
 * Z.runAfterRender          run after Z.renderWithErrorHandler. *will also trigger on submit IF using Z.renderWithErrorHandler
 *
 * see docs for more: https://knowledgecenter.zuora.com/CA_Commerce/G_Hosted_Commerce_Pages/B_Payment_Pages_2.0/N_Error_Handling_for_Payment_Pages_2.0/Customize_Error_Messages_for_Payment_Pages_2.0#Render_Payment_Pages_2.0_with_Custom_Error_Handling
 *
 * @class
 */
class Zuora {

  constructor (window) {
    this.clientSideErrors = false;
    this.serverError = false;
    this.Z = window.Z;

    this.overlay = new FormElement(window.document, '.ncf-zuora-blur-overlay');

    this.setupListeners();
  }

  /**
   * Set up global listeners.
   */
  setupListeners () {
    // `blur_mode_(enabled|disabled)` are for the DD confirmation dialog.
    this.Z.setEventHandler('blur_mode_enabled', () => { this.overlay.show(); });
    this.Z.setEventHandler('blur_mode_disabled', () => { this.overlay.hide(); });
  }

  /**
   * ZUORA ERROR STRING TO OBJ
   * Convert the Zuora server validation error `message` string to an object.
   *
   * @param {String} serverErrorMsg - error message returned by Zuora callback
   *  expects format: "[errorKey]:[errorVal], [errorKey]:[errorVal],"
   */
  getServerErrorObjFromString (serverErrorMsg) {
    if (typeof serverErrorMsg !== 'string') return false;
    const errorObj = {};
    const errorString = serverErrorMsg.replace(/\s+/g, ''); // remove whitespace
    const pairs = errorString.split(',');
    pairs.forEach(pair => {
      let [key, val] = pair.split(':');
      if (key && val) {
        errorObj[key] = val;
      }
    });
    if (Object.keys(errorObj).length === 0 && errorObj.constructor === Object) {
      return false;
    }
    return errorObj;
  }

  /**
   * DISPLAY ZUORA SERVER FIELD VALIDATION ERRORS
   * Will parse the error message string returned from Zuora
   * and render custom error messages inline on the form.
   *
   * @param {Object} serverError - error message returned by Zuora callback
   */
  displayServerFieldValidationError (serverError) {
    const errors = this.getServerErrorObjFromString(serverError.message);
    if (errors) {
      Object.keys(errors).forEach(key => {
        const message = errors[key];
        const errorMessage = customiseZuoraError.generateCustomErrorMessage(key, null, message);
        this.Z.sendErrorMessageToHpm(key, errorMessage);
      });
    }
  }

  /**
   * DISPLAY GENERAL/OTHER ZUORA SERVER ERROR MESSAGES
   * Will attempt to figure out the field which is causing the error
   * and render inline messages if possible.
   *
   * @param {Object} serverError - error message returned by Zuora callback
   */
  displayGeneralServerError (serverError) {
    const { key, message } = customiseZuoraError.extractFieldAndErrorFromString(serverError.message);
    if (key && message) {
      this.Z.sendErrorMessageToHpm(key, message);
    }
  }

  /**
   * SUBMIT IF PASSES VALIDATION
   * Will attempt to submit the 3rd party Zuora iframe form and
   * reject if there are client side validation errors
   * or if the user refuses the DD mandate confirmation.
   *
   * @param {String} showMandateConfirmation - Whether or not we need to show the DD confirmation popup.
   * @returns {Promise} Resolves when the submission has occurred, rejects if there was an error.
   */
  submit (showMandateConfirmation) {
    return new Promise((resolve, reject) => {
      this.clientSideErrors = false;
      this.serverError = false;

      this.Z.submit(); // Zuora 3rd party method
      // ... triggers client validation & DD mandate confirmation

      // HACK: wait for Zuora client side validation
      // unfortunately Z.submit does not support callbacks
      setTimeout((async () => {
        // client side validation
        if (this.clientSideErrors) {
          return reject(new Error('clientSideErrors')); // reject submit
        }

        // mandate confirmation not required
        if (!showMandateConfirmation) {
          return resolve(true); // resolve submit
        } else { // await mandate confirmation
          try {
            const { confirmed } = await this.onDDConfirmation();

            if (confirmed === false) {
              reject(new Error('mandateCancelled')); // reject submit
            } else if (confirmed === true) {
              resolve(true); // resolve submit
            }
          } catch (error) {
            reject(error);
          }
        }

      }).bind(this), 500);
    });
  }

  /**
   * VALIDATE THE ZUORA FORM
   * Small promise wrapper around the validate function.
   *
   * @returns {Promise}
   */
  validatePaymentForm () {
    return new Promise(resolve => {
      this.Z.validate(resolve);
    });
  }

  /**
   * RENDER THEN RESOLVE + CUSTOM ERRORS
   * Will render the 3rd party Zuora iframe with client side validation and custom
   * error messages. Returns a Promise that resolves ONLY once the form has loaded.
   *
   * @param {Object} params Parameters for customizing this Payment Pages 2.0 form
   * @param {Object} prePopulatedFields Parameters with field ids and values to be pre-populated on the form
   * @param {Function} hostedPaymentPageCallback Handles only the error responses in Payment Page request from the Z.renderWithErrorHandler function
   *
   * @returns {Promise}
   */
  render ({ params, prePopulatedFields, hostedPaymentPageCallback }) {
    return new Promise((resolve) => {
      /**
       * Z.renderWithErrorHandler - Zuora 3rd party method
       * @param {Object}    params - see parent function
       * @param {Object}    prePopulatedFields - see parent function
       * @param {Function}  hostedPaymentPageCallback - see parent function
       * @param {Function}  anonymous - Zuora Custom Error Message Callback
       */
      this.Z.renderWithErrorHandler(
        params,
        prePopulatedFields,
        hostedPaymentPageCallback,
        (key, code, message) => {
          /* !Called for each error. See onClientErrorMessage
          *
          * !There are two 'ways' into this callback, on init render
          * and on the form having client validation errors upon Z.submit
          */
          if (!this.clientSideErrors) this.clientSideErrors = true;
          // It appears Zuora triggers this callback twice, once with three paramaters, and once with a single object contaning the paramaters. So filtering out the object version to avoid duplication
          if (typeof key !== 'object') {
            this.onClientErrorMessage(key, code, message);
          }
          resolve(); // This will resolve mutiple times - which is ok
        }
      );
      /**
       * Z.runAfterRender - Zuora 3rd party method
       * @param {Function} anonymous - handles the Zuora server-side error messages
       *
       * Called after full render, !if there are client errors then this will not be called!
       * HACK: this callback is used for more than its intended purpose of a Zuora server error handler
       */
      this.Z.runAfterRender(() => {
        this.onServerError();
        resolve();
      });
    });
  }

  /**
   * POPULATE FIELDS ON THE ZUORA FORM
   * Small wrapper around the prepopulate function.
   * 
   * @param {Object} fields - Key/Value representation of the form fields.
   */
  populateFields(fields) {
    this.Z.prepopulate(fields);
  }

  /**
   * ON IFRAME AGREEMENT CHECKBOX CHANGING
   * Call a provided function upon the value of the direct debit
   * agreement checkbox changing (inside the 3rd party Zuora iframe).
   *
   * @param {Function} callback - the callback to fire upon change
   */
  onAgreementCheckboxChange (callback) {
    // Zuora 3rd party method, returns response to callback
    this.Z.setEventHandler('agreement_checked', () => {
      callback({ checked: true });
    });
    this.Z.setEventHandler('agreement_unchecked', () => {
      callback({ checked: false });
    });
  }

  /**
   * ON DD MANDATE CONFIRMATION
   * Call a provided function upon the confirmation or cancellation
   * of the direct debit mandate (inside the 3rd party Zuora iframe).
   *
   * This uses an unofficial event handler which has been attatched via the
   * the Zuora website, where we define the custom confirmation dialogue code.
   * It works in the same way as the official `agreement_checked` callback,
   * leveraging the use of the Zuora `postMessage` to commuincate events from the
   * iframe to the parent window. The code looks like this:
   *
   * <a class="confirm-btn" onClick="ZXD.postMessage(JSON.stringify({'action': 'mandate_confirmed'}), ZLT.parentURL(), null);">Confirm</a>
   *
   * @param {Function} callback - the callback to fire upon confirmation.
   */
  onDDConfirmation (callback) {
    // Zuora 3rd party method, returns response to callback
    this.Z.setEventHandler('mandate_confirmed', () => {
      callback({ confirmed: true });
    });
    this.Z.setEventHandler('mandate_cancelled', () => {
      callback({ confirmed: false });
    });
  }

  /**
   * ON ZUORA POPUP
   * Call a provided function upon the confirmation popup appearing
   * inside the 3rd party Zuora iframe. Another unofficial event handler.
   *
   * @param {Function} callback - the callback to fire upon change
   */
  onDDConfirmationPopup (callback) {
    let popupActive = false;
    // Zuora 3rd party method
    this.Z.setEventHandler('blur_mode_enabled', () => {
      if (!popupActive) { // squash mutiple callbacks
        popupActive = true;
        callback({ popupActive });
      }
    });
    this.Z.setEventHandler('blur_mode_disabled', () => {
      if (popupActive) { // squash mutiple callbacks
        popupActive = false;
        callback({ popupActive });
      }
    });
  }

  /**
   * ON ZUORA SERVER ERROR MESSAGE CALLBACK
   * Always called after the 3rd party Zuora render, therefore could be no errors.
   */
  onServerError () {
    if (this.serverError && this.serverError.code) {
      if (this.serverError.code === 'HostedPageFieldValidationError') {
        // issues with server side form field validation
        // parse and render like client side validation errors
        this.displayServerFieldValidationError(this.serverError);
      } else {
        // handle other Zuora server errors
        this.displayGeneralServerError(this.serverError);
      }
    }
  }

  /**
   * ON ZUORA CLIENT ERROR MESSAGE CALLBACK
   * Called for each error in the 3rd party Zuora iframe.
   *
   * @param {string} key      form field name. See link below for field names used
   * @param {String} code     Error code returned when the client-side credit card validation fails
   * @param {String} message  The error message returned from Zuora.
   *
   * https://knowledgecenter.zuora.com/CA_Commerce/G_Hosted_Commerce_Pages/B_Payment_Pages_2.0/K_Payment_Pages_2.0_Form_Fields
   */
  onClientErrorMessage (key, code, message) {
    const errorMessage = customiseZuoraError.generateCustomErrorMessage(key, code, message);
    this.Z.sendErrorMessageToHpm(key, errorMessage);
  }

}

module.exports = Zuora;
