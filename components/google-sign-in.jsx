import React from 'react';
import PropTypes from 'prop-types';

export function GoogleSignIn ({ signInRedirectUrl }) {
	return (
		<>
			<link
				href="https://fonts.googleapis.com/css?family=Roboto"
				rel="stylesheet"
			></link>
			<base target="_parent" />
			<a className="google_button" href={signInRedirectUrl}>
				Sign in with Google
			</a>
		</>
	);
}

GoogleSignIn.propTypes = {
	signInRedirectUrl: PropTypes.string.isRequired,
};
