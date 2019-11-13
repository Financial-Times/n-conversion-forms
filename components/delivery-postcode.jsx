import React from 'react';
import { PropTypes } from 'prop-types';

export default function DeliveryPostcode ({
	postcodeReference,
	value = '',
	pattern = '',
	isDisabled = false,
	hasError = false,
	isHidden = false
}) {
	let DeliveryPostcodeFieldClassNames = 'o-forms o-forms--wide ncf__field js-field';

	if (hasError) {
		DeliveryPostcodeFieldClassNames += ' o-forms--error';
	}

	if (isHidden) {
		DeliveryPostcodeFieldClassNames += ' n-ui-hide';
	}

	return (
		<div
			id="deliveryPostcodeField"
			className={DeliveryPostcodeFieldClassNames}
			data-ui-item="form-field"
			data-ui-item-name="deliveryPostcode"
			data-validate="required"
		>

			<label htmlFor="deliveryPostcode" className="o-forms__label">
				Delivery <span data-reference="postcode">{postcodeReference}</span>
			</label>

			<input type="text"
				id="deliveryPostcode"
				name="deliveryPostcode"
				defaultValue={`${value}`}
				placeholder={`Enter your ${postcodeReference}`}
				autoComplete="postal-code"
				className="o-forms__text js-field__input js-item__value"
				data-trackable="delivery-postcode"
				aria-required="true"
				required
				pattern={pattern}
				disabled={isDisabled} />

			<div className="o-forms__errortext">
				Please enter a valid <span data-reference="postcode">{postcodeReference}</span>.
			</div>

		</div>
	);
}

DeliveryPostcode.propTypes = {
	postcodeReference: PropTypes.string.isRequired,
	value: PropTypes.string,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool
};
