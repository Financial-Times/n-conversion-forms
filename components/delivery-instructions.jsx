import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DeliveryInstructions ({
	fieldId = 'deliveryInstructionsField',
	hasError = false,
	inputId = 'deliveryInstructions',
	maxlength = null,
	rows = null,
	isDisabled = false,
	value = ''
}) {
	const divClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError }
	]);

	const maxLengthText = maxlength ? `(Max. ${maxlength} characters)` : '';
	const placeholder = `Enter instructions ${maxLengthText}:\u000a- Door colour, letterbox location\u000a- Placement i.e. letterbox delivery\u000a- Special handling i.e. place in plastic bag`;

	const textAreaProps = {
		type: 'text',
		id: inputId,
		name: inputId,
		...(maxlength && { maxLength: maxlength }),
		...(rows && { rows }),
		className: 'o-forms__text js-field__input js-item__value',
		'data-trackable': 'field-deliveryInstructions',
		placeholder,
		disabled: isDisabled,
		defaultValue: value
	};

	return (
		<div
			id={fieldId}
			className={divClassName}
			data-ui-item="form-field"
			data-ui-item-name="deliveryInstructions"
			data-validate="required"
		>
			<label htmlFor="deliveryInstructions" className="o-forms__label">Delivery instructions <small>(optional)</small></label>

			<div className="ncf__terms ncf__terms--small">
				These may be printed on your newspaper. Don’t add sensitive information like access codes. If you do so, it is at your own risk. To provide additional secure information, login to your account via FT.com.
			</div>

			<textarea {...textAreaProps} />

			<p>Please note that we can only deliver to the ground floor level of your property.</p>
		</div>
	);
}

DeliveryInstructions.propTypes = {
	hasError: PropTypes.bool,
	maxlength: PropTypes.string,
	rows: PropTypes.string,
	isDisabled: PropTypes.bool,
	value: PropTypes.string
};

export default DeliveryInstructions;
