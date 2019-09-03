# Partials

## Content

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
* [Delivey City/town](#delivery-city-town)
* [Delivery Information](#delivery-information)
* [Delivery Option](#delivery-option)
* [Delivery Start Date](#delivery-start-date)
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

## App Banner

Banner that appears on confirmation pages to inform the user of our App

```handlebars
{{> n-conversion-forms/partials/app-banner }}
```

## Billing country

Renders the billing country field.

```handlebars
{{> n-conversion-forms/partials/billing-country value="USA" filterList=countrylist }}
```

### Options

+ `value`: string - The name of the county.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms--error` class to display error.
+ `filterList`: object - list of country objects: `label`, `name`, `code`

## Billing postcode

Displays a billing postal code field with o-forms styling.

```handlebars
{{> n-conversion-forms/partials/billing-postcode value="EC4M9BT" isZipCode=true }}
```

### Options

+ `isDisabled`: boolean - true - disables the field.
+ `isZipCode`: boolean - true - `zip code` label - false - `post code`.
+ `pattern`: string - Pattern to be used for validation.
+ `value`: string - Text to pre-populate the field.

## Confirmation

Renders the subscription confirmation page.
Displayed cta and link are different for print only offers.

```handlebars
{{> n-conversion-forms/partials/confirmation isPrintOnly=true isTrial=true offer="Premium Digital & Print" email="test@example.com" details=details }}
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

```handlebars
{{> n-conversion-forms/partials/continue-reading  }}
```

### Options
+ `isEmbedded`: boolean - Sets links to reference top frame when embedded.
+ `quote`: string - Title displayed between the quote marks.
+ `link`: string - Location of the continue reading button.

## Country

Renders the country field.
NOTE: `isBillingCountry` flag is deprecated, use `billing-country` instead

```handlebars
{{> n-conversion-forms/partials/country value="USA" filterList=countrylist }}
```

### Options

+ `value`: string - The name of the county.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms--error` class to display error.
+ `filterList`: object - list of country objects: `label`, `name`, `code`
+ `isBillingCountry`: boolean - DEPRECATED, use billing-country instead.

## County

Renders the county field.

```handlebars
{{> n-conversion-forms/partials/county value="Somerset" hasError=true isDisabled=true }}
```

### Options

+ `value`: string - The name of the county.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms--error` class to display error.

## Customer Care

Renders a "contact customer support" page.

```handlebars
{{> n-conversion-forms/partials/customer-care header="Some header text" message="Contact us for something" }}
```

### Options
+ `header`: string - Custom header text. Defaults to "Sorry, this is not available online".
+ `message`: string - Custom message text, defaults to "Speak now to our Customer Care team to discuss your options".


## Decision Maker

Renders an inline yes / no radio group for users to enter if they are a decision maker in their company.

```handlebars
{{> n-conversion-forms/partials/decision-maker value=yes hasError=true }}
```

### Options
+ `value`: string - Pass 'yes' or 'no' to check an option, default is unchecked.
+ `hasError`: boolean - if true it adds `o-forms--error` class to display error.

## Delivery Address

Renders the 3 delivery address fields (line 1/2/3).

```handlebars
{{> n-conversion-forms/partials/delivery-address line1="10 Elm Street" line2="Apartment 1" hasError=true isDisabled=true }}
```

### Options

+ `values`: Array - An array containing the 3 lines of the address.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms--error` class to display error.

## Delivery City/town

Renders the delivery city/town field.

```handlebars
{{> n-conversion-forms/partials/delivery-city-town value="Bath" hasError=true isDisabled=true }}
```

### Options

+ `value`: string - The name of the city or town.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms--error` class to display error.

## Delivery Instructions

Renders the delivery instructions text area.

```handlebars
{{> n-conversion-forms/partials/delivery-instructions value="Leave on the front porch." hasError=true isDisabled=true }}
```

### Options

+ `maxlength`: string - The maximum number of characters to allow in this field.
+ `rows`: string - The number of rows to render this textarea with.
+ `value`: string - The delivery instructions.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms--error` class to display error.

## Delivery Option

Display delivery options with radio buttons for users to choose between.

```handlebars
{{> n-conversion-forms/partials/delivery-option options=options }}
```

### Options

+ `isSingle`: boolean - Whether there is only one single option being presented.
+ `options`: array - An array of objects that can have the following properties.
  + `value`: string - Value to send when selected.
  + `isSelected`: boolean - Set to true for the term to be selected.

## Delivery postcode

Displays a post code field with o-forms styling.

```handlebars
{{> n-conversion-forms/partials/delivery-postcode value="EC4M9BT" isZipCode=true }}
```
### Options

+ `isDisabled`: boolean - true - disables the field.
+ `isZipCode`: boolean - true - `zip code` label - false - `post code`.
+ `pattern`: string - Pattern to be used for validation.
+ `value`: string - Text to pre-populate the field.

## Delivery Start Date

Renders a date field with a given start date (and accompanying copy).

```handlebars
{{> n-conversion-forms/partials/delivery-start-date value="2019-02-16" date="Saturday 16th February 2019" hasError=true isDisabled=true }}
```

### Options

+ `value`: string - The date in `YYYY-MM-DD` format.
+ `min`: string - The earliest start date in `YYYY-MM-DD` format.
+ `max`: string - The latest start date in `YYYY-MM-DD` format.
+ `date`: string - The date in `dddd Do MMMM YYYY` format.
+ `isDisabled`: boolean - Whether the field is disabled or not.
+ `hasError`: boolean - If true it adds `o-forms--error` class to display error.

## Fieldset

Renders a fieldset.

### Options

+ `descriptor`: string - Text used to describe this set of fields.
+ `legend`: string - Text to display in the `fieldset`'s `legend` element. Not passing this in won't render this element.
+ `hideLegend`: boolean - Whether to visibly show the `legend` or not.
+ `headingLevel`: string - The heading level to use when the `header` inline partial (see below) is used.
+ `name`: string - The value for the `fieldset`'s `name` attribute.

### Inline Partials

#### header

This is useful for cases where you'd want to pass in markup to use within the header element. For example, you may want to specify a more accessibility friendly header as follows:

```handlebars
{{#> n-conversion-forms/partials/fieldset headingLevel="h1" legend="Details" hideLegend="true" }}
  {{#*inline "header"}}
    Details<span class="o-normalise-visually-hidden"> (page 1 of 3)</span>
  {{/inline}}
{{/ n-conversion-forms/partials/fieldset }}
```

*NB*: The `headingLevel` option is required in order for this to work.

#### fields

The form fields to be displayed in this fieldset.

```handlebars
{{#> n-conversion-forms/partials/fieldset }}
  {{#*inline "fields"}}
    {{> n-conversion-forms/partials/email value='test@example.com' }}
  {{/inline}}
{{/ n-conversion-forms/partials/fieldset }}
```

## firstname

A form field for adding a user's first name.

### Options

+ `value`: string - Text to pre-populate the `firstname` field.
+ `hasError`: boolean - true - adds `o-forms--error` class
+ `isDisabled`: boolean - true - disables the form field

```handlebars
{{> n-conversion-forms/partials/firstname value=John }}
```

## lastname

A form field for adding a user's last name.

### Options

+ `value`: string - Text to pre-populate the `lastname` field.
+ `hasError`: boolean - true - adds `o-forms--error` class
+ `isDisabled`: boolean - true - disables the field

```handlebars
{{> n-conversion-forms/partials/lastname value=Smith hasError=true isDisabled=true }}
```

## licence-confirmation

Confirmation page for subscribing to a company licence.

### Options

+ `isEmbedded`: boolean - Sets links to reference top frame when embedded
+ `isTrial`: boolean - Is the licence a trial or not
+ `duration`: string - How long the licence will last for

```handlebars
{{> n-conversion-forms/partials/licence-confirmation isTrial=true }}
```

## licence-header

Header copy for licence pages.

### Options

+ `isTrial`: boolean - Is the licence a trial or not
+ `displayName`: string - Name of the company licence is for
+ `welcomeText`: string - Form welcome text

```handlebars
{{> n-conversion-forms/partials/licence-header isTrial=false displayName="IBM" welcomeText="Join our FT.com licence" }}
```

## Loader

A full screen loading overlay.

### Options

+ `showLoader`: boolean - Whether to show the loader by default/on page load.
+ `title`: string - The title of the message shown underneath the loading spinner.

### Inline Partials

You can pass in HTML (additional to the `title`) using [partial block syntax](https://handlebarsjs.com/partials.html#partial-block) as follows:

```handlebars
{{> n-conversion-forms/partials/loader}}
  <p>Some additional content<p>
{{/ n-conversion-forms/partials/loader}}
```

## Message

Displays a message on the page using [o-message](https://registry.origami.ft.com/components/o-message).

i.e `{{> n-conversion-forms/partials/message isError=true message=flash.message }}`

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

```handlebars
{{> n-conversion-forms/partials/payment-term options=options }}
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

```handlebars
{{> n-conversion-forms/partials/phone hasError=true isB2b=true }}
```

### Options

+ `value`: string - Text to pre-populate the `lastname` field.
+ `hasError`: boolean - true - adds `o-forms--error` class.
+ `isDisabled`: boolean - true - disables the field.
+ `isB2b`: boolean - true - displays work email copy.
+ `pattern`: string - Pattern to be used for validation.

## Postcode (DEPRECATED)

**This is deprecated and should no longer be used.
Please use `delivery-postcode`/`billing-postcode` instead.**

Displays a postal code field with o-forms styling.
Form id/name/label can be overridden via options below.

```handlebars
{{> n-conversion-forms/partials/postcode value="EC4M9BT" formPrefix="delivery" }}
```

### Options

+ `isBillingPostcode`: boolean - true - adds `Billing` label.
+ `isDisabled`: boolean - true - disables the field.
+ `isZipCode`: boolean - true - `Zip code` label - false - `Post Code`.
+ `pattern`: string - Pattern to be used for validation.
+ `value`: string - Text to pre-populate the field.

## Submit

A form submit button with o-button styling

```
{{> n-conversion-forms/partials/submit isCentered=true label="Submit" }}
```

### Options

+ `isCentered`: boolean - true - centers the button
+ `backButtonUrl`: string - URL of a back button to add next to the button
+ `id`: string - The ID of the button defaults to "submitButton"
+ `label`: string - Label to use for the button defaults to "Continue"
