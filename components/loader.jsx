import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Loader ({
	children,
	showLoader,
	title,
}) {
	const label = title ? (
		<div className="ncf__loader__content__title" id="loader-aria-label">{title}</div>
	) : (
		<div className="n-ui-hide" id="loader-aria-label">Loading</div>
	);
	const className = classNames([
		'ncf__loader',
		{ 'is-visible': showLoader },
		{ 'n-ui-hide': !showLoader }
	]);
	const props = {
		className,
		role: 'dialog',
		'aria-labelledby': 'loader-aria-label',
		'aria-describedby': 'loader-aria-description',
		'aria-modal': true,
		...(showLoader && { tabIndex: 1 })
	};

	return (
		<div {...props}>
			<div className="ncf__loader__content">
				{label}
				<div className="ncf__loader__content__main" id="loader-aria-description">
					{children}
				</div>
			</div>
		</div>
	);
}

Loader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	showLoader: PropTypes.bool,
	title: PropTypes.string
};

export default Loader;
