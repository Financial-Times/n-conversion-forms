# n-conversion-forms

Contains HTML and CSS that's used within the conversion forms

[![CircleCI](https://circleci.com/gh/Financial-Times/n-conversion-forms.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-conversion-forms)

```bash
make install # install all dependencies
make run # build and start documentation app at http://local.ft.com:5005/
```

## Table of contents

* [Requirements](#requirements)
* [Usage](#usage)
* [Utilities](#utilities)
* [Contributing](#contributing)
* [Partials](docs/PARTIALS.md)

## Requirements

For installing dependencies, running the build process and the documentation app

* [Node](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Bower](https://bower.io/)

## Usage

This repository contains HTML and CSS that can be used in your projects.

### HTML

The `partials` directory contains [Handlebars](https://handlebarsjs.com/) template files. Use these as partials within your templates by looping over the files in the directory and register them with Handlebars

```js
Handlebars.registerPartial(fileName, fileContents);
```

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

### Password

```js
const password = new Password(document);
```

This utility's sole purpose (currently) is to enable the functionality behind the `Show password` checkbox that toggles whether the password is masked or not.

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

## Contributing

To contribute to this project, clone this repository locally and commit your code to a seperate branch. Please write unit tests for your code and run the linter before opening a pull-request.

```bash
make test # runs linter and unit tests
```

### Passing data to the demo components

Add any component properties under the key of the template you're adding/working on to [demos/data.json].
