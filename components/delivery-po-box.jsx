import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const message = {
	USA: 'A P.O. Box address is only deliverable by US Mail, and is subject to a delay of up to 3 business days. For delivery on the publication date, we recommend you enter a residential or business address.',
	CAN: 'A P.O. Box address is only deliverable by Canada Post, and is subject to a delay of up to 3 business days. For delivery on the publication day, we recommend you enter a residential or business address.',
};

export function DeliveryPOBox ({
	fieldId = 'deliveryPOBoxField',
	inputId = 'deliveryPOBox',
	hasError = false,
	value = '',
	isDisabled = false,
	isHidden = false,
	maxlength = 50,
	country = '',
}) {
	const labelClassNames = classNames([
		'o-forms-field',
		'ncf__validation-error',
		{ ncf__hidden: isHidden },
	]);

	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<label
			id={fieldId}
			className={labelClassNames}
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">P.O. Box</span>
				<span className="o-forms-title__prompt">{message[country]}</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id={inputId}
					name={inputId}
					data-trackable="field-deliveryPOBox"
					placeholder="e.g. PO Box 1033"
					maxLength={maxlength}
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
	fieldId: PropTypes.string,
	inputId: PropTypes.string,
	value: PropTypes.string,
	hasError: PropTypes.bool,
	isDisabled: PropTypes.bool,
	isHidden: PropTypes.bool,
	maxlength: PropTypes.number,
	country: PropTypes.string,
};
