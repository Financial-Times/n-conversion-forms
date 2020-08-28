import React from 'react';
import PropTypes from 'prop-types';

export function LicenceSignIn ({
	displayName = null,
	url = null,
}) {
	return (
		<div className="ncf__center">
			<p>
				{'Have you already joined the '}
				{displayName && (<span className="bold-licence-text">displayName</span>)}
				{' account?'}
			</p>
			{url &&
                (<div>
                	<a href={url} className="ncf__button--secondary mid-width-button">Sign in</a>
                </div>)
			}
		</div>
	);
}

LicenceSignIn.propTypes = {
	displayName: PropTypes.string,
	url: PropTypes.string
};