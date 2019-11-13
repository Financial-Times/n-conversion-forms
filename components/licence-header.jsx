import React from 'react';
import PropTypes from 'prop-types';

function LicenceHeader ({
	displayName = null,
	isTrial = false,
	welcomeText = null
}) {
	function createMarkup (text) {
		return { __html: text };
	}

	return (
		<React.Fragment>
			<h1 className="ncf__header">
				{ displayName && (`${displayName} | `) }

				{
					isTrial
						? ('Start your free trial')
						: ('Join your FT.com subscription')
				}
			</h1>

			{ welcomeText && (<p dangerouslySetInnerHTML={createMarkup(welcomeText)} />) }
		</React.Fragment>
	);
}

LicenceHeader.propTypes = {
	displayName: PropTypes.string,
	isTrial: PropTypes.bool,
	welcomeText: PropTypes.string
};

export default LicenceHeader;
