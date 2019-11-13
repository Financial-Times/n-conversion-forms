import React from 'react';
import PropTypes from 'prop-types';

const EMAIL_DEFAULT_TEXT = 'your email';

function RegistrationConfirmation ({
	email = EMAIL_DEFAULT_TEXT
}) {
	return (
		<div className="ncf ncf__wrapper">
			<div className="ncf__center">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<div className="ncf__paragraph">
					<h1 className="ncf__header ncf__header--confirmation">Welcome to FT.com</h1>
				</div>
			</div>

			<p className="ncf__paragraph">
				We’ve sent confirmation of your new account to {email}.
			</p>

			<div className="ncf__headed-paragraph">
				<h2 className="ncf__header">Something not right?</h2>
				<p className="ncf__paragraph">
					Go to your <a className="ncf__link ncf__link--external" href="https://myaccount.ft.com/details/core/view" target="_blank" rel="noopener" data-trackable="yourAccount">account settings</a> to view or edit your account. If you need to get in touch call us on <a href="tel:+442077556248" className="ncf__link ncf__link--external">+44 (0) 207 755 6248</a>. Or contact us for additional support.
				</p>
			</div>

			<p className="ncf__center">
				<a href="/products " className="ncf__button ncf__button--submit">See our subscription packages</a>
			</p>
		</div>
	);
}

RegistrationConfirmation.propTypes = {
	email: PropTypes.string
};

export default RegistrationConfirmation;
