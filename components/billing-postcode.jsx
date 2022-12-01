import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function BillingPostcode({
	postcodeReference,
	value = '',
	pattern = null,
	isDisabled = false,
	hasError = false,
	isHidden = false,
	fieldId = 'billingPostcodeField',
	inputId = 'billingPostcode',
	inputName = 'billingPostcode',
}) {
	const BillingPostcodeFieldClassNames = classNames([
		'o-forms-field',
		{ ncf__hidden: isHidden },
	]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<label
			id={fieldId}
			className={BillingPostcodeFieldClassNames}
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					Billing <span data-reference="postcode">{postcodeReference}</span>
				</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id={inputId}
					name={inputName}
					defaultValue={value}
					placeholder={`Enter your ${postcodeReference}`}
					autoComplete="postal-code"
					data-trackable="billing-postcode"
					aria-required="true"
					required
					pattern={pattern}
					disabled={isDisabled}
				/>
				<span className="o-forms-input__error">
					Please enter a valid{' '}
					<span data-reference="postcode">{postcodeReference}</span>.
				</span>
			</span>
		</label>
	);
}

BillingPostcode.propTypes = {
	postcodeReference: PropTypes.string.isRequired,
	value: PropTypes.string,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool,
	fieldId: PropTypes.string,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
};
