# Partials

## Content

* [Message](#message)

## Message

Displays a message on the page using [o-message](https://registry.origami.ft.com/components/o-message).

i.e `{{> n-conversion-forms/partials/message isError=true message=flash.message }}`

### Options

#### Type:

* Notice: boolean - isNotice=true
* Alert: default

### Status:

* Error: boolean - isError=true
* Success: boolean - isSuccess=true
* Inform: boolean - isInform=true - default

### Title:

* messageTitle: string - messageTitle="The title of the message". Optional.

### Message:

* message: string - message. Required.

### Additional message:

`{ additional: ['Allows an additional message'] }`

* additional: array of strings - additional=additional. Optional.

### Actions

Allows for two types of styles:

* button-style: o-message__actions__primary
* link-style: o-message__actions__secondary

* actions: Optional. Array of objects containing the following properties:

Required if you have actions.
* link: url=https://ft.com.
* text: string=FT.com.
* isSecondary: boolean.
