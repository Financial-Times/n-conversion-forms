import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function CompanyName ({
	fieldId = 'companyNameField',
	hasError = false,
	inputId = 'companyName',
	inputName = 'company',
	value = '',
	isDisabled = false,
	fieldLabel = 'Company name',
}) {
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	const inputProps = {
		type: 'text',
		id: inputId,
		name: inputName,
		placeholder: 'Enter your company name',
		autoComplete: 'organization',
		'data-trackable': 'company-name',
		'aria-required': 'true',
		required: true,
		disabled: isDisabled,
		defaultValue: value
	};

	return (
		<label
			id={fieldId}
			className="o-forms-field"
			data-validate="required"
			htmlFor={inputProps.id}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">{fieldLabel}</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input {...inputProps} />
				<span className="o-forms-input__error">Please enter your company name.</span>
			</span>
		</label>
	);
}

CompanyName.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	fieldLabel: PropTypes.string
};
