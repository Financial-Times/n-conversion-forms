
import React from 'react';
import PropTypes from 'prop-types';

export function Debug ({
	isTest = false,
	showHelpers = false,
	links = {}
}) {
	// Strings are used rather than JSX as this component is injected into HTML
	// along with onclick handlers, styles and javascript. JSX will escape and
	// modify the HTML which we do not want. Once our applications are on JSX
	// entirely this component should be rethought.
	const testEnvironment = `
		<span class="ncf__debug-environment">
			<a class="ncf__button ncf__button--inverse ncf__debug-button--test" onclick="setTestEnvironment('off');"><strong>TEST</strong> relax you are using the test API</a>
		</span>
	`;
	const productionEnvironment = `
		<span class="ncf__debug-environment">
			<a class="ncf__button ncf__button--inverse ncf__debug-button--production" onclick="setTestEnvironment('on');"><strong>PRODUCTION</strong> careful you are using the production API</a>
		</span>
	`;
	const testCards = `
		<button id="ncf-copy-uk-visa" class="ncf__button ncf__button--inverse" onclick="copyToClipboard('ukVisa');" title="Copy UK Visa card number to clipboard">UK Visa</button>
		<button id="ncf-copy-us-visa" class="ncf__button ncf__button--inverse" onclick="copyToClipboard('usVisa');" title="Copy US Visa card number to clipboard">US Visa</button>
		<button id="ncf-copy-us-amex" class="ncf__button ncf__button--inverse" onclick="copyToClipboard('usAmex');" title="Copy US Amex card number to clipboard">US Amex</button>
	`;
	const linksString = Object.keys(links).map(link => `<a key=${link} class="ncf__button ncf__button--inverse ncf__link" href="${links[link]}">${link}</a>`);
	const helpers = `
		<span class="ncf__debug-helpers">
			<button class="ncf__button ncf__button--inverse" onclick="logout();" title="Logout and refresh">Logout</button>
			<button class="ncf__button ncf__button--inverse" onclick="fillForm();" title="Fill form with debug data">Fill</button>
			<button class="ncf__button ncf__button--inverse" onclick="fillForm(); submitForm();" title="Fill form with debug data and submit">Fill &amp; Submit</button>
			${isTest ? testCards : ''}
			${links.length ? linksString : ''}
		</span>
	`;
	const html = {__html: `${isTest ? testEnvironment : productionEnvironment}${showHelpers ? helpers : ''}`};
	const javascript = {__html: `
	var FORM_SELECTOR = 'form.ncf';
	var INPUT_SELECTOR = FORM_SELECTOR + ' input:not([type="checkbox"]):not([type="radio"])';
	var SELECT_SELECTOR = FORM_SELECTOR + ' select';
	var CHECKBOX_SELECTOR = FORM_SELECTOR + ' input[type="checkbox"]';
	var RADIO_SELECTOR = FORM_SELECTOR + ' input[type="radio"]';
	// This env var gets set in production. We use this when creating email addresses in case any
	// get into production so Membership know who to come to about deleting them.
	var SYSTEM_CODE = document.documentElement.getAttribute('data-next-app') || 'n-conversion-forms';

	var debugData = {
		billingCountry: 'GBR',
		billingPostcode: 'EC4M9BT',
		country: 'GBR',
		deliveryAddressLine1: 'delivery test1',
		deliveryAddressLine2: 'delivery test2',
		deliveryAddressLine3: 'delivery test3',
		deliveryCity: 'delivery city',
		deliveryCounty: 'delivery county',
		deliveryPostcode: 'EC4M9BT',
		email: SYSTEM_CODE + '-' + Date.now() + '@ftqa.org',
		firstName: 'Test',
		industry: 'DEF',
		lastName: 'Test',
		jobTitle: 'CEO',
		password: 'password123',
		position: 'AS',
		postCode: 'EC4M9BT',
		primaryTelephone: '0987654321',
		responsibility: 'ADL',
		ukVisa: '4111111111111111',
		usAmex: '378282246310005',
		usVisa: '4112344112344113'
	};

	function logout () {
		const options = {
			mode: 'no-cors',
			credentials: 'include'
		};
		fetch('https://www.ft.com/logout', options).then(function () {
			window.location.reload();
		});
	}

	function fillForm () {
		var changeEvent = document.createEvent('HTMLEvents');
		changeEvent.initEvent('change', false, true);

		var inputs = document.querySelectorAll(INPUT_SELECTOR + ', ' + SELECT_SELECTOR);
		inputs.forEach(function (input) {
			if (!/hidden/i.test(input.type)) {
				var value = debugData[input.name];
				input.value = value;
				input.dispatchEvent(changeEvent);
			}
		});
		var checkboxes = document.querySelectorAll(CHECKBOX_SELECTOR + ', ' + RADIO_SELECTOR);
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = true;
			checkbox.dispatchEvent(changeEvent);
		});
	}

	function submitForm () {
		document.querySelector(FORM_SELECTOR).submit();
	}

	function copyToClipboard (name) {
		var string = debugData[name];
		var textarea = document.createElement('textarea');
		textarea.value = string;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
	}

	function setTestEnvironment (state) {
		var flags = document.cookie.match('(^|[^;]+)\\\\s*next-flags\\\\s*=\\\\s*([^;]+)').pop();
		var flag = 'conversionSandbox%3A';
		flags = flags.replace(flag + 'on', '');
		flags = flags.replace(flag + 'off', '');
		document.cookie = 'next-flags=' + flags + '%2C' + flag + state + '; path=/; domain=.ft.com;';
		window.location.reload();
	}
	`};
	const style = {__html: `
	.ncf__debug-panel {
		position: absolute;
		background-color: #262a33;
		color: #ffffff;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10px;
		position: fixed;
		z-index: 1000;
		opacity: 0.8;
	}
	.ncf__debug-button--test {
		background-color: #008040;
	}
	.ncf__debug-button--production {
		background-color: #990000;
	}
	`};

	return (isTest || showHelpers) && (
		<React.Fragment>
			{/* Debug Panel for working with Conversion Forms */}
			{/* Style and scripts are inline to reduce the impact on production files */}
			<div className="ncf__debug-panel" dangerouslySetInnerHTML={html}></div>
			<script dangerouslySetInnerHTML={javascript}></script>
			<style dangerouslySetInnerHTML={style}></style>
		</React.Fragment>
	);
}

Debug.propTypes = {
	isTest: PropTypes.bool,
	showHelpers: PropTypes.bool,
	links: PropTypes.object
};
