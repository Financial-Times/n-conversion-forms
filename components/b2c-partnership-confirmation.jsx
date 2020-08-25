import React from 'react';
import PropTypes from 'prop-types';

export function B2CPartnershipConfirmation ({
	hostPartner = true,
}
) {
	const myFtLinkProps = {
		href: '/myft',
		className: 'ncf__button ncf__button--submit'
	};

	const readingLinkProps = {
		href: '/',
		className: 'ncf__link',
	};

	const customerCareProps = {
		href: 'https://help.ft.com/',
		className: 'ncf__link'
	};

	const b2cSubscriptionType = hostPartner ? 'Digital subscription' : 'three months\' Premium access';

	const subscriptionAction = hostPartner ? 'We have sent you an email to start your 90-day All Access Digital with The Washington Post' : 'Please check your email to confirm your account and set your password.';

	return (
		<div className="ncf ncf__wrapper">
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"/>
				<div className="ncf__paragraph">
					{
						<h1 className="ncf__header ncf__header--confirmation">Welcome to your {b2cSubscriptionType}</h1>
					}
				</div>
			</div>

			<p className="ncf__paragraph">
				{subscriptionAction}
			</p>

			{!hostPartner &&
				<p className="ncf__paragraph">
					Explore the homepage &amp; enjoy your unlimited access &amp; exclusive content.
				</p>
			}

			<p className="ncf__paragraph ncf__center">
				<a {...myFtLinkProps}>Go to myFT</a>
			</p>

			<p className="ncf__paragraph ncf__center">
				<a {...readingLinkProps}>Start reading</a>
			</p>

			<p className="ncf__paragraph">
				<div className="ncf__strong">Can we help?</div>
				For any queries about your Premium subscription please <a {...customerCareProps}>contact Customer Care</a>.
			</p>
		</div>
	);
}

B2CPartnershipConfirmation.propTypes = {
	hostPartner: PropTypes.bool,
};
