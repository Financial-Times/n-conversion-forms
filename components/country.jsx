import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getCountries } from '../utils/countries';

export function Country({
	additionalFieldInformation,
	dataTrackable = 'field-country',
	fieldId = 'countryField',
	filterList = [],
	hasError = false,
	inputId = 'country',
	isB2b = false,
	isDisabled = false,
	isPlaceholderDisabled = false,
	value,
	label = `Country${isB2b ? '/Region' : ''}`,
	errorText = `Please select your country${isB2b ? '/region' : ''}`,
}) {
	const selectWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);
	const selectProps = {
		id: inputId,
		'aria-required': true,
		required: true,
		name: inputId,
		'data-trackable': dataTrackable,
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
		<select {...selectProps}>
			<option value="" disabled={isPlaceholderDisabled}>
				Please select a country{isB2b ? '/region' : ''}
			</option>
			{countries.map((country) =>
				country.label ? createOptGroup(country) : createOption(country)
			)}
		</select>
	);

	const fieldErrorClassNames = classNames([
		'o-forms-input__error',
		{
			'additional-field-information__with-field-error':
				additionalFieldInformation,
		},
	]);

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={selectProps.id}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">{label}</span>
			</span>
			<span className={selectWrapperClassName}>
				{createSelect(countries)}
				<span className={fieldErrorClassNames}>{errorText}</span>
				{additionalFieldInformation ? (
					<p className="additional-field-information">
						{additionalFieldInformation}
					</p>
				) : null}
			</span>
		</label>
	);
}

Country.propTypes = {
	additionalFieldInformation: PropTypes.node,
	dataTrackable: PropTypes.string,
	errorText: PropTypes.string,
	fieldId: PropTypes.string,
	filterList: PropTypes.arrayOf(PropTypes.string),
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	isB2b: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isPlaceholderDisabled: PropTypes.bool,
	label: PropTypes.string,
	value: PropTypes.string,
};
