import React from 'react';
import PropTypes from 'prop-types';
import { LicenceSignIn } from './licence-sign-in';
import { LicenceTitle } from './licence-title';

export function LicenceHeader(props) {
	const {
		displayName = '',
		logoUrl = '',
		isTrial = false,
		isB2cPartnershipLicence = false,
		welcomeText = '',
		url = '',
	} = props;
	function createMarkup(text) {
		return { __html: text };
	}

	return (
		<React.Fragment>
			{Boolean(logoUrl) && (
				<img className="ncf__logo" alt="logo" src={logoUrl} />
			)}

			<LicenceTitle
				displayName={displayName}
				isTrial={isTrial}
				isB2cPartnershipLicence={isB2cPartnershipLicence}
			/>

			{!isTrial && !isB2cPartnershipLicence && (
				<LicenceSignIn displayName={displayName} url={url} />
			)}

			{welcomeText && <p dangerouslySetInnerHTML={createMarkup(welcomeText)} />}
		</React.Fragment>
	);
}

LicenceHeader.propTypes = {
	displayName: PropTypes.string,
	logoUrl: PropTypes.string,
	isTrial: PropTypes.bool,
	welcomeText: PropTypes.string,
	isB2cPartnershipLicence: PropTypes.bool,
	url: PropTypes.string,
};
