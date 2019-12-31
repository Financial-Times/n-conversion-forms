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
	isDisabled = false,
	value,
	additonalFieldInformation
}) {
	const selectWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError }
	]);
	const label = `Country${isB2b ? '/Region' : ''}`;
	const error = `Please select your country${isB2b ? '/region' : ''}`;
	const selectProps = {
		id: inputId,
		'aria-required': true,
		required: true,
		name: 'country',
		'data-trackable': 'field-country',
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
		<select {...selectProps}>
			<option value="">Please select a country{isB2b ? '/region' : ''}</option>
			{countries.map(country => country.label ? createOptGroup(country) : createOption(country))}
		</select>
	);

	const fieldErrorClassNames = classNames([
		'o-forms-input__error',
		{ 'additional-field-instructions__with-field-error': additonalFieldInformation }
	]);

	return (
		<label id={fieldId} className="o-forms-field js-unknown-user-field" data-validate="required">
			<span className="o-forms-title">
				<span className="o-forms-title__main">{label}</span>
			</span>
			<span className={selectWrapperClassName}>
				{createSelect(countries)}
				<span className={fieldErrorClassNames}>{error}</span>
					{additonalFieldInformation ? (
						<p className="additional-field-instructions">{additonalFieldInformation}</p>
					) : null}
			</span>
		</label>
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
	isDisabled: PropTypes.bool,
	value: PropTypes.string,
	additonalFieldInformation: PropTypes.string
};
