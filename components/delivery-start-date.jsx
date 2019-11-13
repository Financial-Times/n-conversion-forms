import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DeliveryStartDate ({
	hasError = false,
	date = '',
	value = '',
	min = null,
	max = null,
	isDisabled = false
}) {
	const divClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError }
	]);

	const inputProps = {
		type: 'date',
		id: 'deliveryStartDate',
		name: 'deliveryStartDate',
		...(min && { min }),
		...(max && { max }),
		className: 'o-forms__text js-field__input js-item__value',
		'data-trackable': 'field-deliveryStartDate',
		'aria-required': 'true',
		required: true,
		disabled: isDisabled,
		defaultValue: value
	};

	return (
		<div
			id="deliveryStartDateField"
			className={divClassName}
			data-ui-item="form-field"
			data-ui-item-name="deliveryStartDate"
			data-validate="required"
		>
			<label htmlFor="deliveryStartDate" className="o-forms__label">
				Delivery start date<br />
				<small>Earliest available delivery date: {date}</small>
			</label>

			<input {...inputProps} />

			<div className="o-forms__errortext">Please select a valid start date</div>

			<p>Your print subscription will start from: <strong className="js-start-date-text">{date}</strong></p>

			<p>NB. This will  be the closest date we can supply your newspaper based on your selected date e.g. if you select a Sunday then we can start your supply on the Monday.</p>
		</div>
	);
}

DeliveryStartDate.propTypes = {
	hasError: PropTypes.boolean,
	date: PropTypes.string,
	value: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	isDisabled: PropTypes.bool
};

export default DeliveryStartDate;
