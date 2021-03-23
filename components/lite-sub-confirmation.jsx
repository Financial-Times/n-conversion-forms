import React from 'react';
import PropTypes from 'prop-types';

const EMAIL_DEFAULT_TEXT = 'your email';
const PREMIUM_OFFER = 'P2';

const isPremium = (productCode) => productCode === PREMIUM_OFFER;

const DetailsMobileView = ({details}) => (
	<dl className="ncf__list ncf__lite-sub__details ncf__lite-sub-confirmation--hidden-md ncf__lite-sub-confirmation--hidden-lg">
		{
			details.map((detail, index) =>
				(
					<React.Fragment key={index}>
						<dt className="ncf__list-title">{detail.title}</dt>
						<dd className="ncf__list-data">{detail.data}
							{detail.description && (<span className="ncf__lite-sub__details--description">({detail.description})</span>)}
						</dd>
					</React.Fragment>
				)
			)
		}
	</dl>
);

export function LiteSubConfirmation ({
	productCode = '',
	offerName = '',
	subscriptionAmount = '',
	email = EMAIL_DEFAULT_TEXT,
	details = [],

}) {
	const detailElements = details && (
		<React.Fragment>
			<h2 className="ncf__header2--afterline">Your billing details</h2>
			<dl className="ncf__list ncf__lite-sub-confirmation--hidden-sm">
				{
					details.map((detail, index) =>
						(
							<React.Fragment key={index}>
								<dt className="ncf__list-title">{detail.title}</dt>
								<dd className="ncf__list-data">{detail.data}
									{detail.description && (<div>({detail.description})</div>)}
								</dd>
							</React.Fragment>
						)
					)
				}
			</dl>
			<DetailsMobileView details={details}/>
		</React.Fragment>
	);


	return (
		<div className="ncf ncf__wrapper">
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<p className="ncf__paragraph--reduced-padding ncf__paragraph--subscription-confirmation">You&apos;ve been upgraded to:</p>
				<h1 className="ncf__header ncf__header--confirmation">{isPremium(productCode) ? 'Premium' : 'Digital'}</h1>
			</div>
			<p className="ncf__paragraph">Thank you for choosing to subscribe to {offerName}. We are not quite ready to deliver this type of subscription, so we have upgraded you to a {isPremium(productCode) ? 'Premium' : 'Digital'} 3 month subscription at no additional cost.</p>
			<p className="ncf__paragraph">For {subscriptionAmount} a month, you can now enjoy {isPremium(productCode) ? 'unlimited' : 'standard digital'} access to FT.com, where you can explore not only the product you had purchased, but everything else the FT has to offer. However, if you would like to cancel your subscription, please contact our <a className="barrier__terms-link ncf__link ncf__link--external" href="https://help.ft.com/contact">customer care team</a> and they will arrange this for you.</p>
			<p className="ncf__paragraph">
				<b>Head to FT.com now to sign up to the newsletter(s)</b> that would have been included with your {offerName} subscription
				{isPremium(productCode) ? <span>: Moral Money, Due Diligence, #techAsia, Energy Source, Trade Secrets and Scoreboard</span>
					: <span>: FirstFT Americas</span>
				}.
			</p>
			<p className="ncf__center">
				<a href="/newsletters/" className="ncf__button ncf__button--submit ncf__button--margin ncf__lite-sub-confirmation--lite-sub-cta">Go to newsletters</a>
			</p>
			<p className="ncf__paragraph">
				We&apos;ve sent confirmation to {email}. Make sure you check your spam folder if you don’t receive it.
			</p>
			<p className="ncf__paragraph">
				Here&apos;s a summary of your {isPremium(productCode) ? 'Premium' : 'Digital'} subscription:
			</p>

			{ detailElements}

			<div className="ncf__headed-paragraph">
				<h3 className="ncf__header">Something not right?</h3>
				<p className="ncf__paragraph">
					Go to your <a className="ncf__link ncf__link--external" href="https://myaccount.ft.com/details/core/view" target="_blank" rel="noopener" data-trackable="yourAccount">account settings</a> to view or edit your account. If you need to get in touch call us on <a href="tel:+18556852372" className="ncf__link ncf__link--external">+1 855 685 2372</a>. Or contact us for additional support.
				</p>
			</div>
		</div>
	);
}

LiteSubConfirmation.propTypes = {
	offerName: PropTypes.string.isRequired,
	subscriptionAmount: PropTypes.string.isRequired,
	productCode: PropTypes.string,
	email: PropTypes.string,
	details: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		data: PropTypes.string.isRequired,
		description: PropTypes.string
	})),
};
