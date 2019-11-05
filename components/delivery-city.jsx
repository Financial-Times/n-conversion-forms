import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DeliveryCity ({
	hasError = false,
	value = '',
	isDisabled = false
}) {
	const divClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError }
	]);

	return (
		<div
			id="deliveryCityField"
			className={divClassName}
			data-ui-item="form-field"
			data-ui-item-name="deliveryCity"
			data-validate="required"
		>
			<label htmlFor="deliveryCity" className="o-forms__label">City/town</label>

			<input
				type="text"
				id="deliveryCity"
				name="deliveryCity"
				className="o-forms__text js-field__input js-item__value"
				data-trackable="field-deliveryCity"
				autoComplete="address-level2"
				placeholder="e.g. Bath"
				aria-required="true"
				required
				disabled={isDisabled}
				defaultValue={value}
			/>
		</div>
	);
}

DeliveryCity.PropTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool
}

export default DeliveryCity;
