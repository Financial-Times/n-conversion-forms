import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_HEADER_TEXT = 'Sorry, this is not available online';
const DEFAULT_MESSAGE_TEXT =
	'Speak now to our Customer Care team to discuss your options';

export function CustomerCare({
	header = DEFAULT_HEADER_TEXT,
	isCompact = false,
	message = DEFAULT_MESSAGE_TEXT,
}) {
	const className = classNames([
		'ncf__wrapper',
		'ncf__center',
		'ncf__customer-care',
		{ 'ncf__customer-care--compact': isCompact === true },
	]);

	return (
		<div className={className}>
			{(header || message) && (
				<div className="ncf__paragraph">
					{header && <h1 className="ncf__header">{header}</h1>}
					{message && <p id="customer-care-message">{message}</p>}
				</div>
			)}

			<div className="ncf__paragraph">
				<div className="ncf__icon ncf__icon--phone ncf__icon--large"></div>
				<p>International Toll Free Number</p>
				<p className="ncf__customer-care__phone">
					<a
						id="customer-care-international-number"
						className="ncf__header ncf__link"
						href="tel:+80007056477"
					>
						+ 800 0705 6477
					</a>
				</p>
			</div>

			<div className="ncf__paragraph">
				<a className="ncf__link" href="https://help.ft.com/help/contact-us/">
					Find a local phone number
				</a>
			</div>
		</div>
	);
}

CustomerCare.propTypes = {
	header: PropTypes.string,
	isCompact: PropTypes.bool,
	message: PropTypes.string,
};
