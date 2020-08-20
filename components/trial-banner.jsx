import React from 'react';
import PropTypes from 'prop-types';

export function TrialBanner ({
	trialDuration = ''
}) {
	const durationMessage = trialDuration ? <><span className="ncf__strong">{trialDuration}</span>{' '}</> : '';

	return (
		<div id="trialBanner" className="ncf__trial-banner">
			<p className="ncf__trial-banner-content">Your free {durationMessage}FT.com trial
				<img
					src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2Fassets%2Fb2b%2Fmacron-desktop-banner.png?source=conversion&height=40"
					alt="Emmanuel Macron"
					className="ncf__trial-banner-img"
				/>
			</p>
		</div>
	);
}

TrialBanner.propTypes = {
	trialDuration: PropTypes.string
};
