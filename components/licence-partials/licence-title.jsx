import React from 'react';
import PropTypes from 'prop-types';

export function LicenceTitle ({
	displayName = null,
	isTrial = false,
	isB2cPartnershipLicence = false,
}){
	if(isB2cPartnershipLicence || isTrial) {
		return (
			<h1 className="ncf__header ncf__center">
				{
					(displayName && (`${displayName}`))
				}
				{
					isB2cPartnershipLicence
						? ('Welcome to the Financial Times')
						: (isTrial && ('Start your free trial'))
				}
			</h1>
		);
	}

	return (
		<h1 className="ncf__header ncf__center">
			<span className="light-licence-text">Great news</span>
			{
				(displayName && (<span className="bold-licence-text">displayName</span>))
			}
			<span className="light-licence-text">has an FT Subscription you can join</span>
		</h1>
	);
}

LicenceTitle.propTypes = {
	displayName: PropTypes.string,
	isTrial: PropTypes.bool,
	isB2cPartnershipLicence: PropTypes.bool,
};