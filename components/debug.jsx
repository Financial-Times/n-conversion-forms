import React from 'react';
import PropTypes from 'prop-types';

export function Debug({ isTest = false, showHelpers = false, links = {} }) {
	// Strings are used rather than JSX as this component is injected into HTML
	// along with onclick handlers, styles and javascript. JSX will escape and
	// modify the HTML which we do not want. Once our applications are on JSX
	// entirely this component should be rethought.
	const testEnvironment = `
		<span class="ncf__debug-environment">
			<a class="ncf__button ncf__button--debug ncf__button--inverse ncf__debug-button--test" onclick="setTestEnvironment('off');"><strong>TEST</strong> relax you are using the test API</a>
		</span>
	`;
	const productionEnvironment = `
		<span class="ncf__debug-environment">
			<a class="ncf__button ncf__button--debug ncf__button--inverse ncf__debug-button--production" onclick="setTestEnvironment('on');"><strong>PRODUCTION</strong> careful you are using the production API</a>
		</span>
	`;
	const testCards = `
		<button id="ncf-copy-visa-checkout-card" class="ncf__button ncf__button--debug ncf__button--inverse" onclick="copyToClipboard('checkoutVisa');" title="Copy Checkout Visa test card number to clipboard">EU Visa (cvv:100)</button>
		<button id="ncf-copy-visa-checkout-3ds" class="ncf__button ncf__button--debug ncf__button--inverse" onclick="copyToClipboard('checkout3dsChallenge');" title="Copy Checkout challenge code -Checkout1!- to clipboard">EU 3ds challenge</button>
		<button id="ncf-copy-visa-chase-card" class="ncf__button ncf__button--debug ncf__button--inverse" onclick="copyToClipboard('chaseVisa');" title="Copy Chase card number to clipboard">US Visa (exp:1230,cvv:111)</button>
		<button id="ncf-link-checkout-cards" class="ncf__button ncf__button--debug ncf__button--inverse" onclick="window.open('https://www.checkout.com/docs/testing/test-card-numbers#Credit_cards', '_blank');" title="Checkout test cards documentation">Doc:Checkout</button>
	`;
	const linksString = Object.keys(links).map(
		(link) =>
			`<a key=${link} class="ncf__button ncf__button--inverse ncf__link" href="${links[link]}">${link}</a>`
	);
	const helpers = `
		<span class="ncf__debug-helpers">
			<button class="ncf__button ncf__button--debug ncf__button--inverse" onclick="logout();" title="Logout and refresh">Logout</button>
			<button class="ncf__button ncf__button--debug ncf__button--inverse" onclick="fillForm();" title="Fill form with debug data">Fill</button>
			<button class="ncf__button ncf__button--debug ncf__button--inverse" onclick="fillForm(); submitForm();" title="Fill form with debug data and submit">Fill &amp; Submit</button>
			${isTest ? testCards : ''}
			${links.length ? linksString : ''}
		</span>
	`;
	const html = {
		__html: `${isTest ? testEnvironment : productionEnvironment}${
			showHelpers ? helpers : ''
		}`,
	};
	const javascript = {
		__html: `
	var FORM_SELECTOR = 'form.ncf';
	var INPUT_SELECTOR = FORM_SELECTOR + ' input:not([type="checkbox"]):not([type="radio"])';
	var SELECT_SELECTOR = FORM_SELECTOR + ' select';
	var CHECKBOX_SELECTOR = FORM_SELECTOR + ' input[type="checkbox"]';
	var RADIO_SELECTOR = FORM_SELECTOR + ' input[type="radio"]';
	// This env var gets set in production. We use this when creating email addresses in case any
	// get into production so Membership know who to come to about deleting them.
	var SYSTEM_CODE = document.documentElement.getAttribute('data-next-app') || 'n-conversion-forms';
	var COUNTRY_CODE = window.FT && window.FT.country || 'GBR';

	var postcodeByCountry = {
		GBR: 'EC4M9BT',
		USA: '10028',
		CAN: 'K0E 9Z9'
	};

	var debugData = {
		billingCity: 'London',
		billingCountry: COUNTRY_CODE,
		billingPostcode: postcodeByCountry[COUNTRY_CODE],
		country: COUNTRY_CODE,
		deliveryAddressLine1: 'delivery test1',
		deliveryAddressLine2: 'delivery test2',
		deliveryAddressLine3: 'APT 2C',
		deliveryCity: 'delivery city',
		deliveryCounty: 'delivery county',
		deliveryPostcode: postcodeByCountry[COUNTRY_CODE],
		email: SYSTEM_CODE + '-' + Date.now() + '@ftqa.org',
		firstName: 'Test',
		industry: 'DEF',
		lastName: 'Test',
		jobTitle: 'CEO',
		organisation: 'ft-org',
		password: 'password123',
		position: 'AS',
		postCode: postcodeByCountry[COUNTRY_CODE],
		primaryTelephone: '0987654321',
		responsibility: 'ADL',
		ukVisaWorldpay: '4111111111111111',
		usAmex: '378282246310005',
		usVisaWorldpay: '4112344112344113',
		checkoutVisa: '4242424242424242',
		checkout3dsChallenge: 'Checkout1!',
		chaseVisa: '4011361100000010',
		verificationEmail: SYSTEM_CODE + '-' + Date.now() + '@ftqa.org',
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
			if (!/hidden/i.test(input.type) && input.disabled === false) {
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
	`,
	};
	const style = {
		__html: `
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
	.ncf__button--debug {
		padding: 0px 5px;
	}
	`,
	};

	return (
		(isTest || showHelpers) && (
			<React.Fragment>
				{/* Debug Panel for working with Conversion Forms */}
				{/* Style and scripts are inline to reduce the impact on production files */}
				<div className="ncf__debug-panel" dangerouslySetInnerHTML={html}></div>
				<script dangerouslySetInnerHTML={javascript}></script>
				<style dangerouslySetInnerHTML={style}></style>
			</React.Fragment>
		)
	);
}

Debug.propTypes = {
	isTest: PropTypes.bool,
	showHelpers: PropTypes.bool,
	links: PropTypes.object,
};
