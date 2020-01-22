import React from 'react';
import { Submit } from '../components/submit';

module.exports = {
	'accept-terms': {
		'isTransition': true,
		'transitionType': 'endOfTerm'
	},
	'billing-country': {
		'filterList': [
			{
				'code': 'GBR'
			},
			{
				'code': 'JPN'
			},
			{
				'code': 'USA'
			},
			{
				'code': 'FRA'
			}
		],
		'value': 'USA'
	},
	'billing-postcode': {
		'postcodeReference': 'postcode',
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
			{
				'code': 'GBR'
			},
			{
				'code': 'JPN'
			},
			{
				'code': 'USA'
			},
			{
				'code': 'FRA'
			}
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
		'rows': '5',
		'value': 'Foo bar baz'
	},
	'delivery-option': {
		'isSingle': true,
		'options': [
			{
				'value': 'PV',
				'isValidDeliveryOption': true
			},
			{
				'value': 'HD',
				'isSelected': true,
				'isValidDeliveryOption': true
			},
			{
				'value': 'EV',
				'isValidDeliveryOption': true
			}
		]
	},
	'delivery-postcode': {
		'value': 'EC4M9BT',
		'isZipCode': true
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
			'title': 'Hooray!'
		},
		'message': {
			'isError': true,
			'message': 'The quick brown fox jumped over the lazy dog!',
			'title': 'Hooray!',
			'additional': [
				'You can specify additional messages.'
			],
			'actions': [
				{
					'link': '#',
					'text': 'Button'
				},
				{
					'link': '#',
					'text': 'Text link',
					'isSecondary': true
				}
			]
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
					'selected': true,
					'isTrial': true
				},
				{
					'name': 'quarterly',
					'value': 'Test 2',
					'description': 'The <strong>quick</strong> brown fox<br />jumped over the lazy <a href=\'#\'>hare</a>.',
					'discount': '25%',
					'trialPrice': '£1.00',
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
		'payment-type': {
			'enableCreditcard': true,
			'enableDirectdebit': true,
			'enablePaypal': true,
			'enableApplepay': true
		},
		'postcode': {
			'value': 'EC4M9BT',
			'isBillingPostcode': true,
			'isZipCode': false
		},
		'progress-indicator': {
			'formData': [
				{
					'name': 'foo',
					'value': 'bar'
				}
			],
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
					'url': 'https://www.example.com/payment'
				}
			]
		}
	},
	'section': {
		'children': (<div>Section content</div>)
	},
	'submit': {
		'isCentered': true
	}
};
