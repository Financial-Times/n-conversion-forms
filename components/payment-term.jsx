import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
	Period,
	Monthly,
} from '@financial-times/n-pricing';

export function PaymentTerm ({
	fieldId = 'paymentTermField',
	inputName = 'paymentTerm',
	isPrintOrBundle = false,
	isEpaper = false,
	options = [],
	isFixedTermOffer = false,
	offerDisplayName,
	showLegal = true,
	largePrice = false,
	optionsInARow = false,
}) {

	/**
	 * Compute monthly price for given term name
	 * @param {number} amount price in number format
	 * @param {string} currency country id of the currency
	 * @param {string} period PxY (yearly) or PxM (montly) where x is the amount of years/months
	 * @returns {string}
	 */
	const getMontlyPriceFromPeriod = (amount, currency, period) => {
		const periodObj = new Period(period);
		const monthlyPrice = periodObj.calculatePrice('P1M', amount);
		return new Monthly({ value: monthlyPrice, currency }).getAmount('monthly');
	};

	/**
	 * returns period converted to time if found
	 * otherwise returns empty string to avoid show information not mapped
	 * @param {string} period PxY (yearly) or PxM (montly) where x is the amount of years/months
	 * @returns {string}
	 */
	const getTimeFromPeriod = (period) => {
		const freq = period.substring(period.length - 1) === 'Y' ? 'years' : 'months';
		const amount = period.substring(1, period.length - 1);
		return (
			period ? `${amount} ${freq}` : ''
		);
	};

	const isValidPeriod = (period) => {
		try {
			// Period should throw an error if it is not properly provided
			// in order to validate it, we just send in case type is string
			new Period(typeof period === 'string' ? period : '');
			return true;
		} catch (e) {
			return false;
		}
	};

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
		custom: {
			price: (price) => (
				<React.Fragment>
					Single{' '}
					<span className="ncf__payment-term__price ncf__strong">{price}</span>{' '}
					payment
				</React.Fragment>
			),
			trialPrice: (trialPrice, trialPeriod) => (
				<React.Fragment>
					Unless you cancel during your trial you will be billed{' '}
					<span className="ncf__payment-term__price">{trialPrice}</span> per {trialPeriod}
					after the trial period.
				</React.Fragment>
			),
			monthlyPrice: (monthlyPrice) =>
				Boolean(monthlyPrice) && (
					<span className="ncf__payment-term__equivalent-price">
						That’s equivalent to{' '}
						<span className="ncf__payment-term__monthly-price">{monthlyPrice}</span>{' '}
						per month
					</span>
				),
			renewsText: (renewalPeriod) => (
				Boolean(renewalPeriod) && (
					<p className="ncf__payment-term__renews-text">
						Renews every {renewalPeriod} unless cancelled
					</p>
				)
			),
		}
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

		const createDiscount = () => {
			return (
				option.discount && (
					<span className="ncf__payment-term__discount">
						{option.bestOffer ? 'Best offer' : `Save ${option.discount} off RRP`}
					</span>
				)
			);
		};

		const createB2cDiscountCopy = () => {
			return (
				option.name === 'annual' && option.b2cPartnership && option.b2cDiscountCopy && (
					<span className="ncf__payment-term__discount">
						{option.b2cDiscountCopy}
					</span>
				)
			);
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
						// this should cover the cases different than annual, quarterly and monthly
						// for those containing period on option.value, render custom template, for the rest keep legacy render
						isValidPeriod(option.value) ?
							<div className="ncf__payment-term__description">
								{nameMap['custom'].price(option.price)}
								{nameMap['custom'].monthlyPrice(
									option.monthlyPrice && option.monthlyPrice !== '0' ? Number(option.monthlyPrice) : getMontlyPriceFromPeriod(option.amount, option.currency, option.value)
								)}
								{nameMap['custom'].renewsText(getTimeFromPeriod(option.value))}
							</div>
							: (
								<div>
									<span className={largePrice ? 'ncf__payment-term__large-price' : ''}>
										{option.price}
									</span>
									{option.chargeOnText && (
										<p className="ncf__payment-term__charge-on-text">
											{option.chargeOnText}
										</p>
									)}
								</div>
							)
					)}
				</React.Fragment>
			);
		};

		const getTermDisplayName = () => {

			const showTrialCopyInTitle =
				option.isTrial && !isPrintOrBundle && !isEpaper;

			const defaultTitle = (option.name && nameMap[option.name]) ? nameMap[option.name].title : '';

			const title = isFixedTermOffer
				? `${offerDisplayName} - ${defaultTitle}`
				: defaultTitle;

			let termDisplayName = '';
			if (showTrialCopyInTitle) {
				const termName = option.displayName ? option.displayName : 'Premium Digital';
				termDisplayName = `Trial: ${termName} - `;
			}

			const getTermPeriod = () => {
				// annual, quarterly and monthly
				if (nameMap[option.name]) {
					return title;
				}
				// custom offer with period provided
				if (isValidPeriod(option.value)) {
					return getTimeFromPeriod(option.value);
				}
				// custom legacy cases, where period is not provided
				return option.title;
			};

			const termPeriod = getTermPeriod();
			termDisplayName = `${termDisplayName}${termPeriod} `;

			return termDisplayName;
		};

		return (
			<div key={option.value} className={className}>
				<input {...props} />
				<label
					htmlFor={option.value}
					className="o-forms-input__label ncf__payment-term__label"
				>
					{createDiscount()}
					{createB2cDiscountCopy()}

					<span
						className={classNames([
							'ncf__payment-term__title',
							{ 'ncf__payment-term__title--large-price': largePrice },
						])}
					>
						{getTermDisplayName()}
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
			b2cDiscountCopy: PropTypes.string,
			isB2cPartnership: PropTypes.bool,
			discount: PropTypes.string,
			isTrial: PropTypes.bool,
			name: PropTypes.string.isRequired,
			price: PropTypes.string.isRequired,
			selected: PropTypes.bool,
			trialDuration: PropTypes.string,
			trialPrice: PropTypes.string,
			amount: PropTypes.string,
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
	offerDisplayName: PropTypes.string,
	showLegal: PropTypes.bool,
	largePrice: PropTypes.bool,
	optionsInARow: PropTypes.bool,
};
