import React from 'react';
import PropTypes from 'prop-types';

export function LicenceSignIn ({
	displayName = '',
	url = '',
}) {
	return (
		<div className="ncf__center">
			{
				renderSignInTitle(displayName)
			}
			{(url !== '') &&
				(<div>
					<a href={url} className="ncf__button--secondary ncf__button--mid-width">Sign in</a>
				</div>)
			}
		</div>
	);
}

function renderSignInTitle (displayName) {
	let signInTitle;

	if (displayName !== '') {
		signInTitle =
			<p>
				<span>Have you already joined the </span>
				<span className="ncf__bold-licence-text">{displayName}</span>
				<span> account?</span>
			</p>;
	} else {
		signInTitle = <p>Already have a subscription?</p>;
	}

	return signInTitle;
}

LicenceSignIn.propTypes = {
	displayName: PropTypes.string,
	url: PropTypes.string
};
