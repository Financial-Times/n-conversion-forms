import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DeliveryOption ({
	options = [],
	isSingle = false
}) {
	const divClassName = classNames([
		'o-forms__group',
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
		>
			{
				options.map((option, index) => {
					const inputProps = {
						type: 'radio',
						id: option.value,
						name: 'deliveryOption',
						value: option.value,
						className: 'o-forms__radio o-forms__radio--right ncf__delivery-option__input',
						...(option.isSelected && { defaultChecked: true })
					};

					const deliveryOptionValue = deliveryOptions[option.value];

					return (
						<div key={index} className="ncf__delivery-option__item">
							<input {...inputProps} />
							<label htmlFor={option.value} className="o-forms__label ncf__delivery-option__label">
								{
									deliveryOptionValue && (
										<React.Fragment>
											<span className="ncf__delivery-option__title">{deliveryOptionValue.title}</span>
											<div className="ncf__delivery-option__description">{deliveryOptionValue.description}</div>
										</React.Fragment>
									)
								}
							</label>
						</div>
					);
				})
			}
		</div>
	);
}

DeliveryOption.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		isSelected: PropTypes.boolean
	})),
	isSingle: PropTypes.boolean
};

export default DeliveryOption;
