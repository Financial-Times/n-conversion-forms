import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryCity ({
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
			id="deliveryCityField"
			className="o-forms-field"
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
					maxLength={40}
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				/>
			</span>
		</label>
	);
}

DeliveryCity.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	maxlength: PropTypes.number
};
