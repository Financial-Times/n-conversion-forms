import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryCounty ({
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
			id="deliveryCountyField"
			className="o-forms-field o-forms-field--optional"
			data-validate="required"
			htmlFor="deliveryCounty"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">County</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id="deliveryCounty"
					name="deliveryCounty"
					data-trackable="field-deliveryCounty"
					autoComplete="address-level3"
					placeholder="e.g. Somerset"
					maxLength={maxLength}
					disabled={isDisabled}
					defaultValue={value}
				/>
			</span>
		</label>
	);
}

DeliveryCounty.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool
};
