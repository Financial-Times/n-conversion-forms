import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { identifyFTShippingZone } from '../helpers/supportedCountries';

const spanMessageByCountry = {
	GBR: (
		<span className="o-forms-title__prompt">
			For newspaper delivery, we can only deliver to the ground floor, so if you
			live in an apartment, we’ll leave the newspaper at reception or by the
			entrance. We deliver in the early hours of the morning so our drivers
			won’t be able to contact you or ring your doorbell.
		</span>
	),
	USA: (
		<span className="o-forms-title__prompt">
			Please note we cannot guarantee delivery of the newspaper to a specific
			location on your property, which also includes delivery to a specific
			floor/suite in a building. US Federal Law prohibits delivery of newspapers
			into a mailbox, except via a USPS mail carrier. If you prefer delivery to
			a mailbox, please either select the &quot;PO Box&quot; delivery option
			from the top of this form, or contact &nbsp;
			<a href="https://help.ft.com/contact/">FT Customer Care</a>.
		</span>
	),
	CAN: (
		<span className="o-forms-title__prompt">
			Please note we cannot guarantee delivery of the newspaper to a specific
			location on your property, which also includes delivery to a specific
			floor/suite in a building. If you prefer delivery by Canada Post, please
			either select the &quot;PO Box&quot; delivery option from the top of this
			form, or contact &nbsp;
			<a href="https://help.ft.com/contact/">FT Customer Care</a>.
		</span>
	),
	CEMEA_V1: (
		<>
			<span className="o-forms-title__prompt">
				Newspaper delivery is restricted to ground floor addresses. If you live
				in an apartment the newspaper will be left at reception or by the
				entrance. Delivery is made in the early hours making it sometimes
				difficult to identify the right delivery location or gaining access
				where letter boxes are inside a building.
			</span>
			<span className="o-forms-title__prompt">
				Special characters including punctuation cannot be used in the delivery
				instructions.
			</span>
			<span className="o-forms-title__prompt">
				If you prefer delivery to a mailbox, please either select the “PO Box”
				delivery option from the top of this form, or contact&nbsp;
				<a href="https://help.ft.com/contact/">FT Customer Care</a>.
			</span>
		</>
	),
	CEMEA_V2: (
		<>
			<span className="o-forms-title__prompt">
				Newspaper delivery is restricted to ground floor addresses. If you live
				in an apartment the newspaper will be left at reception or by the
				entrance. Delivery is made in the early hours making it sometimes
				difficult to identify the right delivery location or gaining access
				where letter boxes are inside a building.
			</span>
			<span className="o-forms-title__prompt">
				Special characters including punctuation cannot be used in the delivery
				instructions.
			</span>
			<span className="o-forms-title__prompt">
				If you prefer delivery to a mailbox, please either select the “PO Box”
				delivery option from the top of this form, or contact&nbsp;
				<a href="https://help.ft.com/contact/">FT Customer Care</a>.
			</span>
		</>
	),
	APAC: (
		<>
			<span className="o-forms-title__prompt">
				Newspaper delivery is restricted to ground floor addresses. If you live
				in an apartment the newspaper will be left at reception or by the
				entrance. Delivery is made in the early hours making it sometimes
				difficult to identify the right delivery location or gaining access
				where letter boxes are inside a building.
			</span>
			<span className="o-forms-title__prompt">
				Special characters including punctuation cannot be used in the delivery
				instructions.
			</span>
			<span className="o-forms-title__prompt">
				If you prefer delivery to a mailbox, please either select the “PO Box”
				delivery option from the top of this form, or contact&nbsp;
				<a href="https://help.ft.com/contact/">FT Customer Care</a>.
			</span>
		</>
	),
};

export function DeliveryInstructions({
	fieldId = 'deliveryInstructionsField',
	hasError = false,
	inputId = 'deliveryInstructions',
	maxlength = null,
	rows = null,
	isDisabled = false,
	placeholder = '',
	value = '',
	country,
}) {
	const textAreaWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--textarea',
		{ 'o-forms-input--invalid': hasError },
	]);
	const FTShippingZone = identifyFTShippingZone(country);
	const extraInstruction =
		country === 'GBR'
			? ''
			: '\u000a- Special handling, e.g. place in plastic bag, 24/7 security on reception';
	const defaultPlaceholder = {
		CEMEA_V1: `Enter instructions ${
			maxlength && `(Max. ${maxlength} characters)`
		}:\u000a- Door colour, letterbox location\u000a- Door entry codes, etc.`,
		CEMEA_V2: `Enter instructions ${
			maxlength && `(Max. ${maxlength} characters)`
		}:\u000a- Door colour, letterbox location\u000a- Door entry codes, etc.`,
		GBR: `Enter instructions ${
			maxlength && `(Max. ${maxlength} characters)`
		}:\u000a- Door colour, letterbox location\u000a- Placement i.e. letterbox delivery${extraInstruction}`,
		USA: `Enter instructions ${
			maxlength && `(Max. ${maxlength} characters)`
		}:\u000a- Door colour, driveway signage\u000a- Cross street${extraInstruction}`,
		CAN: `Enter instructions ${
			maxlength && `(Max. ${maxlength} characters)`
		}:\u000a- Door colour, driveway signage\u000a- Cross street${extraInstruction}`,
	};

	const textAreaProps = {
		id: inputId,
		name: inputId,
		...(maxlength && { maxLength: maxlength }),
		...(rows && { rows }),
		'data-trackable': 'field-deliveryInstructions',
		placeholder: placeholder ? placeholder : defaultPlaceholder[FTShippingZone],
		disabled: isDisabled,
		defaultValue: value,
	};
	const deliveryInstructionsMessage = (
		<span className="o-forms-title__prompt">
			Special characters including punctuation cannot be used in the delivery
			instructions.
		</span>
	);

	return (
		<label
			id={fieldId}
			className="o-forms-field o-forms-field--optional"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Delivery instructions</span>
				{spanMessageByCountry[FTShippingZone]}
				{country === 'GBR' && deliveryInstructionsMessage}
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
	value: PropTypes.string,
	country: PropTypes.oneOf(['GBR', 'USA', 'CAN']).isRequired,
};
