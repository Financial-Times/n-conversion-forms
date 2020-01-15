import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const postcodeLabel = {
	USA: 'Zip Code',
	CAN: 'postal code'
}

export function DeliveryPostcode ({
	value = '',
	country = '',
	isDisabled = false,
	hasError = false,
	isHidden = false,
	pattern,
	additonalFieldInformation,
}) {

	const postcodeReference = postcodeLabel[country.toUpperCase()] || 'postcode';

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	const deliveryPostcodeFieldClassNames = classNames([
		'o-forms-field',
		{ 'ncf__hidden': isHidden }
	]);

	const fieldErrorClassNames = classNames([
		'o-forms-input__error',
		{ 'additional-field-instructions__with-field-error': additonalFieldInformation }
	]);

	return (
		<label
			id="deliveryPostcodeField"
			className={deliveryPostcodeFieldClassNames}
			data-validate="required"
		>

			<span className="o-forms-title">
				<span className="o-forms-title__main">
					Delivery <span data-reference="postcode">{postcodeReference}</span>
				</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input type="text"
					id="deliveryPostcode"
					name="deliveryPostcode"
					defaultValue={`${value}`}
					placeholder={`Enter your ${postcodeReference}`}
					autoComplete="postal-code"
					data-trackable="delivery-postcode"
					aria-required="true"
					required
					pattern={pattern}
					disabled={isDisabled}
				/>
				<span className={fieldErrorClassNames}>
					Please enter a valid <span data-reference="postcode">{postcodeReference}</span>.
				</span>
				{additonalFieldInformation ? (
					<p className="additional-field-instructions">{additonalFieldInformation}</p>
				) : null}
			</span>
		</label>
	);
}

DeliveryPostcode.propTypes = {
	country: PropTypes.string,
	value: PropTypes.string,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool,
	additonalFieldInformation: PropTypes.node
};
