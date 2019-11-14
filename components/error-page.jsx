import React from 'react';
import PropTypes from 'prop-types';

function ErrorPage ({
	children,
	header = 'Sorry, something went wrong',
	message = 'Speak to our Customer Care team now so we can help.'
}) {
	return (
		<div className="ncf__wrapper ncf__center ncf__error-page">
			<div className="ncf__icon ncf__icon--error ncf__icon--large"></div>
			<div className="ncf__paragraph">
				<h1 className="ncf__header">{header}</h1>
				<p id="error-message">{message}</p>
			</div>
			<div className="ncf__error-page__content">
				{children}
			</div>
			<div className="ncf__paragraph">
				<p>International Toll Free Number</p>
				<a id="error-international-number" className="ncf__header ncf__link" href="tel:+80007056477">+ 800 0705 6477</a>
			</div>
			<div className="ncf__paragraph">
				<a className="ncf__link" href="https://help.ft.com/help/contact-us/">Find a local phone number</a>
			</div>
		</div>
	);
}

ErrorPage.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	header: PropTypes.string,
	message: PropTypes.string,
};

export default ErrorPage;
