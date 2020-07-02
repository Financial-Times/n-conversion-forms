import React from 'react';
import { Submit } from '../components/submit';

export default {
	'accept-terms': {
		'isTransition': true,
		'transitionType': 'endOfTerm',
		'isSignup': true,
		'isPrintProduct': true,
		'isTrial': true
	},
	'billing-country': {
		'filterList': [
			'GBR', 'JPN', 'USA', 'FRA'
		],
		'value': 'USA'
	},
	'billing-postcode': {
		'postcodeReference': 'billing postcode',
		'value': 'EC4M9BT',
		'isZipCode': true
	},
	'confirmation': {
		'isPrintOnly': false,
		'offer': 'Premium Digital & Print',
		'email': 'test@example.com',
		'details': [
			{
				'title': 'Trial charge',
				'data': '£XXXX'
			},
			{
				'title': 'Trial end date',
				'data': 'June 11th, 2019',
				'description': 'You\'ll be billed per month from this date'
			},
			{
				'title': 'Annual payment',
				'data': '£XXXX'
			},
			{
				'title': 'Renewal date',
				'data': 'June 11th, 2019'
			},
			{
				'title': 'Payment method',
				'data': 'Credit Card'
			}
		]
	},
	'continue-reading': {
		'quote': 'The quick brown fox jumped over the lazy hare',
		'link': 'https://google.com'
	},
	'country': {
		'filterList': [
			'GBR', 'JPN', 'USA', 'FRA'
		],
		'value': 'USA'
	},
	'customer-care': {
		'header': 'We don\'t know what happened',
		'message': 'You should probably call us.'
	},
	'debug': {
		'isTest': true,
		'showHelpers': true,
		'links': {
			'Google': 'https://www.google.com'
		}
	},
	'decision-maker': {
		'value': 'yes'
	},
	'delivery-address': {
		'line1': '20 Elm Street',
		'line2': 'Apartment 2'
	},
	'delivery-city': {
		'value': 'Bath'
	},
	'delivery-county': {
		'value': 'Somerset'
	},
	'delivery-instructions': {
		'maxlength': 200,
		'rows': 5,
		'value': 'Foo bar baz',
		'hasSignupSecurityNote': true
	},
	'delivery-option': {
		'isSingle': true,
		'options': [
			{
				'value': 'PV',
				'isValidDeliveryOption': true,
				'isSelected': true
			},
			{
				'value': 'HD',
				'isSelected': true,
				'isValidDeliveryOption': true
			},
			{
				'value': 'EV',
				'isValidDeliveryOption': true,
				'isSelected': false
			}
		]
	},
	'delivery-postcode': {
		'value': 'EC4M9BT',
		'isZipCode': true,
		'postcodeReference': 'delivery postcode'
	},
	'delivery-start-date': {
		'hasError': false,
		'date': '16th February 2019',
		'min': '2019-02-16',
		'max': '2019-04-13',
		'value': '2019-02-16'
	},
	'error-page': {
		'header': 'Something went wrong',
		'message': 'Please call us and we can help.'
	},
	'email': {
		'showConfirm': true
	},
	'fieldset': {
		'children': (<div className="o-forms__group">Testing</div>),
		'legend': 'The legend is great',
		'isHeader': true,
		'descriptor': 'The descriptor is also here'
	},
	'form': {
		'children': (<Submit />),
	},
	'licence-confirmation': {
		'isTrial': true,
		'duration': '30 day'
	},
	'licence-header': {
		'displayName': 'Company',
		'isTrial': true,
		'welcomeText': 'The quick brown fox jumped over the lazy hare'
	},
	'loader': {
		'title': 'Hooray Loader!',
		'showLoader': true
	},
	'message': {
		'isError': true,
		'message': 'The quick brown fox jumped over the lazy dog!',
		'title': 'Hooray Message! ',
		'additional': ['You can specify additional messages.'],
		'actions': [
			{ 'link': '#', 'text': 'Button' },
			{ 'link': '#', 'text': 'Text link', 'isSecondary': true }
		]
	},
	'payment-type': {
		'enableCreditcard': true,
		'enableDirectdebit': true,
		'enablePaypal': true,
		'enableApplepay': true
	},
	'package-change': {
		'changePackageUrl': '/foo',
		'currentPackage': 'Digital',
		'terms': [
			{
				'name': 'annual',
				'price': '£1000',
				'weeklyPrice': '£4.5'
			},
			{
				'name': 'quarterly',
				'price': '£100'
			},
			{
				'name': 'monthly',
				'price': '£10',
				'discount': '25%'
			},
			{
				'name': 'trial',
				'trialPrice': '£1'
			}
		]
	},
	'payment-term': {
		'options': [
			{
				'name': 'annual',
				'value': 'Test 1',
				'description': 'The <strong>quick</strong> brown fox<br />jumped over the lazy <a href=\'#\'>hare</a>.',
				'trialPrice': '£1.00',
				'price': '£900.00',
				'selected': true,
				'isTrial': true
			},
			{
				'name': 'quarterly',
				'value': 'Test 2',
				'description': 'The <strong>quick</strong> brown fox<br />jumped over the lazy <a href=\'#\'>hare</a>.',
				'discount': '25%',
				'trialPrice': '£1.00',
				'price': '£400.00',
				'isTrial': true
			},
			{
				'name': 'monthly',
				'value': 'Test 3',
				'price': '$100.00',
				'description': 'The <strong>quick</strong> brown fox<br />jumped over the lazy <a href=\'#\'>hare</a>.'
			}
		]
	},
	'postcode': {
		'value': 'EC4M9BT',
		'isBillingPostcode': true,
		'isZipCode': false
	},
	'progress-indicator': {
		'items': [
			{
				'name': 'Details',
				'isComplete': true,
				'url': 'https://www.example.com/details'
			},
			{
				'name': 'Preferences',
				'isComplete': true,
				'url': 'https://www.example.com/preferences'
			},
			{
				'name': 'Print',
				'isCurrent': true,
				'url': 'https://www.example.com/print'
			},
			{
				'name': 'Payment',
				'isComplete': false,
				'url': 'https://www.example.com/payment'
			}
		]
	},
	'section': {
		'children': (<div>Section content</div>)
	},
	'submit': {
		'isCentered': true
	},
	'trial-banner': {
		'trialDuration': '40 Days'
	}
};
