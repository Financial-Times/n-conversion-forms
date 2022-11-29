import React from 'react';
import PropTypes from 'prop-types';

export function Form({ children, action = '', method = 'POST' }) {
	return (
		<div className="ncf__wrapper">
			<form className="ncf" action={action} method={method} noValidate>
				{children}
			</form>
		</div>
	);
}

Form.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	action: PropTypes.string,
	method: PropTypes.string,
};
