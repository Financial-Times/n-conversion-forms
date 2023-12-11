import React from 'react';
import PropTypes from 'prop-types';

const EMAIL_DEFAULT_TEXT = 'your email';

export function Confirmation({
	// isTrial prop is needed for the floodlight pixel tracking.
	isTrial = false,
	isB2cPartnership = false,
	b2cPartnershipCopy = [],
	isTermedSubscriptionTermType = false,
	offer = '',
	email = EMAIL_DEFAULT_TEXT,
	details = null,
	directDebitMandateUrl = null,
	nextActionTop = null,
	nextActionBottom = null,
	newsletterScheduleExplainer = null,
}) {
	const containerDivProps = {
		className: 'ncf ncf__wrapper',
		...(isTrial && { 'data-signup-is-trial': 'true' }),
	};

	const isB2cPartnershipCopyAvailable =
		isB2cPartnership && b2cPartnershipCopy.length > 0;

	const detailElements = details && (
		<React.Fragment>
			<h2 className="ncf__header2--afterline">Your billing details</h2>
			<dl className="ncf__list">
				{details.map((detail, index) => (
					<React.Fragment key={index}>
						<dt className="ncf__list-title">{detail.title}</dt>
						<dd className="ncf__list-data">{detail.data}</dd>
						{detail.description && (
							<dd className="ncf__list-description">{detail.description}</dd>
						)}
					</React.Fragment>
				))}
			</dl>
		</React.Fragment>
	);

	const directDebitMandateUrlElement = directDebitMandateUrl && (
		<div>
			<p className="ncf__paragraph--reduced-padding">
				Download your{' '}
				<a
					href={directDebitMandateUrl}
					data-trackable="dd-mandate-link"
					id="encryptedMandateLink"
				>
					direct debit mandate
				</a>
				<i className="ncf__icon-download"></i>
			</p>
		</div>
	);

	return (
		<div {...containerDivProps}>
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<p className="ncf__paragraph--reduced-padding ncf__paragraph--subscription-confirmation">
					You are now subscribed to:
				</p>
				<h1 className="ncf__header ncf__header--confirmation">{offer}</h1>
			</div>

			{nextActionTop}
			{!isB2cPartnershipCopyAvailable && (
				<p className="ncf__paragraph">
					We’ve sent confirmation to {email}. Make sure you check your spam
					folder if you don’t receive it.
				</p>
			)}

			{isB2cPartnershipCopyAvailable ? (
				<p className="ncf__paragraph">
					{b2cPartnershipCopy[0]}
					<span className="ncf__legend">{` ${email}. `}</span>
					{b2cPartnershipCopy[1]}
				</p>
			) : (
				''
			)}

			{newsletterScheduleExplainer}

			<p className="ncf__paragraph">
				Here’s a summary of your {offer} subscription:
			</p>

			{detailElements}

			{directDebitMandateUrlElement}

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
					<a href="tel:+442077556248" className="ncf__link ncf__link--external">
						+44 (0) 207 755 6248
					</a>
					. Or contact us for additional support.
				</p>
			</div>
			<p className="ncf__paragraph">
				{
					!isTermedSubscriptionTermType
						? 'We will automatically renew your subscription using the payment method provided unless you cancel before your renewal date. '
						: ''
				}
				{'See our '}
				<a
					className="ncf__link ncf__link--external"
					href="http://help.ft.com/help/legal-privacy/terms-conditions/"
					target="_top"
					rel="noopener"
				>
					Terms &amp; Conditions
				</a>
				{' for details on how to cancel.'}
			</p>
			{nextActionBottom}
		</div>
	);
}

Confirmation.propTypes = {
	isTrial: PropTypes.bool,
	isB2cPartnership: PropTypes.bool,
	b2cPartnershipCopy: PropTypes.array,
	isTermedSubscriptionTermType: PropTypes.bool,
	offer: PropTypes.string.isRequired,
	email: PropTypes.string,
	details: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			data: PropTypes.string.isRequired,
			description: PropTypes.string,
		})
	),
	directDebitMandateUrl: PropTypes.string,
	nextActionTop: PropTypes.node,
	nextActionBottom: PropTypes.node,
	newsletterScheduleExplainer: PropTypes.node,
};
