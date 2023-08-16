import React from 'react';
import PropTypes from 'prop-types';

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

export function SevenDayPassExperimentConfirmation({
	offerName = '',
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
					You are now subscribed to:
				</p>
				<h1 className="ncf__header ncf__header--confirmation">
					{'Premium Digital'}
				</h1>
			</div>
			<p className="ncf__paragraph">
				Exciting news! You are one of the first to try a{' '}
				<strong>{offerName}</strong>. As a thank you, we are pleased to extend
				your subscription to one month at no additional cost.
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
				Please save or print this page for your records as your purchase
				confirmation.
			</p>

			<p className="ncf__paragraph">
				Here&apos;s a summary of your Premium Digital subscription:
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
					<a href="tel:+442077556248" className="ncf__link ncf__link--external">
						+44 20 7755 6248
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

SevenDayPassExperimentConfirmation.propTypes = {
	offerName: PropTypes.string.isRequired,
	details: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			data: PropTypes.string.isRequired,
		})
	),
};
