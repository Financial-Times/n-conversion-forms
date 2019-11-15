import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getCountries } from '../utils/countries';

export function Country ({
	fieldId = 'countryField',
	filterList = [],
	hasError = false,
	inputId = 'country',
	isB2b = false,
	isBillingCountry = false,
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
	const itemName = isBillingCountry ? 'billingCountry' : 'country';
	const label = `${isBillingCountry ? 'Billing Country' : 'Country'}${isB2b ? '/Region' : ''}`;
	const error = `Please select your country${isB2b ? '/region' : ''}`;
	const props = {
		id: inputId,
		className: 'o-forms__select js-field__input js-item__value',
		'aria-required': true,
		required: true,
		name: isBillingCountry ? 'billingCountry' : 'country',
		'data-trackable': isBillingCountry ? 'field-billing-country' : 'field-country',
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
			<option value="">Please select a country{isB2b ? '/region' : ''}</option>
			{countries.map(country => country.label ? createOptGroup(country) : createOption(country))}
		</select>
	);

	return (
		<div id={fieldId} className={className} data-ui-item="select" data-ui-item-name={itemName} data-ui-item-store-previous="true" data-validate="required">
			<label htmlFor={inputId} className="o-forms__label">{label}</label>
			{createSelect(countries)}
			<div className="o-forms__errortext">{error}</div>
		</div>
	);
}

Country.propTypes = {
	fieldId: PropTypes.string,
	filterList: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		label: PropTypes.string,
		name: PropTypes.string
	})),
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	isB2b: PropTypes.bool,
	isBillingCountry: PropTypes.bool,
	isDisabled: PropTypes.bool,
	value: PropTypes.string
};
