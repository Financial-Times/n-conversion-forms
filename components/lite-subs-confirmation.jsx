import React from 'react';
import PropTypes from 'prop-types';

const EMAIL_DEFAULT_TEXT = 'your email';

export function LiteSubsConfirmation ({
	offer = '',
	email = EMAIL_DEFAULT_TEXT,
	details = null,
	subscriptionType = '',
	newsletters = []
}) {
	const detailElements = details && (
		<React.Fragment>
			<h2 className="ncf__header2--afterline">Your billing details</h2>
			<dl className="ncf__list">
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
		</React.Fragment>
	);


	return (
		<div className="ncf ncf__wrapper">
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<p className="ncf__paragraph--reduced-padding ncf__paragraph--subscription-confirmation">You&apos;ve been upgraded to:</p>
				<h1 className="ncf__header ncf__header--confirmation">{subscriptionType}</h1>
			</div>
			<p className="ncf__paragraph">
				Thank you for choosing to subscribe to {offer}. We are testing new ways to subscribe, <b>and the product you’ve chosen does not yet exist</b>.
			</p>
			<p className="ncf__paragraph">
				To thank you for your interest, we’ve upgraded you a {subscriptionType} subscription at <b>no additional cost</b>. For $5 a month, you can now enjoy {subscriptionType} access to FT.com, where you can explore not only the product you had purchased, but everything else the FT has to offer.
			</p>
			{newsletters.length > 0 && (<p className="ncf__paragraph">
				<b>Head to FT.com now to sign up to the newsletter(s) that would have been included with your {offer} subscription: </b>
				{newsletters.join(', ')}
			</p>)}
			<p className="ncf__center">
				<a href="/newsletter/" className="ncf__button ncf__button--submit ncf__button--margin ncf__lite-subs-confirmation--lite-subs-cta">Go to newsletters</a>
			</p>
			<p className="ncf__paragraph">
				We&apos;ve sent confirmation to {email}. Make sure you check your spam folder if you don’t receive it.
			</p>
			<p className="ncf__paragraph">
				Here&apos;s a summary of your {subscriptionType} subscription:
			</p>

			{ detailElements}

			<div className="ncf__headed-paragraph">
				<h3 className="ncf__header">Something not right?</h3>
				<p className="ncf__paragraph">
					Go to your <a className="ncf__link ncf__link--external" href="https://myaccount.ft.com/details/core/view" target="_blank" rel="noopener" data-trackable="yourAccount">account settings</a> to view or edit your account. If you need to get in touch call us on <a href="tel:+442077556248" className="ncf__link ncf__link--external">+44 (0) 207 755 6248</a>. Or contact us for additional support.
				</p>
			</div>
		</div>
	);
}

LiteSubsConfirmation.propTypes = {
	offer: PropTypes.string.isRequired,
	email: PropTypes.string,
	subscriptionType: PropTypes.string,
	details: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		data: PropTypes.string.isRequired,
		description: PropTypes.string
	})),
	newsletters: PropTypes.arrayOf(PropTypes.string),
};
