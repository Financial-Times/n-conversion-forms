import React from 'react';
import PropTypes from 'prop-types';
import { identifyFTShippingZone } from '../helpers/supportedCountries';

const addressTypes = [
	{ id: 'home', label: 'Home Address' },
	{ id: 'company', label: 'Company Address' },
	{ id: 'pobox', label: 'P.O. Box' },
];

export function DeliveryAddressType ({
	value = 'home',
	fieldId = 'deliveryAddressTypeField',
	inputName = 'deliveryAddressType',
	options = ['home', 'company', 'pobox'],
	editMode = false,
	deliveryCountry
}) {
	const FTShippingZone = identifyFTShippingZone(deliveryCountry);
	return (
		<div
			id={fieldId}
			className="o-forms-field ncf__delivery-address-type"
			role="group"
			aria-label="Delivery Address Type"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Address type</span>
			</span>

			<div className="o-forms-input o-forms-input--inline o-forms-input--radio-round">
				{options.map((option) => {
					const type = addressTypes.find((item) => item.id === option);

					return !type ||(FTShippingZone==='APAC' && type.id==='pobox') ? null : (
						<label htmlFor={type.id} aria-label={type.label} key={type.id}>
							<input
								type="radio"
								id={type.id}
								name={inputName}
								value={type.id}
								className="ncf__delivery-address-type__input"
								disabled={editMode && (type.id !== value)}
								defaultChecked={type.id === value}
							/>
							<span
								className="o-forms-input__label o-forms-input__address-type__label"
								aria-hidden="true"
							>
								{type.label}
							</span>
						</label>
					);
				})}
			</div>
		</div>
	);
}

DeliveryAddressType.propTypes = {
	fieldId: PropTypes.string,
	inputName: PropTypes.string,
	value: PropTypes.oneOf(['home', 'company', 'pobox']),
	options: PropTypes.arrayOf(PropTypes.oneOf(['home', 'company', 'pobox'])),
};
