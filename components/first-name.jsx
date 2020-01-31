import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function FirstName ({
	dataTrackable='field-name',
	errorText = 'Please enter your first name',
	fieldId = 'firstNameField',
	hasError = false,
	inputId = 'firstName',
	inputName,
	isDisabled = false,
	label = 'First name',
	placeHolder = 'Enter your first name',
	value = ''
}) {
	// Use inputId if inputName is not explicitly passed.
	inputName = inputName || inputId;

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">{label}</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id={inputId}
					name={inputName}
					placeholder={placeHolder}
					autoComplete="given-name"
					data-trackable={dataTrackable}
					aria-required="true" required
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">{errorText}</span>
			</span>
		</label>
	);
}

FirstName.propTypes = {
	dataTrackable: PropTypes.string,
	errorText: PropTypes.string,
	fieldId: PropTypes.string,
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	placeHolder: PropTypes.string,
	value: PropTypes.string,
};
