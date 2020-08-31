import React from 'react';
import PropTypes from 'prop-types';

export function LicenceSignIn ({
	displayName = null,
	url = null,
}) {
	return (
		<div className="ncf__center">
			{displayName &&
				(<p>
					<span>Have you already joined the </span>
					<span className="ncf__bold-licence-text">{displayName}</span>
					<span> account?</span>
				</p>)
			}
			{url &&
                (<div>
                	<a href={url} className="ncf__button--secondary ncf__mid-width-button">Sign in</a>
                </div>)
			}
		</div>
	);
}

LicenceSignIn.propTypes = {
	displayName: PropTypes.string,
	url: PropTypes.string
};
