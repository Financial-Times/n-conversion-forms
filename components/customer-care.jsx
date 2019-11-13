import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_HEADER_TEXT = 'Sorry, this is not available online';
const DEFAULT_MESSAGE_TEXT = 'Speak now to our Customer Care team to discuss your options';

function CustomerCare ({
	header = DEFAULT_HEADER_TEXT,
	message = DEFAULT_MESSAGE_TEXT
}) {
	return (
		<div className="ncf__wrapper ncf__center">
			<div className="ncf__paragraph">
				<h1 className="ncf__header">{header}</h1>
				<p id="customer-care-message">{message}</p>
			</div>

			<div className="ncf__paragraph ncf__customer-care">
				<div className="ncf__icon ncf__icon--phone ncf__icon--large"></div>
				<p>International Toll Free Number</p>
				<a id="customer-care-international-number" className="ncf__header ncf__link" href="tel:+80007056477">+ 800 0705 6477</a>
			</div>

			<div className="ncf__paragraph">
				<a className="ncf__link" href="https://help.ft.com/help/contact-us/">Find a local phone number</a>
			</div>
		</div>
	);
}

CustomerCare.propTypes = {
	header: PropTypes.string,
	message: PropTypes.string
};

export default CustomerCare;
