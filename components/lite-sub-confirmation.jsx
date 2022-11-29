import React from 'react';
import PropTypes from 'prop-types';

const EMAIL_DEFAULT_TEXT = 'your email';
const PREMIUM_OFFER = 'P2';

const isPremium = (productCode) => productCode === PREMIUM_OFFER;

const DetailsMobileView = ({ details }) => (
	<dl className="ncf__list ncf__lite-sub__details ncf__lite-sub-confirmation--hidden-md ncf__lite-sub-confirmation--hidden-lg">
		{details.map((detail, index) => (
			<React.Fragment key={index}>
				<dt className="ncf__list-title">{detail.title}</dt>
				<dd className="ncf__list-data">{detail.data}</dd>
			</React.Fragment>
		))}
	</dl>
);

export function LiteSubConfirmation({
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
				{details.map((detail, index) => (
					<React.Fragment key={index}>
						<dt className="ncf__list-title">{detail.title}</dt>
						<dd className="ncf__list-data">{detail.data}</dd>
					</React.Fragment>
				))}
			</dl>
			<DetailsMobileView details={details} />
		</React.Fragment>
	);

	return (
		<div className="ncf ncf__wrapper">
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<p className="ncf__paragraph--reduced-padding ncf__paragraph--subscription-confirmation">
					You&apos;ve been upgraded to:
				</p>
				<h1 className="ncf__header ncf__header--confirmation">
					{isPremium(productCode) ? 'Premium Digital' : 'Standard Digital'}
				</h1>
			</div>
			<p className="ncf__paragraph">
				Thank you for choosing to subscribe to <strong>{offerName}</strong>. We
				are not quite ready to deliver this type of subscription, so we have
				upgraded you to a {isPremium(productCode) ? 'Premium' : 'Digital'} 3
				month subscription at no additional cost.
			</p>
			<p className="ncf__paragraph">
				For {subscriptionAmount} a month, here&apos;s what your subscription
				covers:
			</p>
			<ul className="ncf__unordered-list">
				<li>
					Access to stories from over 600 journalists in 50+ countries covering
					markets, politics, business, tech and more
				</li>
				<li>
					FirstFT: a daily newsletter with the global stories you need to know
				</li>
				<li>Share 10 articles per month with colleagues, family and friends</li>
			</ul>
			<p className="ncf__paragraph">
				However, if you would like to cancel your subscription, please contact
				our{' '}
				<a
					className="ncf__link ncf__link--external"
					href="https://help.ft.com/contact/"
					target="_blank"
					rel="noopener noreferrer"
				>
					customer care team
				</a>{' '}
				and they will arrange this for you.
			</p>
			<p className="ncf__center">
				<a
					href="/"
					className="ncf__button ncf__button--submit ncf__button--margin ncf__lite-sub-confirmation--lite-sub-cta"
				>
					Go to FT.com
				</a>
			</p>
			<p className="ncf__paragraph">
				We&apos;ve sent confirmation to {email}. Make sure you check your spam
				folder if you don’t receive it.
			</p>
			<p className="ncf__paragraph">
				Here&apos;s a summary of your{' '}
				{isPremium(productCode) ? 'Premium Digital' : 'Standard Digital'}{' '}
				subscription:
			</p>

			{detailElements}

			<div className="ncf__headed-paragraph">
				<h3 className="ncf__header">Something not right?</h3>
				<p className="ncf__paragraph">
					Go to your{' '}
					<a
						className="ncf__link ncf__link--external"
						href="https://www.ft.com/myaccount/personal-details"
						target="_blank"
						rel="noopener noreferrer"
						data-trackable="yourAccount"
					>
						account settings
					</a>{' '}
					to view or edit your account. If you need to get in touch call us on{' '}
					<a href="tel:+18556852372" className="ncf__link ncf__link--external">
						+1 855 685 2372
					</a>
					. Or{' '}
					<a
						className="ncf__link ncf__link--external"
						href="https://help.ft.com/contact/"
						target="_blank"
						rel="noopener noreferrer"
					>
						contact us
					</a>{' '}
					for additional support.
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
	details: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			data: PropTypes.string.isRequired,
		})
	),
};
