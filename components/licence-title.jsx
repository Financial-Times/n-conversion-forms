import React from 'react';
import PropTypes from 'prop-types';

export function LicenceTitle ({
	displayName = '',
	isTrial = false,
	isB2cPartnershipLicence = false,
}) {
	if (isB2cPartnershipLicence || isTrial) {
		return (
			<h1 className="ncf__header ncf__center">
				{displayName !== '' && `${displayName} | `}
				{isB2cPartnershipLicence
					? 'Welcome to the Financial Times'
					: 'Start your free trial'}
			</h1>
		);
	}
	{
		return renderB2BTitle(displayName);
	}
}

function renderB2BTitle (displayName) {
	if (!displayName) {
		return (
			<h1 className="ncf__header ncf__center">Join your FT.com subscription</h1>
		);
	}

	return (
		<h1 className="ncf__header ncf__center">
			<span className="ncf__light-licence-text">
				Great news!
				<span className="ncf__bold-licence-text"> {displayName} </span>
				has an
				<span className="ncf__bold-licence-text"> FT subscription </span>
				you can join
			</span>
		</h1>
	);
}

LicenceTitle.propTypes = {
	displayName: PropTypes.string,
	isTrial: PropTypes.bool,
	isB2cPartnershipLicence: PropTypes.bool,
};
