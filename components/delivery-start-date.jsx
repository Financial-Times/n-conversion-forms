import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryStartDate({
	hasError = false,
	date = '',
	value = '',
	min = null,
	max = null,
	isDisabled = false,
	isAddressUpdate = false,
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

	return (
		<label
			id="deliveryStartDateField"
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={inputProps.id}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main" id="start-date-picker-title-span">
					Start date
				</span>
				<span className="o-forms-title__prompt">
					The first print edition you will receive is: {date}
				</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input {...inputProps} />
				<span className="o-forms-input__error">
					Please select a valid start date
				</span>
			</span>

			{isAddressUpdate && (
				<p>
					We’ll start delivering to this address from:{' '}
					<strong className="js-start-date-text">{date}</strong>
				</p>
			)}
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
};
