import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const spanMessageByCountry = {
	GBR: <span className="o-forms-title__prompt">
			For newspaper delivery, we can only deliver to the ground floor, so if you live in an apartment, we’ll leave the newspaper at reception or by the entrance. We deliver in the early hours of the morning so our drivers won’t be able to contact you or ring your doorbell.
	</span>,
	USA: <span className="o-forms-title__prompt">
			Please note we cannot guarantee delivery of the newspaper to a specific location on your property, which also includes delivery to a specific floor/suite in a building. US Federal Law prohibits delivery of newspapers into a mailbox, except via a USPS mail carrier. If you prefer delivery to a mailbox, please either select the &quot;PO Box&quot; delivery option from the top of this form, or contact.
		<a href="https://help.ft.com/contact/"> FT Customer Care</a>
	</span>,
	CAN: <span className="o-forms-title__prompt">
			Please note we cannot guarantee delivery of the newspaper to a specific location on your property, which also includes delivery to a specific floor/suite in a building. If you prefer delivery by Canada Post, please either select the &quot;PO Box&quot; delivery option from the top of this form, or contact.
		<a href="https://help.ft.com/contact/"> FT Customer Care</a>
	</span>,
};

export function DeliveryInstructions({
	fieldId = 'deliveryInstructionsField',
	hasError = false,
	inputId = 'deliveryInstructions',
	maxlength = null,
	rows = null,
	isDisabled = false,
	placeholder = '',
	hasSignupSecurityNote = false,
	value = '',
	country = 'GBR'
}) {
	const textAreaWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--textarea',
		{ 'o-forms-input--invalid': hasError },
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
		defaultValue: value,
	};

	const signupSecurityNote = hasSignupSecurityNote && (
		<>
			Either add them to the Security Notes section at{' '}
			<a href="https://ft.com/myaccount">ft.com/myaccount</a> after purchase, or
			contact <a href="https://help.ft.com/contact/">FT Customer Care</a>.{' '}
		</>
	);

	const securityMessageByCountry = {
		GBR: <span className="o-forms-title__prompt">
				If your property requires security codes that will help our drivers deliver your newspaper safely, please do not add them here as they may be printed on your newspaper label. {signupSecurityNote}If you do add them here you do so at your own risk as these will appear on your label.
		</span>,
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
				{spanMessageByCountry[country]}
				{securityMessageByCountry[country]}
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
	hasSignupSecurityNote: PropTypes.bool,
	value: PropTypes.string,
	country: PropTypes.oneOf(['GBR', 'USA', 'CAN'])
};
