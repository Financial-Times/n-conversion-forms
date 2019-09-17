# Postcode

Adds functionality to the [delivery postcode partial](../PARTIALS.md#delivery-postcode) and [billing postcode partial](../PARTIALS.md#billing-postcode).

It allows for the retrieval of the correct terminology of postcode based on the country of the user and also updates any reference to postcode to the correct terminology when the user changes their country.

## Contents

* [Implementation](#implementation)
* [Methods](#methods)


## Implementation

```javascript
	const postcode = new Postcode(document, query);
```

| Parameter | Required | Description                   |
| --------- | -------- | ----------------------------- |
| document  | yes      | property of the window object |
| query     | no       | id of the field. Defaults to `.ncf #postCodeField` |

## Methods

* [changePostcodeReferenceForCountry](#changePostcodeReferenceForCountry)
* [getPostcodeReferenceByCountry](#getPostcodeReferenceByCountry)

### changePostcodeReferenceForCountry

Changes the delivery post code field label, placeholder and error message so that the correct terminology is used for the given country.

```javascript
	postcode.changePostcodeReferenceForCountry = 'USA';
```

| Parameter | Required | Example                   |
| --------- | -------- | ----------------------------- |
| Three letter ISO 3166-1 country code | yes | 'USA' -> 'Enter your zip code' |

### getPostcodeReferenceByCountry

Returns the correct terminology for the word postcode of the given country.

```javascript
	const postcode = postcode.getPostcodeReferenceByCountry('USA');
```

| Parameter   | Required | Description |
| ----------- | -------- | ----------- |
| countryCode | yes      | Three letter ISO 3166-1 country code |

#### Possible Responses:

* USA -> zip code
* CAN -> postal code
* Default -> post code
