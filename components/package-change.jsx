import React from 'react';
import PropTypes from 'prop-types';

export function PackageChange({ changePackageUrl, currentPackage }) {
	return (
		<div className="ncf__package-change">
			<div className="ncf__package-change__package">
				<p className="ncf__package-change__content">
					You have chosen <span className="ncf__strong">{currentPackage}</span>
				</p>
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
};
