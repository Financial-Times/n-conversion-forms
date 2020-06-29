import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function BillingCity ({
	hasError = false,
	value = '',
	isDisabled = false
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id="billingCityField"
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor="billingCity"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Billing city/town</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id="billingCity"
					name="billingCity"
					data-trackable="field-billingCity"
					autoComplete="address-level2"
					placeholder="e.g. Bath"
					maxLength={40}
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">Please enter a valid city or town</span>
			</span>
		</label>
	);
}

BillingCity.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	maxlength: PropTypes.number
};
