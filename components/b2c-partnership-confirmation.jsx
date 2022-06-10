import React from 'react';
import PropTypes from 'prop-types';

export function B2CPartnershipConfirmation ({ ctaElement = null }) {
	const readingLinkProps = {
		href: '/',
		className: 'ncf__link',
	};

	const customerCareProps = {
		href: 'https://help.ft.com/',
		className: 'ncf__link',
	};

	return (
		<div className="ncf ncf__wrapper">
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large" />
				<div className="ncf__paragraph">
					{
						<h1 className="ncf__header ncf__header--confirmation">
							{'Welcome to your 30 days\' Premium access'}
						</h1>
					}
				</div>
			</div>

			<p className="ncf__paragraph">
				Please check your email to confirm your account and set your password.
			</p>

			<p className="ncf__paragraph">
				Explore the homepage &amp; enjoy your unlimited access &amp; exclusive
				content.
			</p>

			{ctaElement || (
				<p className="ncf__paragraph ncf__center">
					<a className="ncf__button ncf__button--submit" href="/myft">
						Go to myFT
					</a>
				</p>
			)}

			<p className="ncf__paragraph ncf__center">
				<a {...readingLinkProps}>Start reading</a>
			</p>

			<p className="ncf__paragraph">
				<div className="ncf__strong">Can we help?</div>
				For any queries about your Premium subscription please{' '}
				<a {...customerCareProps}>contact Customer Care</a>.
			</p>
		</div>
	);
}

B2CPartnershipConfirmation.propTypes = {
	ctaElement: PropTypes.node,
};
