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
* [Contributing](#contributing)

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

The utils can be used by including the individual file from within your own JS files.

```js
import MyModule from 'n-conversion-forms/utils/my-module';
```

## Contributing

To contribute to this project, clone this repository locally and commit your code to a seperate branch. Please write unit tests for your code and run the linter before opening a pull-request.

```bash
make test # runs linter and unit tests
```
