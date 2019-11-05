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

					return (
						<div key={index} className="ncf__delivery-option__item">
							<input {...inputProps} />
							<label htmlFor={option.value} className="o-forms__label ncf__delivery-option__label">
								{
									(option.value === 'PV') && (
										<React.Fragment>
											<span className="ncf__delivery-option__title">Paper vouchers</span>
											<div className="ncf__delivery-option__description">
												13-week voucher pack delivered quarterly and redeemable at retailers nationwide.
											</div>
										</React.Fragment>
									)
								}

								{
									(option.value === 'HD') && (
										<React.Fragment>
											<span className="ncf__delivery-option__title">Home delivery</span>
											<div className="ncf__delivery-option__description">
												Free delivery to your home or office before 7am.
											</div>
										</React.Fragment>
									)
								}

								{
									(option.value === 'EV') && (
										<React.Fragment>
											<span className="ncf__delivery-option__title">Electronic vouchers</span>
											<div className="ncf__delivery-option__description">
												Delivered via email and card, redeemable at retailers nationwide.
											</div>
										</React.Fragment>
									)
								}
							</label>
						</div>
					)
				})
			}
		</div>
	);
}

DeliveryOption.PropTypes = {
	options: PropTypes.array.isRequired,
	isSingle: PropTypes.boolean
}

export default DeliveryOption;
