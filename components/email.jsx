import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Email ({
	dataTrackable='field-email',
	description = 'Please enter an email address',
	errorText='This email address is not valid',
	fieldId = 'emailField',
	hasError = false,
	inputId = 'email',
	isB2b = false,
	isDisabled = false,
	label = '',
	placeHolder = 'Enter your email address',
	value = '',
	isEducationalLicence = false,
}) {
	const labelText = label || (isB2b && !isEducationalLicence ? 'Work email address' : 'Email address');
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			data-validate="required,email"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">{labelText}</span>
				{description &&
					<span className="o-forms-title__prompt">{description}</span>
				}
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="email"
					id={inputId}
					name={inputId}
					placeholder={placeHolder}
					autoComplete="email"
					data-trackable={dataTrackable}
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">{errorText}</span>
			</span>
		</label>
	);
}

Email.propTypes = {
	dataTrackable: PropTypes.string,
	describedBy: PropTypes.string,
	description: PropTypes.string,
	errorText: PropTypes.string,
	fieldId: PropTypes.string,
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	isB2b: PropTypes.bool,
	isDisabled: PropTypes.bool,
	label: PropTypes.string,
	placeHolder: PropTypes.string,
	readonly: PropTypes.bool,
	value: PropTypes.string,
	isEducationalLicence: PropTypes.bool,
};
