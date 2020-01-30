import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryOption ({
	options = [],
	isSingle = false
}) {
	const divClassName = classNames([
		'o-forms-field',
		'ncf__delivery-option',
		{ 'ncf__delivery-option--single': isSingle }
	]);

	const deliveryOptions = {
		PV: {
			title: 'Paper vouchers',
			description: '13-week voucher pack delivered quarterly and redeemable at retailers nationwide.'
		},
		HD: {
			title: 'Home delivery',
			description: 'Free delivery to your home or office before 7am.'
		},
		EV: {
			title: 'Electronic vouchers',
			description: 'Delivered via email and card, redeemable at retailers nationwide.'
		}
	};

	return (
		<div
			id="deliveryOptionField"
			className={divClassName}
			role="group"
			aria-label="Delivery options"
		>
			<span className="o-forms-input o-forms-input--radio-round">
				{
					options.map(({ value, isValidDeliveryOption, isSelected}) => {
						if (!isValidDeliveryOption) {
							return null;
						}

						const inputProps = {
							type: 'radio',
							id: value,
							name: 'deliveryOption',
							value: value,
							className: 'ncf__delivery-option__input',
							defaultChecked: isSelected
						};

						const deliveryOptionValue = deliveryOptions[value];

						return (
							<label key={value} className="ncf__delivery-option__item" htmlFor={value}>
								<input {...inputProps} />
								<span className="o-forms-input__label ncf__delivery-option__label">
									<span className="ncf__delivery-option__title o-forms-title__main">{deliveryOptionValue.title}</span>
									<div className="ncf__delivery-option__description">{deliveryOptionValue.description}</div>
								</span>
							</label>
						);
					})
				}
			</span>
		</div>
	);
}

DeliveryOption.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.oneOf(['PV', 'HD', 'EV']),
		isSelected: PropTypes.bool
	})),
	isSingle: PropTypes.bool
};
