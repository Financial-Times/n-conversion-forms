import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryCity ({
	hasError = false,
	value = '',
	isDisabled = false,
	maxLength
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id="deliveryCityField"
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor="deliveryCity"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">City/town</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id="deliveryCity"
					name="deliveryCity"
					data-trackable="field-deliveryCity"
					autoComplete="address-level2"
					placeholder="e.g. Bath"
					aria-required="true"
					maxLength={maxLength}
					required
					disabled={isDisabled}
					defaultValue={value}
				/>
			<span className="o-forms-input__error">Please enter a valid city or town</span>
			</span>
		</label>
	);
}

DeliveryCity.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	maxlength: PropTypes.number,
};
