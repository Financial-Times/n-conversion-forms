import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getCountries } from '../utils/countries';

export function BillingCountry ({
	fieldId = 'billingCountryField',
	filterList = [],
	hasError = false,
	inputId = 'billingCountry',
	isDisabled = false,
	value
}) {
	const className = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		'js-unknown-user-field',
		{ 'o-forms--error': hasError }
	]);
	const props = {
		id: inputId,
		className: 'o-forms__select js-field__input js-item__value',
		'aria-required': true,
		required: true,
		name: inputId,
		'data-trackable': 'field-billing-country',
		disabled: isDisabled,
	};
	const countries = getCountries({ filter: filterList, value });

	const createOption = country => (
		<option key={country.code} value={country.code} selected={country.selected}>{country.name}</option>
	);
	const createOptGroup = country => (
		<optgroup key={country.label} label={country.label}>
			{country.countries.map(country => createOption(country))}
		</optgroup>
	);
	const createSelect = countries => (
		<select {...props}>
			<option value="" disabled>Please select a country</option>
			{countries.map(country => country.label ? createOptGroup(country) : createOption(country))}
		</select>
	);

	return (
		<div id={fieldId} className={className} data-ui-item="select" data-ui-item-name="billingCountry" data-ui-item-store-previous="true" data-validate="required">
			<label htmlFor={inputId} className="o-forms__label">Billing Country</label>
			{createSelect(countries)}
			<div className="o-forms__errortext">Please select your country</div>
		</div>
	);
}

BillingCountry.propTypes = {
	fieldId: PropTypes.string,
	filterList: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		label: PropTypes.string,
		name: PropTypes.string
	})),
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	isDisabled: PropTypes.bool,
	value: PropTypes.string
};
