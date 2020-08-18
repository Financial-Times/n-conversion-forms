import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function PaymentTerm ({
	fieldId = 'paymentTermField',
	inputName = 'paymentTerm',
	isPrintOrBundle = false,
	options = []
}) {
	const nameMap = {
		annual: {
			title: 'Annual',
			price: price => <React.Fragment>Single <span className="ncf__payment-term__price ncf__strong">{price}</span> payment</React.Fragment>,
			trialPrice: price => <React.Fragment>Unless you cancel during your trial you will be billed <span className="ncf__payment-term__price">{price}</span> per year after the trial period.</React.Fragment>,
			monthlyPrice: price => price && <span className="ncf__payment-term__equivalent-price">That’s equivalent to <span className="ncf__payment-term__monthly-price">{price}</span> per month</span>,
			renewsText: () => <p className="ncf__payment-term__renews-text">Renews annually unless cancelled</p>
		},
		quarterly: {
			title: 'Quarterly',
			price: price => <React.Fragment><span className="ncf__payment-term__price">{price}</span> per quarter</React.Fragment>,
			trialPrice: price => <React.Fragment>Unless you cancel during your trial you will be billed <span className="ncf__payment-term__price">{price}</span> per quarter after the trial period.</React.Fragment>,
			monthlyPrice: () => {},
			renewsText: () => <p className="ncf__payment-term__renews-text">Renews quarterly unless cancelled</p>
		},
		monthly: {
			title: 'Monthly',
			price: price => <React.Fragment><span className="ncf__payment-term__price">{price}</span> per month</React.Fragment>,
			trialPrice: price => <React.Fragment>Unless you cancel during your trial you will be billed <span className="ncf__payment-term__price">{price}</span> per month after the trial period.</React.Fragment>,
			monthlyPrice: () => {},
			renewsText: () => <p className="ncf__payment-term__renews-text">Renews monthly unless cancelled</p>
		}
	};
	const createPaymentTerm = (option) => {
		const className = classNames([
			'ncf__payment-term__item',
			'o-forms-input--radio-round',
			{ 'ncf__payment-term__item--discount': option.discount }
		]);
		const props = {
			type: 'radio',
			id: option.value,
			name: inputName,
			value: option.value,
			className: 'o-forms-input__radio o-forms-input__radio--right ncf__payment-term__input',
			...(option.selected && { defaultChecked: true })
		};
		const showTrialCopyInTitle = (option.isTrial && !isPrintOrBundle);
		const createDiscount = () => {
			return option.discount && (
				<span className="ncf__payment-term__discount">Save {option.discount} off RRP</span>
			);
		};
		const createDescription = () => {
			return option.isTrial ? (
				<div className="ncf__payment-term__description">
					{option.trialDuration || '4 weeks'} for <span className="ncf__payment-term__trial-price">{option.trialPrice}</span><br />
					{nameMap[option.name].trialPrice(option.price)}
				</div>
			) : (
				<div className="ncf__payment-term__description">
					{nameMap[option.name].price(option.price)}
					{nameMap[option.name].monthlyPrice(option.monthlyPrice)}
					{nameMap[option.name].renewsText()}
					{/* Remove this discount text temporarily in favour of monthly price */}
					{/* <br />Save up to 25% when you pay annually */}
				</div>
			);
		};

		return (
			<div key={option.value} className={className}>
				<input {...props} />
				<label htmlFor={option.value} className="o-forms-input__label ncf__payment-term__label">
					{createDiscount()}

					<span className="ncf__payment-term__title">{showTrialCopyInTitle ? 'Trial: Digital Premium - ': ''}{nameMap[option.name].title}</span>

					{createDescription()}
				</label>
			</div>
		);
	};

	return (
		<div id={fieldId} className="o-forms__group ncf__payment-term">
			{options.map(option => createPaymentTerm(option))}

			<div className="ncf__payment-term__legal">
				<p>
					With all subscription types, we will automatically renew your subscription using the payment method provided unless you cancel before your renewal date.
				</p>
				<p>
					We will notify you at least 14 days in advance of any changes to the price in your subscription that would apply upon next renewal. Find out more about our cancellation policy in our <a className="ncf__link--external" href="https://help.ft.com/help/legal-privacy/terms-conditions/" title="FT Legal Terms and Conditions help page" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>.
				</p>
			</div>
		</div>
	);
}

PaymentTerm.propTypes = {
	fieldId: PropTypes.string,
	inputName: PropTypes.string,
	isPrintOrBundle: PropTypes.bool,
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
	}))
};
