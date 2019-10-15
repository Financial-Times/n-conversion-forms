import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

export default function Password ({
	unknownUser = false,
	hasError = false,
	pattern = null,
	isDisabled = false,
	fieldId = 'passwordField',
	inputId = 'password',
	inputName = 'password',
}) {

	const PasswordFieldClassNames = classNames([
		'o-forms o-forms--wide',
		'ncf__field',
		'js-field',
		{
			'o-forms--error': hasError,
			'js-unknown-user-field': unknownUser
		}
	]);

	return (
		<div
			id={fieldId}
			className={PasswordFieldClassNames}
			data-ui-item="form-field"
			data-ui-item-name="password"
			data-validate="required,password"
		>

			<label htmlFor={inputId} className="o-forms__label">Password</label>
			<small id="password-description" className="o-forms__additional-info">
				Use 8 or more characters with a mix of letters, numbers &amp; symbols
			</small>

			<div className="o-forms__affix-wrapper js-show-password">
				<input
					type="password"
					id={inputId}
					name={inputName}
					placeholder="Enter a password"
					className="no-mouseflow o-forms__text o-forms__text--suffixed js-field__input js-show-password__password-input js-item__value"
					autoComplete="new-password"
					data-trackable="field-password"
					aria-describedby="password-description"
					aria-required="true" required
					pattern={pattern}
					disabled={isDisabled} />
				<span className="o-forms__suffix">
					<input type="checkbox" id="showPassword" name="showPassword" className="o-forms__checkbox js-show-password__checkbox" data-trackable="field-show-password" />
					<label htmlFor="showPassword" className="o-forms__label">Show password</label>
				</span>
			</div>
			<div className="o-forms__errortext">Please enter a valid password</div>
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
};
