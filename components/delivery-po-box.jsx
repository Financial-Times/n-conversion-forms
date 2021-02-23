import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryPOBox({
	hasError = false,
	value = '',
	isDisabled = false,
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<label
			id="deliveryPOBoxField"
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor="deliveryPOBox"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">P.O. Box</span>
				<span className="o-forms-title__prompt">
					A P.O. Box address is only deliverable by US Mail, and is subject to a delay of up to 3 business days.
					For delivery on the publication date, we recommend you enter a residential or business address.
				</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id="deliveryPOBox"
					name="deliveryPOBox"
					data-trackable="field-deliveryPOBox"
					placeholder="e.g. PO Box 1033"
					maxLength={50}
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">
					Please enter a valid P.O. Box address
				</span>
			</span>
		</label>
	);
}

DeliveryPOBox.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	maxlength: PropTypes.number,
};
