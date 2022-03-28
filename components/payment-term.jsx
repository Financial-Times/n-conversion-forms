import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export function PaymentTerm ({
	fieldId = 'paymentTermField',
	inputName = 'paymentTerm',
	isPrintOrBundle = false,
	isEpaper = false,
	options = [],
	isFixedTermOffer = false,
	displayName,
	showLegal = true,
	largePrice = false,
	optionsInARow = false,
	isSingleTerm = false,
}) {
	const nameMap = {
		annual: {
			title: 'Annual',
			price: (price) => (
				<React.Fragment>
					Single{' '}
					<span className="ncf__payment-term__price ncf__strong">{price}</span>{' '}
					payment
				</React.Fragment>
			),
			trialPrice: (price) => (
				<React.Fragment>
					Unless you cancel during your trial you will be billed{' '}
					<span className="ncf__payment-term__price">{price}</span> per year
					after the trial period.
				</React.Fragment>
			),
			monthlyPrice: (price) =>
				price && (
					<span className="ncf__payment-term__equivalent-price">
						That’s equivalent to{' '}
						<span className="ncf__payment-term__monthly-price">{price}</span>{' '}
						per month
					</span>
				),
			renewsText: () => (
				<p className="ncf__payment-term__renews-text">
					Renews annually unless cancelled
				</p>
			),
		},
		quarterly: {
			title: 'Quarterly',
			price: (price) => (
				<React.Fragment>
					<span className="ncf__payment-term__price">{price}</span> per quarter
				</React.Fragment>
			),
			trialPrice: (price) => (
				<React.Fragment>
					Unless you cancel during your trial you will be billed{' '}
					<span className="ncf__payment-term__price">{price}</span> per quarter
					after the trial period.
				</React.Fragment>
			),
			monthlyPrice: () => {},
			renewsText: () => (
				<p className="ncf__payment-term__renews-text">
					Renews quarterly unless cancelled
				</p>
			),
		},
		monthly: {
			title: 'Monthly',
			price: (price) => (
				<React.Fragment>
					<span className="ncf__payment-term__price">{price}</span> per month
				</React.Fragment>
			),
			trialPrice: (price) => (
				<React.Fragment>
					Unless you cancel during your trial you will be billed{' '}
					<span className="ncf__payment-term__price">{price}</span> per month
					after the trial period.
				</React.Fragment>
			),
			monthlyPrice: () => {},
			renewsText: (isFixedTermOffer) => {
				const textToDisplay = isFixedTermOffer
					? 'This subscription is for 3 months, charged monthly. You can cancel at anytime'
					: 'Renews monthly unless cancelled';
				return (
					<p className="ncf__payment-term__renews-text">{textToDisplay}</p>
				);
			},
		},
	};
	const createPaymentTerm = (option) => {
		const className = classNames([
			'ncf__payment-term__item',
			'o-forms-input--radio-round',
			{ 'ncf__payment-term__item--discount': option.discount },
		]);
		const props = {
			type: 'radio',
			id: option.value,
			'data-base-amount': option.isTrial ? option.trialAmount : option.amount,
			name: inputName,
			value: option.value,
			className:
				'o-forms-input__radio o-forms-input__radio--right ncf__payment-term__input',
			...(option.selected && { defaultChecked: true }),
		};
		const showTrialCopyInTitle =
			option.isTrial && !isPrintOrBundle && !isEpaper;
		const defaultTitle = option.name ? nameMap[option.name].title : '';
		const title = isFixedTermOffer
			? `${displayName} - ${defaultTitle}`
			: defaultTitle;
		const createDiscount = () => {
			if(!isSingleTerm) {
				return (
					option.discount && (
						<span className="ncf__payment-term__discount">
							{option.bestOffer ? 'Best offer -' : 'Save'} {option.discount} off
							RRP
						</span>
					)
				);
			} else {
				return (
					option.bestOffer && (
						<span className="ncf__payment-term__discount">
							Best offer
						</span>
					)
				);
			}
		};
		const createDescription = () => {
			return option.isTrial ? (
				<div className="ncf__payment-term__description">
					{option.trialDuration || '4 weeks'} for{' '}
					<span className="ncf__payment-term__trial-price">
						{option.trialPrice}
					</span>
					<br />
					{nameMap[option.name] &&
						nameMap[option.name].trialPrice(option.price)}
				</div>
			) : (
				<React.Fragment>
					{nameMap[option.name] ? (
						<div className="ncf__payment-term__description">
							{nameMap[option.name].price(option.price)}
							{nameMap[option.name].monthlyPrice(option.monthlyPrice)}
							{nameMap[option.name].renewsText(isFixedTermOffer)}
							{/* Remove this discount text temporarily in favour of monthly price */}
							{/* <br />Save up to 25% when you pay annually */}
						</div>
					) : (
						<div>
							<span
								className={largePrice ? 'ncf__payment-term__large-price' : ''}
							>
								{option.price}
							</span>
							{option.chargeOnText && (
								<p className="ncf__payment-term__charge-on-text">
									{option.chargeOnText}
								</p>
							)}
						</div>
					)}
				</React.Fragment>
			);
		};

		const getDisplayName = () => {
			let displayName = '';
			if (showTrialCopyInTitle) {
				const termName = option.displayName ? option.displayName : 'Premium Digital';
				displayName = `Trial: ${termName} - `;
			}
			const termPeriod = nameMap[option.name] ? title : option.title;
			return `${displayName}${termPeriod} `;
		};

		return (
			<div key={option.value} className={className}>
				<input {...props} />
				<label
					htmlFor={option.value}
					className="o-forms-input__label ncf__payment-term__label"
				>
					{createDiscount()}

					<span
						className={classNames([
							'ncf__payment-term__title',
							{ 'ncf__payment-term__title--large-price': largePrice },
						])}
					>
						{getDisplayName()}
						{option.subTitle && (
							<span className="ncf__regular ncf__payment-term__sub-title">
								{option.subTitle}
							</span>
						)}
					</span>

					{createDescription()}
				</label>
			</div>
		);
	};

	return (
		<div id={fieldId} className="o-forms__group ncf__payment-term">
			<div className={optionsInARow ? 'ncf__payment-term__options-grid' : ''}>
				{options.map((option) => createPaymentTerm(option))}
			</div>

			{showLegal && (
				<div className="ncf__payment-term__legal">
					{isFixedTermOffer ? (
						<p>
							Find out more about our cancellation policy in our{' '}
							<a
								className="ncf__link--external"
								href="https://help.ft.com/legal-privacy/terms-and-conditions/"
								title="FT Legal Terms and Conditions help page"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>
							.
						</p>
					) : (
						<React.Fragment>
							<p>
								With all subscription types, we will automatically renew your
								subscription using the payment method provided unless you cancel
								before your renewal date.
							</p>
							<p>
								We will notify you at least 14 days in advance of any changes to
								the price in your subscription that would apply upon next
								renewal. Find out more about our cancellation policy in our{' '}
								<a
									className="ncf__link--external"
									href="https://help.ft.com/legal-privacy/terms-and-conditions/"
									title="FT Legal Terms and Conditions help page"
									target="_blank"
									rel="noopener noreferrer"
								>
									Terms &amp; Conditions
								</a>
								.
							</p>
						</React.Fragment>
					)}
				</div>
			)}
		</div>
	);
}

PaymentTerm.propTypes = {
	fieldId: PropTypes.string,
	inputName: PropTypes.string,
	isPrintOrBundle: PropTypes.bool,
	isEpaper: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			discount: PropTypes.string,
			isTrial: PropTypes.bool,
			name: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
			selected: PropTypes.bool,
			trialDuration: PropTypes.string,
			trialPrice: PropTypes.string,
			amount: PropTypes.number,
			trialAmount: PropTypes.number,
			value: PropTypes.string.isRequired,
			monthlyPrice: PropTypes.string,
			title: PropTypes.string,
			subTitle: PropTypes.string,
			bestOffer: PropTypes.bool,
			chargeOnText: PropTypes.string,
		})
	),
	isFixedTermOffer: PropTypes.bool,
	displayName: PropTypes.string,
	showLegal: PropTypes.bool,
	largePrice: PropTypes.bool,
	optionsInARow: PropTypes.bool,
	isSingleTerm: PropTypes.bool,
};
