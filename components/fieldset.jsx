import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Fieldset ({
	children = null,
	name = null,
	legend = null,
	hideLegend = false,
	headingLevel: HeadingLevel = null,
	header = null,
	descriptor = null
}) {
	const fieldsetProps = {
		...(name && { name }),
		className: 'ncf__fieldset'
	};

	const legendClassName = classNames([
		'o-forms__label',
		{ 'o-normalise-visually-hidden': hideLegend }
	]);

	const legendElement = legend
		? (<legend className={legendClassName}>{ legend }</legend>)
		: null;

	const headingLevelElement = HeadingLevel
		? (
			<HeadingLevel className="ncf__header">
				{ header }
			</HeadingLevel>
		)
		: null;

	const descriptorElement = descriptor
		? (<p className="ncf__fieldset-descriptor">{ descriptor }</p>)
		: null;

	return (
		<fieldset {...fieldsetProps}>
			{ legendElement }

			{ headingLevelElement }

			{ descriptorElement }

			<div className="o-forms__group">
				{ children }
			</div>
		</fieldset>
	);
}

Fieldset.propTypes = {
	children: PropTypes.children,
	name: PropTypes.string,
	legend: PropTypes.string,
	hideLegend: PropTypes.boolean,
	headingLevel: PropTypes.string,
	header: PropTypes.elementType,
	descriptor: PropTypes.string
}

export default Fieldset;
