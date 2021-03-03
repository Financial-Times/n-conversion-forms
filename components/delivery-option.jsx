import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getDeliveryOption } from './delivery-option-messages';

export function DeliveryOption({
	country,
	productCode = undefined,
	options = [],
	isSingle = false
}) {
	const divClassName = classNames([
		'o-forms-field',
		'ncf__delivery-option',
		{ 'ncf__delivery-option--single': isSingle },
	]);

	return (
		<div
			id="deliveryOptionField"
			className={divClassName}
			role="group"
			aria-label="Delivery options"
		>
			<span className="o-forms-input o-forms-input--radio-round">
				{options.map((option) => {
					const { value, isValidDeliveryOption, isSelected } = option;

					const deliveryOptionValue = getDeliveryOption(productCode, option, country);

					if (!isValidDeliveryOption || !deliveryOptionValue) {
						return null;
					}

					const inputProps = {
						type: 'radio',
						id: value,
						name: 'deliveryOption',
						value: value,
						className: 'ncf__delivery-option__input',
						defaultChecked: isSelected,
					};

					return (
						<label
							key={value}
							className="ncf__delivery-option__item"
							htmlFor={value}
						>
							<input {...inputProps} />
							<span className="o-forms-input__label ncf__delivery-option__label">
								<span className="ncf__delivery-option__title o-forms-title__main">
									{deliveryOptionValue.title}
								</span>
								<div className="ncf__delivery-option__description">
									{deliveryOptionValue.description}
								</div>
							</span>
						</label>
					);
				})}
			</span>
		</div>
	);
}

DeliveryOption.propTypes = {
	country: PropTypes.oneOf(['GBR', 'USA', 'CAN']).isRequired,
	productCode: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOf(['PV', 'HD', 'EV']),
			isSelected: PropTypes.bool,
			deliveryOnPublicationDate: PropTypes.bool,
			flightMarket: PropTypes.bool,
			mailDelivery: PropTypes.bool,
		})
	),
	isSingle: PropTypes.bool,
};
