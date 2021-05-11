import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryStartDate ({
	hasError = false,
	date = '',
	value = '',
	min = null,
	max = null,
	isDisabled = false,
	isAddressUpdate = false,
	isWeekendOnly = false,
	country = 'GBR',
}) {
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const inputProps = {
		type: 'date',
		id: 'deliveryStartDate',
		name: 'deliveryStartDate',
		...(min && { min }),
		...(max && { max }),
		'data-trackable': 'field-deliveryStartDate',
		'aria-required': 'true',
		required: true,
		disabled: isDisabled,
		defaultValue: value,
	};

	const startMessage = isAddressUpdate
		? 'We’ll start delivering to this address from:'
		: 'Your print subscription will start from:';

	// Primary Address deliveries start on Monday (default) while Weekend Address deliveries start on Saturday.
	const startDescriptionExample = isWeekendOnly
		? 'if you select a Sunday then we’ll start your deliveries on the following Saturday.'
		: 'if you select a Sunday then we can start your supply on the Monday.';

	const nbMessage = <p>
		NB. This will be the closest date we can supply your newspaper based on
		your selected date e.g. {startDescriptionExample}
	</p>;

	return (
		<label
			id="deliveryStartDateField"
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={inputProps.id}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main" id="start-date-picker-title-span">Delivery start date</span>
				<span className="o-forms-title__prompt">
					Earliest available delivery date: {date}
				</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input {...inputProps} />
				<span className="o-forms-input__error">
					Please select a valid start date
				</span>
			</span>

			<p>
				{startMessage} <strong className="js-start-date-text">{date}</strong>
			</p>

			{country === 'GBR' && nbMessage}
		</label>
	);
}

DeliveryStartDate.propTypes = {
	hasError: PropTypes.bool,
	date: PropTypes.node, // could be a string or a component that formats the string
	value: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	isDisabled: PropTypes.bool,
	isAddressUpdate: PropTypes.bool,
	isWeekendOnly: PropTypes.bool,
	country: PropTypes.oneOf(['GBR', 'USA', 'CAN']),
};
