// Customise Zuora error messages
// https://knowledgecenter.zuora.com/CA_Commerce/T_Hosted_Commerce_Pages/B_Payment_Pages_2.0/N_Error_Handling_for_Payment_Pages_2.0

// AKA ZUORA KEY
const _fields = {
	creditCardNumber: 'Card Number',
	creditCardExpirationYear: 'Expiry Date',
	creditCardExpirationMonth: 'Expiry Date',
	cardSecurityCode: 'Security Code',
	creditCardHolderName: 'Cardholder Name',
	agreement_checkbox: 'Authorisation',
	bankAccountNumber: 'Account Number',
	bankAccountName: 'Account Holder Name',
	bankCode: 'Sort Code',
	bankName: 'Bank Name',
	firstName: 'First Name',
	lastName: 'Last Name',
	streetNumber: 'House Number',
	streetName: 'Street Name',
	city: 'City/Town',
	state: 'State',
	postalCode: 'Post Code',
	error: 'Validation failed on server-side. Please check your input values.' //generic server error
};

// AKA ZUORA MESSAGE
// used in Zuora errorField
const _messages = {
	NullValue: 'is required',
	InvalidFormat: 'is invalid',
	ExceededMaxLength: 'is too long'
};

// AKA ZUORA CODE
// used in Zuora errorCode
const _codes = {
	HostedPageFieldValidationError: 'One or more field validation errors have occurred',
	GatewayTransactionError: 'One or more gateway transaction errors have occurred',
	BusinessValidationError: 'One or more business validation errors have occurred',
	Invalid_Security: 'Security validation error',
	Invalid_Request_Method: 'The Payment Page form was submitted using an invalid method',
	Invalid_PaymentGateway: 'The paymentGateway parameter specified a gateway name that does not exist',
	GeneralSystemError: 'One or more general system errors have occurred',
	Decryption_Error: 'An error happened during decryption'
};

// when the client-side credit card validation fails
const _cc_codes = {
	1: _messages['NullValue'], //001: Required field not completed
	2: _messages['InvalidFormat'], //002: Invalid card number
	3: 'does not match card type. Please try again.', //003: Invalid card type
	4: _messages['InvalidFormat'] //004: Invalid CVV number
};

const regexp = {
	fields: [
		{
			regexp: /card(.)*number/ig, // matches 'card' AND 'number' seperated by anything
			value: 'creditCardNumber'
		},
		{
			regexp: /expiry/ig, // matches 'expiry' anywhere case insensitive
			value: 'creditCardExpirationYear'
		},
		{
			regexp: /security(.)*code/ig, // matches 'security' AND 'code' seperated by anything
			value: 'cardSecurityCode'
		}
	],
	errors: [
		{
			regexp: /invalid/ig, // matches 'invalid' anywhere case insensitive
			value: 'InvalidFormat'
		},
		{
			regexp: /null|required/ig, // matches 'null' or 'required' anywhere case insensitive
			value: 'NullValue'
		}
	]
};

/**
 * Tests a string against a range of regexes.
 *
 * @param {String} string The string to test for match.
 * @param {Array} regexArray An array of regexes to test against the string.
 */
function testRegexArrayForMatch (string, regexArray) {
	let match;
	for (let _case of regexArray) {
		if (_case.regexp.test(string)) {
			match = _case.value;
			break;
		}
	};
	return match;
}

/**
 * Retrieves the string representation of a Zuora field name,
 *
 * @param {String} key The key to get the field name for.
 *
 * @example
 * getFieldByKey('firstName'); // 'First Name'
 */
function getFieldByKey (key) {
	return (key && _fields[key]) ? _fields[key] : null;
}

/**
 * Translates a Zuora error message to a reason that can be used for displaying to the user.
 *
 * @param {String} message The message to get the value for.
 *
 * @example
 * getReasonByMessage('InvalidFormat'); // 'is invalid'
 */
function getReasonByMessage (message) {
	return (message && _messages[message]) ? _messages[message] : null;
}

/**
 * Translates a Zuora error reason code to a reason that can be displayed to the user.
 *
 * @param {String} code The code to get the value for.
 *
 * @example
 * getReasonByCode('Invalid_Security'); // 'Security validation error'
 */
function getReasonByCode (code) {
	if (isCreditCardValidationCode(code)) {
		code = parseInt(code); // '001' -> 1
		return (code && _cc_codes[code]) ? _cc_codes[code] : null;
	} else {
		return (code && _codes[code]) ? _codes[code] : null;
	}
}

/**
 * Whether a Zuora credit card validation code is valid
 *
 * @param {string} code - The CC validation code to test.
 *
 * @example Valid codes:
 * 001,002,003,004
 */
function isCreditCardValidationCode (code) {
	let _int;
	try {
		_int = parseInt(code, 0);
	}
	catch (e) {
		return false;
	}
	return (_int > 0 && _int < 5);
}

/**
 * Generates a user friendly error message from the data we get back from Zuora.
 *
 * @param {String} key Zuora field name
 * @param {String} code Zuora error code
 * @param {String} message Zuora error message
 */
function generateCustomErrorMessage (key, code, message) {
	const field = getFieldByKey(key) || 'Field';
	let reason = '';

	if (code && getReasonByCode(code)) {
		reason = getReasonByCode(code);
	}
	else {
		reason = getReasonByMessage(message) || 'is invalid';
	}

	return `${field} ${reason}`;
}

/**
 * Extracts a user friendly error message from a Zuora error string.
 *
 * @param {String} string The string to extract the error from.
 */
function extractFieldAndErrorFromString (string) {
	const field = testRegexArrayForMatch(string, regexp.fields);
	const message = testRegexArrayForMatch(string, regexp.errors);

	// always return an then check for values before rendering
	return {
		key: field,
		message: generateCustomErrorMessage(field, null, message)
	};
}

module.exports = {
	extractFieldAndErrorFromString,
	generateCustomErrorMessage,
	getReasonByCode
};
