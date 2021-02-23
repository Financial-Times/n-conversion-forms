import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryAddressType({ value = 'home' }) {
	const divClassName = classNames([
		'o-forms-field',
		'ncf__delivery-address-type',,
	]);

	const addressTypes = [
		{ id: 'home',	label: 'Home Address'	},
		{ id: 'company',	label: 'Company Address'	},
		{ id: 'pobox',	label: 'P.O. Box'	},
	];

	const className = classNames([
		'o-forms-input',
		'o-forms-input--inline',
		'o-forms-input--radio-round',
	]);

	return (
		<div
			id="deliveryAddressTypeField"
			className="o-forms-field ncf__delivery-address-type"
			role="group"
			aria-label="Delivery Address Type"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Address type</span>
			</span>

			<div className={className}>
				{addressTypes.map((type) => {
					const inputProps = {
						type: 'radio',
						id: type.id,
						name: 'deliveryAddressType',
						value: type.id,
						className: 'ncf__delivery-address-type__input',
						defaultChecked: type.id === value,
					};

					return (
							<label htmlFor={inputProps.id} aria-label={type.label}>
								<input {...inputProps} />
								<span className="o-forms-input__label" aria-hidden="true">
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
	value: PropTypes.oneOf(['home', 'company', 'pobox']),
};
