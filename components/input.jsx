import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Input ({
	dataTrackable = 'generic-input',
	errorText = 'Please enter a value',
	fieldId = 'genericInputField',
	hasError = false,
	inputId = 'genericInput',
	inputName,
	isDisabled = false,
	isRequired = false,
	label = '',
	placeHolder = '',
	value = '',
	description = '',
	type = 'text',
	inputClassNames = '',
}) {
	// Use inputId if inputName is not explicitly passed.
	inputName = inputName || inputId;

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
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
				{description ? (
					<span className="o-forms-title__prompt">{description}</span>
				) : null}
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type={type}
					id={inputId}
					name={inputName}
					placeholder={placeHolder}
					data-trackable={dataTrackable}
					aria-required={isRequired}
					required={isRequired}
					disabled={isDisabled}
					defaultValue={value}
					className={inputClassNames}
				/>
				<span className="o-forms-input__error">{errorText}</span>
			</span>
		</label>
	);
}

Input.propTypes = {
	dataTrackable: PropTypes.string,
	errorText: PropTypes.string,
	fieldId: PropTypes.string,
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
	isDisabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	label: PropTypes.string,
	placeHolder: PropTypes.string,
	value: PropTypes.string,
	description: PropTypes.string,
	inputClassNames: PropTypes.string,
	type: PropTypes.arrayOf(PropTypes.oneOf(['text', 'hidden', 'number'])),
};
