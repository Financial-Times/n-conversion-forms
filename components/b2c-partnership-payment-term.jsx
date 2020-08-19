import React from 'react';
import PropTypes from 'prop-types';

export function B2cPartnershipPaymentTerm ({
	fieldId = 'paymentTermField',
	inputName = 'paymentTerm',
	options = [],
	optionName,
	title,
	includes,
	conditions,
}) {
	const { price, value } = options.find(option => option.name === optionName);

	return (
		<div id={fieldId} className="o-forms__group ncf__payment-term ncf__b2c-partnership-payment-term">
			<div className="ncf__payment-term__item o-forms-input--radio-round">
				<input type="radio" id={value} name={inputName} value={value} defaultChecked={true} />
				<label htmlFor={value} className="o-forms-input__label ncf__payment-term__label">
					<span className="ncf__payment-term__title">{price} - {title}</span>
					<div className="ncf__b2c-partnership-payment-term__description">
						<p>
							Includes:<br />
							{includes.map(line => <>{line}<br /></>)}
						</p>
						<p>{conditions.map(line => <>{line}<br /></>)}</p>
					</div>
				</label>
			</div>

			<div className="ncf__payment-term__legal">
				<p>
					We will automatically renew your subscription using the payment method provided unless you cancel before your renewal date.
				</p>
				<p>
					We will notify you at least 14 days in advance of any changes to the price in your subscription that would apply upon next renewal. Find out more about our cancellation policy in our <a className="ncf__link--external" href="https://help.ft.com/help/legal-privacy/terms-conditions/" title="FT Legal Terms and Conditions help page" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>.
				</p>
			</div>
		</div>
	);
}

B2cPartnershipPaymentTerm.propTypes = {
	fieldId: PropTypes.string,
	inputName: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		discount: PropTypes.string,
		isTrial: PropTypes.bool,
		name: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		selected: PropTypes.bool,
		trialDuration: PropTypes.string,
		trialPrice: PropTypes.string,
		value: PropTypes.string.isRequired,
		monthlyPrice: PropTypes.string
	})),
	optionName: PropTypes.string,
	title: PropTypes.string,
	includes: PropTypes.arrayOf(PropTypes.string),
	conditions: PropTypes.arrayOf(PropTypes.string),
};
