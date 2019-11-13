import React from 'react';
import PropTypes from 'prop-types';

function Section ({
	children = null,
}) {
	return (
		<div className="o-forms-section o-forms-section--wide">
			<div className="o-forms-section__message">
				{ children }
			</div>
		</div>
	);
}

Section.propTypes = {
	children: PropTypes.children,
};

export default Section;
