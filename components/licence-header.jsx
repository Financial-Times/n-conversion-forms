import React from 'react';
import PropTypes from 'prop-types';

export function LicenceHeader ({
	displayName = null,
	isTrial = false,
	isB2cPartnershipLicence = false,
	welcomeText = null,
	url
}) {
	function createMarkup (text) {
		return { __html: text };
	}

	return (
        <React.Fragment>
            <h1 className="ncf__header ncf__center">
                {
                    (isB2cPartnershipLicence || isTrial) ? (displayName && (`${displayName}`)) :

                        ('Great news! ' +
                            (displayName != null ? (`${displayName}`) : '') +
                            ' has an FT Subscription you can join')
                }
				{   isB2cPartnershipLicence
                    ? ('Welcome to the Financial Times')
                    : isTrial ? ('Start your free trial')
					: ''
                }
            </h1>
            {
                isTrial ? '' :
                            (<div className="ncf__center">
                                <div>
                                    {'Have you already joined the '}
                                    {displayName && (`${displayName}`)}
                                    {' account?'}
                                </div>
								{url ?
									(<div>
										<a href={url} className="ncf__button--secondary">Sign in</a>
									</div>) : ''
								}
                            </div>)
            }

            {welcomeText && (<p dangerouslySetInnerHTML={createMarkup(welcomeText)}/>)}
        </React.Fragment>
	);
}

LicenceHeader.propTypes = {
	displayName: PropTypes.string,
	isTrial: PropTypes.bool,
	welcomeText: PropTypes.string,
	isB2cPartnershipLicence: PropTypes.bool,
	url: PropTypes.string
};
