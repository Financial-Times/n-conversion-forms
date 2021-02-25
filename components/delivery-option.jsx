import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { findCustomDeliveryOption } from './delivery-option-messages';

export function DeliveryOption({
	country,
	deliveryFrequency,
	options = [],
	isSingle = false
}) {
	const divClassName = classNames([
		'o-forms-field',
		'ncf__delivery-option',
		{ 'ncf__delivery-option--single': isSingle },
	]);

	const defaultDeliveryOptions = {
		PV: {
			title: 'Paper vouchers',
			description:
				'13-week voucher pack delivered quarterly and redeemable at retailers nationwide. COVID-19 - make sure your preferred newsagent or retailer is open and/or delivering before you select this option.',
		},
		HD: {
			title: 'Home delivery',
			description: 'Free delivery to your home or office before 7am.',
		},
		EV: {
			title: 'Electronic vouchers',
			description:
				'Delivered via email and card, redeemable at retailers nationwide.',
		},
	};

	const customMessageCountries = ['USA', 'CAN'];

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

					const deliveryOptionValue = customMessageCountries.includes(country)
						? findCustomDeliveryOption(deliveryFrequency, option, country)
						: defaultDeliveryOptions[value];

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
	country: PropTypes.string,
	deliveryFrequency: PropTypes.oneOf(['A1', 'A5', 'A6']),
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
