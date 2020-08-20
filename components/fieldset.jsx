import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Fieldset ({
	children = null,
	name = null,
	legend = null,
	hideLegend = false,
	headingLevel: HeadingLevel = null,
	header = null,
	descriptor = null,
}) {
	const fieldsetProps = {
		...(name && { name }),
		className: 'ncf__fieldset',
	};

	const legendClassName = classNames([
		'ncf__legend',
		{ 'o-normalise-visually-hidden': hideLegend },
	]);

	const legendElement = legend ? (
		<legend className={legendClassName}>{legend}</legend>
	) : null;

	const headingLevelElement = HeadingLevel ? (
		<HeadingLevel className="ncf__header">{header}</HeadingLevel>
	) : null;

	const descriptorElement = descriptor ? (
		<p className="ncf__fieldset-descriptor">{descriptor}</p>
	) : null;

	return (
		<fieldset {...fieldsetProps}>
			{legendElement}

			{headingLevelElement}

			{descriptorElement}
			<div className="ncf__fields">{children}</div>
		</fieldset>
	);
}

Fieldset.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	name: PropTypes.string,
	legend: PropTypes.string,
	hideLegend: PropTypes.bool,
	headingLevel: PropTypes.string,
	header: PropTypes.node,
	descriptor: PropTypes.node,
};
