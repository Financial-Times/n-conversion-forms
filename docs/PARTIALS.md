# Partials

## Content

* [Accept Terms](#accept-terms)
* [App Banner](#app-banner)
* [Billing Country](#billing-country)
* [Billing Postcode](#billing-postcode)
* [Confirmation](#confirmation)
* [Continue Reading](#continue-reading)
* [Country](#country)
* [County](#county)
* [Customer Care](#customer-care)
* [Decision Maker](#decision-maker)
* [Delivery Address](#delivery-address)
* [Delivery City/town](#delivery-city-town)
* [Delivery Information](#delivery-information)
* [Delivery Option](#delivery-option)
* [Delivery Postcode](#delivery-postcode)
* [Delivery Start Date](#delivery-start-date)
* [Email](#email)
* [Fieldset](#fieldset)
* [Firstname](#firstname)
* [Lastname](#lastname)
* [Licence Confirmation](#licence-confirmation)
* [Licence Header](#licence-header)
* [Loader](#loader)
* [Message](#message)
* [Package Change](#package-change)
* [Payment Term](#payment-term)
* [Phone](#phone)
* [Submit](#submit)

## Accept Terms

Renders the appropriate terms and conditions, based on the form that is shown to the user.

```handlebars
{{> n-conversion-forms/partials/accept-terms isCorpSignup=true isTrial=true isB2cParnership=true}}
```

### Options

+ `hasError`: boolean - default `false` - whether the terms and conditions checkbox has an error
+ `isSignup`: boolean - default `false` - whether the user is subscribing
+ `isRegister`: boolean - default `false` - whether the user is simply registering
+ `isChecked`: boolean - default `false` - whether the checkbox is already checked
+ `isB2b`: boolean - default `false` - whether the user is B2B
+ `isB2cPartnership`: boolean - default `false` - whether the licence is B2C Partnership
+ `ageRestriction`: string - default `16` - the minimum age a user must be to sign up
+ `isEmbedded`: boolean - default `false` - whether the form is embedded in a frame
+ `isCorpSignup`: boolean - default `false` - whether it's an individual signing up to a B2B licence
+ `isTrial`: boolean - default `false` - if the user is signing up to a trial
+ `isTransition`: boolean - default `false` - if the user is changing from one licence to another
+ `transitionType`: string - the type of transition from a previous licence (e.g. `immediate`)
+ `isPrintProduct`: boolean - default `false` - if the user is signing up to a print edition subscription
+ `specialTerms`: string - any special terms and conditions, in addition to the standard ones

## App Banner

Banner that appears on confirmation pages to inform the user of our App

```jsx
const { AppBanner } = require('@financial-times/n-conversion-forms/components');
<AppBanner />
```

## Billing country

Renders the billing country field.

```jsx
const { BillingCountry } = require('@financial-times/n-conversion-forms/components');
<BillingCountry value="USA" filterList=countrylist />
```

### Options

+ `value`: string - The name of the county.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms-input--invalid` class to display error.
+ `filterList`: object - list of country objects: `label`, `name`, `code`

## Billing postcode

Displays a billing postal code field with o-forms styling.

```jsx
const { BillingPostcode } = require('@financial-times/n-conversion-forms/components');
<BillingPostcode value="EC4M9BT" postcodeReference='postcode' />
```
### Required

+ `postcodeReference`: required - string - this value should be determined by the country code. Use BillingPostcode.getPostcodeReferenceByCountry which extends [Postcode](../utils/postcode.js)

### Options

+ `isDisabled`: boolean - true - disables the field.
+ `isZipCode`: boolean - true - `zip code` label - false - `post code`.
+ `pattern`: string - Pattern to be used for validation.
+ `value`: string - Text to pre-populate the field.

## Confirmation

Renders the subscription confirmation page.
Displayed cta and link are different for print only offers.

```jsx
const { Confirmation } = require('@financial-times/n-conversion-forms/components');
<Confirmation isPrintOnly=true isTrial=true offer="Premium Digital & Print" email="test@example.com" details=details />
```

### Options

+ `isPrintOnly`: boolean - whether or not this is a print only offer.
+ `isTrial`: boolean - whether or not this is a trial offer.
+ `offer`: string - offer display name.
+ `email`: email - user email.
+ `details`: array - objects with the following properties.
  + `title`: string
  + `data`: string
  + `description`: string

## Continue Reading

A message to inform the user they can read an article once they've subscribed.

```jsx
const { ContinueReading } = require('@financial-times/n-conversion-forms/components');
<ContinueReading />
```

### Options
+ `isEmbedded`: boolean - Sets links to reference top frame when embedded.
+ `quote`: string - Title displayed between the quote marks.
+ `link`: string - Location of the continue reading button.

## Country

Renders the country field.
NOTE: `isBillingCountry` flag is deprecated, use `billing-country` instead

```jsx
const { Country } = require('@financial-times/n-conversion-forms/components');
<Country value="USA" filterList=countrylist />
```

### Options

+ `value`: string - The name of the county.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms-input--invalid` class to display error.
+ `filterList`: object - list of country objects: `label`, `name`, `code`
+ `isBillingCountry`: boolean - DEPRECATED, use billing-country instead.

## County

Renders the county field.

```jsx
const { County } = require('@financial-times/n-conversion-forms/components');
<County value="Somerset" hasError=true isDisabled=true />
```

### Options

+ `value`: string - The name of the county.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms-input--invalid` class to display error.

## Customer Care

Renders a "contact customer support" page.

```jsx
const { CustomerCare } = require('@financial-times/n-conversion-forms/components');
<CustomerCare header="Some header text" message="Contact us for something" />
```

### Options
+ `header`: string - Custom header text. Defaults to "Sorry, this is not available online".
+ `isCompact`: boolean - This removes the phone icon and makes the spacing smaller.
+ `message`: string - Custom message text, defaults to "Speak now to our Customer Care team to discuss your options".

## Decision Maker

Renders an inline yes / no radio group for users to enter if they are a decision maker in their company.

```jsx
const { DecisionMaker } = require('@financial-times/n-conversion-forms/components');
<DecisionMaker value=yes hasError=true />
```

### Options
+ `value`: string - Pass 'yes' or 'no' to check an option, default is unchecked.
+ `hasError`: boolean - if true it adds `o-forms-input--invalid` class to display error.

## Delivery Address

Renders the 3 delivery address fields (line 1/2/3).

```jsx
const { DeliveryAddress } = require('@financial-times/n-conversion-forms/components');
<DeliveryAddress line1="10 Elm Street" line2="Apartment 1" hasError=true isDisabled=true />
```

### Options

+ `values`: Array - An array containing the 3 lines of the address.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms-input--invalid` class to display error.

## Delivery City/town

Renders the delivery city/town field.

```jsx
const { DeliveryCity } = require('@financial-times/n-conversion-forms/components');
<DeliveryCity value="Bath" hasError=true isDisabled=true />
```

### Options

+ `value`: string - The name of the city or town.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms-input--invalid` class to display error.

## Delivery Instructions

Renders the delivery instructions text area.

```jsx
const { DeliveryInstructions } = require('@financial-times/n-conversion-forms/components');
<DeliveryInstructions value="Leave on the front porch." hasError=true isDisabled=true />
```

### Options

+ `maxlength`: string - The maximum number of characters to allow in this field.
+ `rows`: string - The number of rows to render this textarea with.
+ `value`: string - The delivery instructions.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms-input--invalid` class to display error.

## Delivery Option

Display delivery options with radio buttons for users to choose between.

```jsx
const { DeliveryOption } = require('@financial-times/n-conversion-forms/components');
<DeliveryOption options=options />
```

### Options

+ `isSingle`: boolean - Whether there is only one single option being presented.
+ `options`: array - An array of objects that can have the following properties.
  + `value`: string - Value to send when selected.
  + `isSelected`: boolean - Set to true for the term to be selected.

## Delivery Postcode

Displays a post code field with o-forms styling.

```jsx
const { DeliveryPostCode } = require('@financial-times/n-conversion-forms/components');
<DeliveryPostCode value="EC4M9BT" postcodeReference="postcode" />
```

### Required

+ `postcodeReference`: required - string - this value should be determined by the country code. Use DeliveryPostcode.getPostcodeReferenceByCountry which extends [Postcode](../utils/postcode.js)

### Options

+ `isDisabled`: boolean - true - disables the field.
+ `pattern`: string - Pattern to be used for validation.
+ `value`: string - Text to pre-populate the field.

## Delivery Start Date

Renders a date field with a given start date (and accompanying copy).

```jsx
const { DeliveryStartDate } = require('@financial-times/n-conversion-forms/components');
<DeliveryStartDate value="2019-02-16" date="Saturday 16th February 2019" hasError=true isDisabled=true />
```

### Options

+ `value`: string - The date in `YYYY-MM-DD` format.
+ `min`: string - The earliest start date in `YYYY-MM-DD` format.
+ `max`: string - The latest start date in `YYYY-MM-DD` format.
+ `date`: string - The date in `dddd Do MMMM YYYY` format.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms-input--invalid` class to display error.

## Email

A form field for adding a user's email.

```handlebars
{{> n-conversion-forms/partials/email value='Enter your email address'}}
```
### Options
+ value: string - the email address.
+ hasError: boolean - true - adds o-forms-input--invalid class
+ isDisabled: boolean - true - disables the field
+ isB2b: boolean - true - shows `work email address` label
+ isEducationalLicence: boolean - true removes `work` from field label
+ isB2cPartnershipLicence: boolean - true removes `work` from field label

## Error Page

Renders a generic "error" page.

```jsx
const { ErrorPage } = require('@financial-times/n-conversion-forms/components');
<ErrorPage header="Some header text" message="Contact us for something">
	Some content to be placed in the middle
</ErrorPage>
```

### Options
+ `header`: string - Custom header text. Defaults to "Sorry, this is not available online".
+ `message`: string - Custom message text, defaults to "Speak now to our Customer Care team to discuss your options".

## Fieldset

Renders a fieldset.

```jsx
const { Fieldset } = require('@financial-times/n-conversion-forms/components');
<Fieldset legend="Group of fields">
  <!-- Form fields here -->
</Fieldset>
```

### Options

+ `descriptor`: string - Text used to describe this set of fields.
+ `legend`: string - Text to display in the `fieldset`'s `legend` element. Not passing this in won't render this element.
+ `hideLegend`: boolean - Whether to visibly show the `legend` or not.
+ `header`: string | markup - The heading level to use when the `header` inline partial (see below) is used.
+ `headingLevel`: string - The heading level to use when the `header` inline partial (see below) is used.
+ `name`: string - The value for the `fieldset`'s `name` attribute.

*NB*: The `headingLevel` option is required in order for this to work.

## firstname

A form field for adding a user's first name.

### Options

+ `value`: string - Text to pre-populate the `firstname` field.
+ `hasError`: boolean - true - adds `o-forms-input--invalid` class
+ `isDisabled`: boolean - true - disables the form field

```jsx
const { FirstName } = require('@financial-times/n-conversion-forms/components');
<FirstName value=John />
```

## lastname

A form field for adding a user's last name.

### Options

+ `value`: string - Text to pre-populate the `lastname` field.
+ `hasError`: boolean - true - adds `o-forms-input--invalid` class
+ `isDisabled`: boolean - true - disables the field

```jsx
const { LastName } = require('@financial-times/n-conversion-forms/components');
<LastName value=Smith hasError=true isDisabled=true />
```

## licence-confirmation

Confirmation page for subscribing to a company licence.

### Options

+ `isEmbedded`: boolean - Sets links to reference top frame when embedded
+ `isTrial`: boolean - Is the licence a trial or not
+ `duration`: string - How long the licence will last for

```jsx
const { LicenceConfirmation } = require('@financial-times/n-conversion-forms/components');
<LicenceConfirmation isTrial=true />
```

## licence-header

Header copy for licence pages.

### Options

+ `isTrial`: boolean - Is the licence a trial or not, defaults false.
+ `isB2cPartnershipLicence`: boolean - Is the licence a B2C Partnership, default false.
+ `displayName`: string - Name of the company licence is for
+ `welcomeText`: string - Form welcome text

```jsx
const { LicenceHeader } = require('@financial-times/n-conversion-forms/components');
<LicenceHeader isTrial=false displayName="IBM" welcomeText="Join our FT.com licence" />
```

```handlebars
{{> n-conversion-forms/partials/licence-header isTrial=false isB2cPartnershipLicence=true }}
```

## Loader

A full screen loading overlay.

### Options

+ `showLoader`: boolean - Whether to show the loader by default/on page load.
+ `title`: string - The title of the message shown underneath the loading spinner.
+ `inElement`: boolean - Whether to style this to be contained within an element.

### Inline Partials

You can pass in HTML (additional to the `title`) as follows:

```jsx
const { Loader } = require('@financial-times/n-conversion-forms/components');
<Loader title="Loading">
  <p>Some additional content<p>
</Loader>
```

## Message

Displays a message on the page using [o-message](https://registry.origami.ft.com/components/o-message).

```jsx
const { Message } = require('@financial-times/n-conversion-forms/components');
<Message isError=true message=flash.message />
```

### Options

+ `isHidden`: boolean - Whether the message is hidden by default/on page load.
+ `name`: string - The name for this message that gets added to the `data-message-name` attribute.
+ `isError`: boolean - Use the `Error` origami styles for this message.
+ `isInform`: boolean - Use the `Success` origami styles for this message.
+ `isNotice`: boolean - Use the `Notice` origami styles for this message.
+ `isSuccess`: boolean - Use the `Success` origami styles for this message.
+ `title`: string - The title for this message.
+ `message`: string - The main content for this message.
+ `additional`: Array - An array of strings containing additional information.
+ `actions`: Array - An array containing the below config for the action buttons:
  + `link`: string - The link to go to when clicking the button.
  + `isSecondary`: boolean - Whether to render this button using secondary styling from [o-buttons](https://registry.origami.ft.com/components/o-buttons).
  + `text`: string - The text the user will see on the button.

## Package Change

Displays a link for users to click to change their currently selected package. If payment terms are supplied these will also be displayed.

```jsx
const { PackageChange } = require('@financial-times/n-conversion-forms/components');
<PackageChange currentPackage="Digital Trial" changePackageUrl="https://www.ft.com/buy/subscription/premiumdigital" />
```

### Options

+ `currentPackage`: string - Package name
+ `changePackageUrl`: string - Link to a place to change the package
+ `terms`: array - An array of objects that can have the following properties
  + `name`: string - Payment term name i.e. "annual"
  + `price`: string - Price of the payment term
  + `trialPrice`: string - Trial price of the term if applicable
  + `discount`: string - Displays a sale label on the term

## Payment term

Display payment terms for an offer with radio buttons for users to choose between.

```jsx
const { PaymentTerm } = require('@financial-times/n-conversion-forms/components');
<PaymentTerm options=options />
```
### Options

+ `options`: array - An array of objects that can have the following properties
  + `value`: string - Value to send when selected
  + `name`: string - Title of the payment term
  + `description`: string - Extra information about the term
  + `discount`: string - Displays a sale label on the term
  + `selected`: boolean - Set to true for the term to be selected

## Phone

Displays a phone field with o-forms styling and the name and id `primaryTelephone`

```jsx
const { Phone } = require('@financial-times/n-conversion-forms/components');
<Phone hasError=true isB2b=true />
```

### Options

+ `value`: string - Text to pre-populate the `lastname` field.
+ `hasError`: boolean - true - adds `o-forms-input--invalid` class.
+ `isDisabled`: boolean - true - disables the field.
+ `isB2b`: boolean - true - displays work email copy.
+ `pattern`: string - Pattern to be used for validation.

## Submit

A form submit button with o-button styling

```jsx
const { Submit } = require('@financial-times/n-conversion-forms/components');
<Submit isCentered=true label="Submit" />
```

### Options

+ `isCentered`: boolean - true - centers the button
+ `backButtonUrl`: string - URL of a back button to add next to the button
+ `backButtonText`: string - The text to display inside the back button. Defaults to "Back"
+ `id`: string - The ID of the button defaults to "submitButton"
+ `label`: string - Label to use for the button defaults to "Continue"
