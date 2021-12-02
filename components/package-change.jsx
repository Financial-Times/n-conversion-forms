import React from 'react';
import PropTypes from 'prop-types';

export function PackageChange ({
	changePackageUrl,
	currentPackage,
	packageDescription,
}) {
	return (
		<div className="ncf__package-change">
			<div className="ncf__package-change__package">
				<div className="ncf__package-change__content">
					<p>
						You have chosen{' '}
						<span className="ncf__strong">{currentPackage}</span>
					</p>
					{packageDescription && (
						<p className="ncf__package-change__content__description">
							{packageDescription}
						</p>
					)}
				</div>
				<div className="ncf__package-change__actions">
					<a
						href={changePackageUrl}
						className="ncf__button ncf__button--mono ncf__button--baseline"
						data-trackable="change"
					>
						Change
					</a>
				</div>
			</div>
		</div>
	);
}

PackageChange.propTypes = {
	changePackageUrl: PropTypes.string.isRequired,
	currentPackage: PropTypes.string.isRequired,
	packageDescription: PropTypes.string,
};
