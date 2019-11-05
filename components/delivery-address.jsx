import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DeliveryAddress ({
	hasError = false,
	line1 = '',
	line2 = '',
	line3 = '',
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
			id="deliveryAddressFields"
			className={divClassName}
			data-ui-item="form-field"
			data-ui-item-name="deliveryAddress"
			data-validate="required"
		>
			<p>
				<label htmlFor="deliveryAddressLine1" className="o-forms__label">Address line 1</label>
				<input
					type="text"
					id="deliveryAddressLine1"
					name="deliveryAddressLine1"
					className="o-forms__text js-field__input js-item__value"
					data-trackable="field-deliveryAddressLine1"
					autoComplete="address-line1"
					placeholder="e.g. 10 Elm Street"
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={line1}
				/>
			</p>
			<p>
				<label htmlFor="deliveryAddressLine2" className="o-forms__label">Address line 2 <small>(optional)</small></label>
				<input
					type="text"
					id="deliveryAddressLine2"
					name="deliveryAddressLine2"
					className="o-forms__text js-field__input js-item__value"
					data-trackable="field-deliveryAddressLine2"
					autoComplete="address-line2"
					placeholder="e.g. Apartment 1"
					disabled={isDisabled}
					defaultValue={line2}
				/>
			</p>
			<p>
				<label htmlFor="deliveryAddressLine3" className="o-forms__label">Address line 3 <small>(optional)</small></label>
				<input
					type="text"
					id="deliveryAddressLine3"
					name="deliveryAddressLine3"
					className="o-forms__text js-field__input js-item__value"
					data-trackable="field-deliveryAddressLine3"
					autoComplete="address-line3"
					placeholder=""
					disabled={isDisabled}
					defaultValue={line3}
				/>
			</p>
		</div>
	);
}

DeliveryAddress.PropTypes = {
	hasError: PropTypes.bool,
	line1: PropTypes.string,
	line2: PropTypes.string,
	line3: PropTypes.string,
	isDisabled: PropTypes.bool
}

export default DeliveryAddress;
