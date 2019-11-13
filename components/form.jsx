import React from 'react';
import PropTypes from 'prop-types';

function Form ({
	children,
	action = '',
	method = 'POST'
}) {
	return (
		<div className="ncf__wrapper">
			<form
				className="ncf"
				action={action}
				method={method}
				noValidate
			>
				{ children }
			</form>
		</div>
	);
}

Form.propTypes = {
	children: PropTypes.children,
	action: PropTypes.string,
	method: PropTypes.string
};

export default Form;
