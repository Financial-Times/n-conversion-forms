import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import deliveryAddressMap from '../helpers/deliveryAddressMap';
import {cemeaV1ISO, cemeaV2ISO, apacISO, identifyRegion} from '../helpers/supportedCountries';
const cemeaV1Countries = cemeaV1ISO;
const cemeaV2Countries =cemeaV2ISO;
const apacCountries = apacISO;

export function DeliveryAddress ({
	fieldId = 'deliveryAddressFields',
	hasError = false,
	line1 = '',
	line2 = '',
	line3 = '',
	isDisabled = false,
	isHidden = false,
	country = 'GBR',
	addressType = 'home',
}) {
	const divClassNames = classNames([{ ncf__hidden: isHidden }]);
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);
	const region = identifyRegion(country);


	const addressLine1 = (
		<label
			className="o-forms-field ncf__validation-error"
			htmlFor="deliveryAddressLine1"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					{deliveryAddressMap[addressType].addressLine1Title[region] || 'Address line 1'}
				</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id="deliveryAddressLine1"
					name="deliveryAddressLine1"
					data-trackable="field-deliveryAddressLine1"
					autoComplete="address-line1"
					placeholder={deliveryAddressMap[addressType].addressLine1Placeholder[region]}
					maxLength={50}
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={line1}
				/>
				<span className="o-forms-input__error">
					Please enter a valid address
				</span>
			</span>
		</label>
	);

	const addressLine2 = (
		<label
			className="o-forms-field o-forms-field--optional"
			htmlFor="deliveryAddressLine2"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Address line 2</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id="deliveryAddressLine2"
					name="deliveryAddressLine2"
					data-trackable="field-deliveryAddressLine2"
					autoComplete="address-line2"
					placeholder={deliveryAddressMap[addressType].addressLine2Placeholder[region] || ''}
					maxLength={50}
					disabled={isDisabled}
					defaultValue={line2}
				/>
			</span>
		</label>
	);

	const addressLine3 = (
		<label
			className="o-forms-field o-forms-field--optional"
			htmlFor="deliveryAddressLine3"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					{deliveryAddressMap[addressType].addressLine3Title[region]}
				</span>
				<span className="o-forms-title__prompt">
					{deliveryAddressMap[addressType].addressLine3Prompt[region]}
				</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id="deliveryAddressLine3"
					name="deliveryAddressLine3"
					data-trackable="field-deliveryAddressLine3"
					autoComplete="address-line3"
					placeholder={deliveryAddressMap[addressType].addressLine3Placeholder[region] || 'e.g. Apt. 1'}
					maxLength={50}
					disabled={isDisabled}
					defaultValue={line3}
				/>
			</span>
		</label>
	);
	const addressLines = deliveryAddressMap[addressType].template(
		addressLine1,
		addressLine2,
		addressLine3,
		region
	);

	return (
		<div id={fieldId} data-validate="required" className={divClassNames}>
			{addressLines}
		</div>
	);
}

DeliveryAddress.propTypes = {
	fieldId: PropTypes.string,
	hasError: PropTypes.bool,
	line1: PropTypes.string,
	line2: PropTypes.string,
	line3: PropTypes.string,
	isDisabled: PropTypes.bool,
	isHidden: PropTypes.bool,
	country: PropTypes.oneOf(['GBR', 'USA', 'CAN', 'ARE',...cemeaV1Countries, ...cemeaV2Countries, ...apacCountries]),
	addressType: PropTypes.oneOf(['home', 'company', 'pobox']),
};
