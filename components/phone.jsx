import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

export function Phone({
	hasError = false,
	isB2b = false,
	isDisabled = false,
	isRequired = true,
	value = '',
	pattern = '',
	fieldId = 'primaryTelephoneField',
	inputId = 'primaryTelephone',
	inputName = 'primaryTelephone',
	dataTrackable = 'field-phone',
	isEducationalLicence = false,
}) {
	const labelText =
		isB2b && !isEducationalLicence ? 'Work phone number' : 'Phone number';
	const descriptionId = 'phone-description';
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const fieldTitleClassName = classNames([
		'o-forms-title',
		{ 'o-forms-field--optional': !isRequired },
	]);

	return (
		<label
			id={fieldId}
			htmlFor={inputId}
			className="o-forms-field ncf__validation-error"
			data-validate="required,number"
		>
			<span className={fieldTitleClassName}>
				<span className="o-forms-title__main">{labelText}</span>
				<span className="o-forms-title__prompt">
					We need this for security purposes. We&apos;ll never send anything
					without consent (Use numbers only)
				</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="tel"
					id={inputId}
					name={inputName}
					placeholder="Enter your phone number"
					autoComplete="tel"
					minLength="5"
					maxLength="15"
					data-trackable={dataTrackable}
					aria-describedby={descriptionId}
					aria-required={isRequired}
					required={isRequired}
					pattern={pattern}
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">
					This phone number is not valid
				</span>
			</span>
		</label>
	);
}

Phone.propTypes = {
	hasError: propTypes.bool,
	isB2b: propTypes.bool,
	isDisabled: propTypes.bool,
	value: propTypes.string,
	pattern: propTypes.string,
	fieldId: propTypes.string,
	inputId: propTypes.string,
	inputName: propTypes.string,
	dataTrackable: propTypes.string,
	isEducationalLicence: propTypes.bool,
};
