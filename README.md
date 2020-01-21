# n-conversion-forms

Contains HTML and CSS that's used within the conversion forms

[![CircleCI](https://circleci.com/gh/Financial-Times/n-conversion-forms.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-conversion-forms)
[![Known Vulnerabilities](https://snyk.io/test/github/Financial-Times/n-conversion-forms/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Financial-Times/n-conversion-forms?targetFile=package.json)

```bash
make install # install all dependencies
make run # build and start documentation app at http://local.ft.com:5005/
```

## Table of contents

* [Requirements](#requirements)
* [Usage](#usage)
* [Utilities](#utilities)
* [Contributing](CONTRIBUTING.md)
* [Components](docs/COMPONENTS.md)

## Requirements

For installing dependencies, running the build process and the documentation app

* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Bower](https://bower.io/)

## Usage

This repository contains JSX components and CSS that can be used in your projects.
 
### CSS

The styles can be used by including the `main.scss` file within your own SASS files.

```scss
@import 'n-conversion-forms/main';
```

### JS

The utils can be used by including the individual file from within your own JS files. For more information see the [Utilities](#utilities) section below.

```js
import MyModule from 'n-conversion-forms/utils/my-module';
```

## Utilities

### Table of contents

* [AppBanner](#app-banner)
* [TrialBanner](#trial-banner)
* [Country](#country)
* [Delivery Option](#delivery-option)
* [Delivery Start Date](#delivery-start-date)
* [Email](#email)
* [Event Notifier](#event-notifier)
* [Loader](#loader)
* [Password](#password)
* [Payment Term](#payment-term)
* [Payment Type](#payment-type)
* [Salesforce](#salesforce)
* [Submit](#submit)
* [Tracking](#tracking)
* [Validation](#validation)
* [Zuora](#zuora)

### AppBanner

```js
new AppBanner(window);
```

Simple utility to use in conjunction with the `app-banner` partial that performs user agent sniffing. It will remove the App Store or Play Store link which ever is not relevant for the platform the user is on.

### TrialBanner

Displays banner for trial only. Designed to take in dynamic period `trialDuration`. If period is not present, then default 30 day period would be used  


### Country

```js
const country = new Country(document);

// Get the value on change
country.onChange(() => {
  const selected = country.getSelected();
});
```

Adds listener for country changes and retrieve the currently selected value.

### Delivery Option

```js
const deliveryOption = new DeliveryOption(document);
```

This utility provides the ability to bind a callback that gets fired when the delivery option gets changed by the user.

```js
deliveryOption.handleDeliveryOptionChange(() => {
  // your code here.
});
```

### Delivery Start Date

This utility provides the ability to call a backend service that validates the selected start date and updates the UI accordingly with the new information returned<sup>†</sup>. The start date will be sent as a `POST` to the service as `startDate` in the body, along with any data returned by the given function (second parameter).

```js
deliveryStartDate.handleDeliveryStartDateChange('/api/path', () => {
  // This function needs to return an object containing any extra data to send with the request.
});
```

† This requires the result of the endpoint to look as follows:

```js
{
  firstDeliveryDate: '2019-02-16',
  firstDeliveryDateString: 'Saturday 16th of February 2019'
}
```

### Email

```js
const email = new Email(document);
```

This utility provides the following:

+ If a confirm email field is present will validate to ensure the email addresses match and present the user with an error if not.
+ Registering an email exists lookup as follows:

    ```js
    email.registerEmailExistsCheck(backendServiceUrl, onFoundCallback, onNotFoundCallback);
    ```
  
  **NB** It's recommended you have a hidden `#csrfToken` input element that you validate the request with in your backend service to prevent having your service abused.

  The backend service will be sent the following as the body of a `POST` request: `{ email, csrfToken }`.

### Event Notifier

TBD

### Loader

```js
const loader = new Loader(document);
```

Requirements:

+ `{{> n-conversion-forms/partials/loader }}` - The element containing the overlay and loading message/spinner. Place this somewhere near the bottom of your document.

If you want to define some content, this can be done as follows:

```handlebars
{{#> n-conversion-forms/partials/loader title="Hooray!" }}
  <p>Main content for the message can be defined in here</p>
{{/ n-conversion-forms/partials/loader }}
```

#### Showing/Hiding

The loader is hidden by default on page load.

```js
loader.show();
loader.showAndPreventTabbing();
loader.hide();
```

or

To show loader on page load/render:

```handlebars
{{> n-conversion-forms/partials/loader showLoader=true title="Hooray!" }}
```

You can optionally pass in content when showing the loader:

```js
loader.show({ title: 'Hello World!' });
loader.showAndPreventTabbing({ title: 'Hello World!' });
```

#### Loading Message

To dynamically set the messsage to be displayed (either of the properties are optional):

```js
loader.setContent({
  content: '<p>Main content for the message can be defined in here</p>',
  title: 'Hooray!'
});
```

To clear the message entirely:

```js
loader.clearContent();
```

### Password

```js
const password = new Password(document);
```

This utility's sole purpose (currently) is to enable the functionality behind the `Show password` checkbox that toggles whether the password is masked or not.

### PaymentTerm

```js
const paymentTerm = new PaymentTerm(document);

// Return the currently selected payment term
paymentTerm.getSelected();

// Update the payment term options displayed
const options = [{
  name: 'Name of term',
  value: 'Value to send',
  description: 'Can contain <strong>HTML</strong>'
}];
paymentTerm.updateOptions(options);
```

Update and get the currently selected payment term on the form

### PaymentType

```js
const paymentType = new PaymentType(document);

// Show payment type
paymentType.show(PaymentType.APPLEPAY);

// Hide payment type
paymentType.hide(PaymentType.CREDITCARD);
```

Allows the control of which payment types are shown to the user. It relies on the `{{> payment-type }}` partial being used and has `show` and `hide` methods.

The following payment types are allowed:

```js
PaymentType.CREDITCARD
PaymentType.DIRECTDEBIT
PaymentType.PAYPAL
PaymentType.APPLEPAY
```

### Salesforce

Utility for converting salesforce country names to ISO country codes.

```js
// isoCode will equal GBR
const isoCode = salesforceNameToIsoCode('United Kingdom');

// salesfoceName will equal United Kingdom
const salesforceName = isoCodeToSalesforceName('GBR');
```

### Submit

```js
const submit = new Submit(document);

// Update the button text
submit.updateText('Pay with Apple Pay');

// Enable the button
submit.enable();

// Disable the button
submit.disable();

// Whether or not the button is disabled.
submit.isDisabled();

```
### Tracking

```js
const tracking = new Tracking(window, document.body);
```

TBD

### Validation

```js
const validation = new Validation();
validation.init();
```

This utility will set up the form for client side validation using [`o-forms`](https://github.com/Financial-Times/o-forms#javascript).

**NB:** By default, using this utility will prompt the user with a dialog before leaving the page if there have been changes on the form. It can be disabled as follows: `new Validation({mutePromptBeforeLeaving: true})`

One useful property made available is the main form DOM element via `validation.$form`. Use this for scoping `querySelector` calls to find elements within your form.

#### Custom Validation

You can add some custom validation functionality as follows:

```js
validation.addCustomValidation({
  errorMessage: 'Custom error message here.',
  field: domElementToValidate,
  validator: () => {
    // Custom validation code here. *Must* return truthy or falsey.
  }
});
```

If the validation fails, the field will look like it usually does when validation fails with your specified message displayed underneath.

### Zuora

The Zuora utility aims to wrap the Zuora client side library to make it more user friendly.

Requirements:

+ `{{> n-conversion-forms/partials/zuora }}` - Place this where you want the form to render. This partial also includes the Zuora client side library.

```js
const zuora = new Zuora(window);

// Will render the 3rd party Zuora iframe with client side validation and custom error messages.
// Returns a Promise that resolves ONLY once the form has loaded.
zuora.render({ params, prePopulatedFields, renderCallback });

// Will attempt to submit the 3rd party Zuora iframe form and reject if there are client side
// validation errors or if the user refuses the Direct Debit mandate confirmation.
zuora.submit(paymentType);

// Call a provided function upon the value of the direct debit agreement checkbox changing
// (inside the 3rd party Zuora iframe).
// @param {boolean} checked - whether the box was checked or not
zuora.onAgreementCheckboxChange(checked => {});

// Call a provided function upon the confirmation or cancellation of the direct debit mandate
// (inside the 3rd party Zuora iframe).
// @param {boolean} confirmed - whether confirmed or not
zuora.onDirectDebitConfirmation(confirmed => {});

// Example implementation on form submission
try {
  await this.zuora.submit('directdebit');
} catch (error) {
  if (error instanceof Zuora.ZuoraErrorValidation) {
    // Validation messages will be shown on HPM fields
    // Put other functionality on validation failure here
  } else if (error instanceof Zuora.ZuoraErrorMandateCancel) {
    // Fail silently, the direct debit mandate has been cancelled
  } else if (error instanceof Zuora.ZuoraErrorInvalidPaymentType) {
    // Invalid payment type
  } else {
    // General payment failure
  }
}

```

### Passing data to the demo components

Add any component properties under the key of the template you're adding/working on to [demos/data.json].

### Additional Notes

#### Autocomplete attributes
Autocomplete fields documentation is available here:  
https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute
