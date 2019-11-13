import React from 'react';
import PropTypes from 'prop-types';

function LicenceConfirmation ({
	isTrial = false,
	isEmbedded = false,
	duration = null
}) {
	const myFtLinkProps = {
		href: '/myft',
		className: 'ncf__button ncf__button--submit',
		...(isEmbedded && { target: '_top' })
	}

	const homepageLinkProps = {
		href: '/',
		className: 'ncf__link',
		...(isEmbedded && { target: '_top' })
	}

	return (
		<div className="ncf ncf__wrapper">
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<div className="ncf__paragraph">
					{
						isTrial
							? (<h1 className="ncf__header ncf__header--confirmation">Your{ duration ? ` ${duration}` : '' } trial has started</h1>)
							: (<h1 className="ncf__header ncf__header--confirmation">Great news, you have joined your company licence</h1>)
					}
				</div>
			</div>

			<p className="ncf__paragraph">
				Go to myFT to personalise your feed &amp; follow topics &amp; articles of interest to you. Set this up now or later.
			</p>

			<p className="ncf__paragraph">
				Explore the homepage &amp; enjoy your unlimited access &amp; exclusive content.
			</p>

			<p className="ncf__paragraph ncf__center">
				<a {...myFtLinkProps}>Go to myFT</a>
			</p>

			<p className="ncf__paragraph ncf__center">
				<a {...homepageLinkProps}>Go to the homepage</a>
			</p>
		</div>
	);
}

LicenceConfirmation.propTypes = {
	isTrial: PropTypes.bool,
	isEmbedded: PropTypes.bool,
	duration: PropTypes.string
};

export default LicenceConfirmation;
