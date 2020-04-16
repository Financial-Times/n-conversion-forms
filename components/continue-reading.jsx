import React from 'react';
import PropTypes from 'prop-types';

export function ContinueReading({
	link = null,
	quote = '',
	isEmbedded = false,
}) {
	const titleElement = link ? (
		<p className="ncf__continue-reading-title">You can now continue reading:</p>
	) : (
		<p className="ncf__continue-reading-title">
			Become an FT subscriber to read:
		</p>
	);

	const aTagProps = {
		href: link,
		...(isEmbedded && { target: '_top' }),
		className: 'ncf__button ncf__button--secondary',
	};

	const linkElement = link && (
		<p className="ncf__center">
			<a {...aTagProps}>Continue reading</a>
		</p>
	);

	return (
		<div className="ncf__continue-reading-wrapper">
			{titleElement}

			<blockquote className="ncf__continue-reading-quote">{quote}</blockquote>

			{linkElement}
		</div>
	);
}

ContinueReading.propTypes = {
	link: PropTypes.string,
	quote: PropTypes.string,
	isEmbedded: PropTypes.bool,
};
