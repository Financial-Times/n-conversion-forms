import React from 'react';
import PropTypes from 'prop-types';

export function Section({ children }) {
	return (
		<div className="o-forms-section o-forms-section--wide">
			<div className="o-forms-section__message">{children}</div>
		</div>
	);
}

Section.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
