import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryInstructions ({
	fieldId = 'deliveryInstructionsField',
	hasError = false,
	inputId = 'deliveryInstructions',
	maxlength = null,
	rows = null,
	isDisabled = false,
	placeholder = '',
	value = ''
}) {
	const textAreaWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--textarea',
		{ 'o-forms-input--invalid': hasError }
	]);

	const maxLengthText = maxlength ? `(Max. ${maxlength} characters)` : '';
	const defaultPlaceholder = `Enter instructions ${maxLengthText}:\u000a- Door colour, letterbox location\u000a- Placement i.e. letterbox delivery\u000a- Special handling i.e. place in plastic bag`;

	const textAreaProps = {
		id: inputId,
		name: inputId,
		...(maxlength && { maxLength: maxlength }),
		...(rows && { rows }),
		'data-trackable': 'field-deliveryInstructions',
		placeholder: placeholder ? placeholder : defaultPlaceholder,
		disabled: isDisabled,
		defaultValue: value
	};

	return (
		<label
			id={fieldId}
			className="o-forms-field o-forms-field--optional"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Delivery instructions</span>
				<span className="o-forms-title__prompt">
					For newspaper delivery, we can only deliver to the ground floor, so if you live in an apartment, we’ll leave the newspaper at reception or by the entrance. We deliver in the early hours of the morning so our drivers won’t be able to contact you or ring your doorbell.
				</span>
				<span className="o-forms-title__prompt">
					If your property requires security codes that will help our drivers deliver your newspaper safely, please do not add them here as they may be printed on your newspaper label. If you do add them here you do so at your own risk as these will appear on your label.
				</span>
			</span>

			<span className={textAreaWrapperClassNames}>
				<textarea {...textAreaProps} />
			</span>
		</label>
	);
}

DeliveryInstructions.propTypes = {
	hasError: PropTypes.bool,
	maxlength: PropTypes.number,
	rows: PropTypes.number,
	isDisabled: PropTypes.bool,
	value: PropTypes.string
};
