import React from 'react';
import PropTypes from 'prop-types';
import {LicenceSignIn} from './licence-partials/licence-sign-in';
import {LicenceTitle} from './licence-partials/licence-title';

export function LicenceHeader (props) {
	 const {
		displayName = null,
		isTrial = false,
		isB2cPartnershipLicence = false,
		welcomeText = null,
		url
	} = props;
	function createMarkup (text) {
		return { __html: text };
	}

	return (
		<React.Fragment>
			<LicenceTitle
				displayName={displayName}
				isTrial={isTrial}
				isB2cPartnershipLicence={isB2cPartnershipLicence}
			/>

			{(!isTrial && <LicenceSignIn displayName={displayName} url={url}/>)}

			{welcomeText && (<p dangerouslySetInnerHTML={createMarkup(welcomeText)}/>)}
		</React.Fragment>
	);
}

LicenceHeader.propTypes = {
	displayName: PropTypes.string,
	isTrial: PropTypes.bool,
	welcomeText: PropTypes.string,
	isB2cPartnershipLicence: PropTypes.bool,
	url: PropTypes.string
};
