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
	placeholder = 'Please enter your company name',
	isRequired = true,
	isHidden = false,
	maxlength = 50,
}) {
	const divClassNames = classNames([
		'o-forms-field',
		{ 'o-forms-field--optional': !isRequired },
		{ ncf__hidden: isHidden },
	]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const inputProps = {
		type: 'text',
		id: inputId,
		name: inputName,
		placeholder: placeholder,
		autoComplete: 'organization',
		'data-trackable': 'company-name',
		'aria-required': isRequired,
		required: isRequired,
		disabled: isDisabled,
		defaultValue: value,
		maxlength
	};

	return (
		<label
			id={fieldId}
			className={divClassNames}
			data-validate="required"
			htmlFor={inputProps.id}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">{fieldLabel}</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input {...inputProps} />
				<span className="o-forms-input__error">
					Please enter your company name.
				</span>
			</span>
		</label>
	);
}

CompanyName.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	fieldLabel: PropTypes.string,
	isRequired: PropTypes.bool,
	isHidden: PropTypes.bool,
};
