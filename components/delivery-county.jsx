import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DeliveryCounty ({
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
			id="deliveryCountyField"
			className={divClassName}
			data-ui-item="form-field"
			data-ui-item-name="deliveryCounty"
			data-validate="required"
		>
			<label htmlFor="deliveryCounty" className="o-forms__label">County <small>(optional)</small></label>

			<input
				type="text"
				id="deliveryCounty"
				name="deliveryCounty"
				className="o-forms__text js-field__input js-item__value"
				data-trackable="field-deliveryCounty"
				autoComplete="address-level3"
				placeholder="e.g. Somerset"
				disabled={isDisabled}
				defaultValue={value}
			/>
		</div>
	);
}

DeliveryCounty.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool
};

export default DeliveryCounty;
