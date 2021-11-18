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
	value,
}) {
	const selectWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);
	const props = {
		id: inputId,
		className: 'js-field__input js-item__value',
		'aria-required': true,
		required: true,
		name: inputId,
		'data-trackable': 'field-billing-country',
		disabled: isDisabled,
	};
	const countries = getCountries({ filter: filterList, value });

	const createOption = (country) => (
		<option key={country.code} value={country.code} selected={country.selected}>
			{country.name}
		</option>
	);
	const createOptGroup = (country) => (
		<optgroup key={country.label} label={country.label}>
			{country.countries.map((country) => createOption(country))}
		</optgroup>
	);
	const createSelect = (countries) => (
		<select {...props}>
			<option value="" disabled>
				Please select a country
			</option>
			{countries.map((country) =>
				country.label ? createOptGroup(country) : createOption(country)
			)}
		</select>
	);

	return (
		<label
			id={fieldId}
			className="o-forms-field"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Billing Country</span>
			</span>
			<span className={selectWrapperClassName}>
				{createSelect(countries)}
				<span className="o-forms-input__error">Please select your country</span>
			</span>
		</label>
	);
}

BillingCountry.propTypes = {
	fieldId: PropTypes.string,
	filterList: PropTypes.arrayOf(PropTypes.string),
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	isDisabled: PropTypes.bool,
	value: PropTypes.string,
};
