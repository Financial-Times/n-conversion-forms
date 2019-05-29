# Partials

## Content

* [Fieldset](#fieldset)
* [Firstname](#firstname)
* [Lastname](#lastname)
* [Header](#header)
* [Loader](#loader)
* [Message](#message)

## Fieldset

Renders a fieldset.

### Options

+ `descriptor`: string - Text used to describe this set of fields.
+ `legend`: string - Text to display in the `fieldset`'s `legend` element. Not passing this in won't render this element.
+ `hideLegend`: boolean - Whether to visibly show the `legend` or not.
+ `headingLevel`: string - The heading level to use when the `header` inline partial (see below) is used.
+ `name`: string - The value for the `fieldset`'s `name` attribute.

### Inline Partials

#### fieldset

The form fields to be displayed in this fieldset.

```handlebars
{{#> n-conversion-forms/partials/fieldset }}
  {{#*inline "fields"}}
    {{> n-conversion-forms/partials/email value='test@example.com' }}
  {{/inline}}
{{/ n-conversion-forms/partials/fieldset }}
```
#### firstname

A form field for adding a user's first name.

##### Options

+ `value`: string - Text to pre-populate the `firstname` field.
+ `hasError`: boolean - true - adds `o-forms--error` class

{{> n-conversion-forms/partials/firstname value=John }}

#### lastname

A form field for adding a user's last name.

##### Options

+ `value`: string - Text to pre-populate the `lastname` field.
+ `hasError`: boolean - true - adds `o-forms--error` class
+ `isDisabled`: boolean - true - disables the field

```handlebars
{{> n-conversion-forms/partials/lastname value=Smith hasError=true isDisabled=true }}
```

#### header

This is useful for cases where you'd want to pass in markup to use within the header element. For example, you may want to specify a more accessibility friendly header as follows:

```handlebars
{{#> n-conversion-forms/partials/fieldset headingLevel="h1" legend="Details" hideLegend="true" }}
  {{#*inline "header"}}
    <span class="o-normalise-visually-hidden"></span>Details<span class="o-normalise-visually-hidden"> (page 1 of 3)</span>
  {{/inline}}
{{/ n-conversion-forms/partials/fieldset }}
```

*NB*: The `headingLevel` option is required in order for this to work.

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
