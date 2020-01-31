import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Password ({
	unknownUser = false,
	hasError = false,
	pattern = null,
	isDisabled = false,
	fieldId = 'passwordField',
	inputId = 'password',
	inputName,
	label = 'Password',
	placeholder = 'Enter a password',
	description = 'Use 8 or more characters with a mix of letters, numbers & symbols',
	showDescription = true,
	hasShowPassword = true,
}) {
	// This is necessary to make this backward compatible with the Handlebars partial.
	const showPasswordId = inputId === 'password' ? 'showPassword' : `${inputId}-showPassword`;
	const showPasswordName = showPasswordId;
	// Use inputId if inputName is not explicitly passed.
	inputName = inputName || inputId;

	const fieldClassNames = classNames([
		'o-forms-field',
		'ncf__password-field',
		'ncf__validation-error',
		{
			'js-unknown-user-field': unknownUser
		}
	]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--password',
		'o-forms-input--checkbox',
		'o-forms-input--suffix',
		{
			'o-forms-input--invalid': hasError,
		}
	]);

	return (
		<div
			id={fieldId}
			className={fieldClassNames}
			data-validate="required,password"
		>

			<label htmlFor={inputId} className="o-forms-title">
				<span className="o-forms-title__main">
					{label}
				</span>
				{showDescription ?
					(<span className="o-forms-title__prompt">
						{description}
					</span>) : null}
			</label>

			<div className={inputWrapperClassNames}>
				<input
					type="password"
					id={inputId}
					name={inputName}
					placeholder={placeholder}
					autoComplete="new-password"
					data-trackable="field-password"
					aria-required="true" required
					pattern={pattern}
					disabled={isDisabled} />
				{hasShowPassword ?
					(<label className="ncf__password-field--show-password">
						<input type="checkbox" id={showPasswordId} name={showPasswordName} data-trackable="field-show-password" aria-label="Show password" />
						<span className="o-forms-input__label" aria-hidden="true">Show password</span>
					</label>) : null}

				<div className="o-forms-input__error">Please enter a valid password</div>
			</div>
		</div>
	);
}

Password.propTypes = {
	unknownUser: PropTypes.bool,
	hasError: PropTypes.bool,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	fieldId: PropTypes.string,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
};
