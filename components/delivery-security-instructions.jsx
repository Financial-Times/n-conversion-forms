import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliverySecurityInstructions ({
	fieldId = 'deliverySecurityInstructionsField',
	hasError = false,
	inputId = 'deliverySecurityInstructions',
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
	const defaultPlaceholder = 'Please enter any secure information here, e.g. security gate access codes';

	const textAreaProps = {
		id: inputId,
		name: inputId,
		...(maxlength && { maxLength: maxlength }),
		...(rows && { rows }),
		'data-trackable': 'field-deliverySecurityInstructions',
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
				<span className="o-forms-title__main">Security instructions</span>
			</span>

			<span className={textAreaWrapperClassNames}>
				<textarea {...textAreaProps} />
			</span>

			<span className='additional-field-information'>NB. Details supplied here will not appear on packaging.</span>
		</label>
	);
}

DeliverySecurityInstructions.propTypes = {
	fieldId : PropTypes.string,
	hasError: PropTypes.bool,
	inputId:  PropTypes.string,
	maxlength: PropTypes.number,
	rows: PropTypes.number,
	isDisabled: PropTypes.bool,
	value: PropTypes.string,
	placeholder: PropTypes.string
};
