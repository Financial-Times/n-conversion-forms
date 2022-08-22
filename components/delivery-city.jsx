import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { countriesSupportedISO, identifyFTShippingZone } from '../helpers/supportedCountries';


export function DeliveryCity ({
	hasError = false,
	value = '',
	isDisabled = false,
	country = 'GBR',
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const inputPlaceholder = {
		GBR: 'e.g. Bath',
		USA: 'e.g. Los Angeles',
		CAN: 'e.g. Montreal',
		ARE: 'e.g. Dubai'
	};
	const FTShippingZone = identifyFTShippingZone(country);

	const labelMapping = {
		ARE: 'Emirate or City',
		APAC: 'City/Prefecture',
		DEFAULT: 'City',
	};
	const inputLabel = labelMapping[FTShippingZone] ? labelMapping[FTShippingZone] :  labelMapping['DEFAULT]';

	return (
		<label
			id="deliveryCityField"
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor="deliveryCity"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">{inputLabel}</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id="deliveryCity"
					name="deliveryCity"
					data-trackable="field-deliveryCity"
					autoComplete="address-level2"
					placeholder={inputPlaceholder[country] || ''}
					maxLength={40}
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">
					Please enter a valid city or town
				</span>
			</span>
		</label>
	);
}

DeliveryCity.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	maxlength: PropTypes.number,
	country: PropTypes.oneOf(countriesSupportedISO),
};
