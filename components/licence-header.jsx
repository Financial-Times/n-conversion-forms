import React from 'react';
import PropTypes from 'prop-types';

export function LicenceHeader ({
	displayName = null,
	isTrial = false,
	isB2cPartnershipLicence = false,
	welcomeText = null
}) {
	function createMarkup (text) {
		return { __html: text };
	}

	return (
		<React.Fragment>
			<h1 className="ncf__header">
			{ displayName && (`${displayName} | `) }
				{
					isB2cPartnershipLicence
						? ('Welcome to the Financial Times')
						: isTrial
							? ('Start your free trial')
							: ('Join your FT.com subscription')
				}
			</h1>

			{ welcomeText && (<p dangerouslySetInnerHTML={createMarkup(welcomeText)} />) }
		</React.Fragment>
	);
}

LicenceHeader.propTypes = {
	displayName: PropTypes.string,
	isTrial: PropTypes.bool,
	welcomeText: PropTypes.string,
	isB2cPartnershipLicence: PropTypes.bool,
};
