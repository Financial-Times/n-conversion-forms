import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Submit ({
	id = 'submitButton',
	isCentered = false,
	isDisabled = false,
	backButtonUrl = null,
	label = 'Continue'
}) {
	const divClassName = classNames([
		// The space at the beginning is so that we match what the handlebars
		// template does. Not great I know. :/
		{ ' ncf__field--center': isCentered },
		{ ' ncf__field--flex': backButtonUrl }
	]);

	const backButton = backButtonUrl
		? (
			<a
				className="ncf__button"
				href={backButtonUrl}
				target="_parent"
				data-trackable="link"
			>Back</a>
		)
		: null;

	return (
		<div className={divClassName}>
			{ backButton }

			<button
				id={id}
				className="ncf__button ncf__button--submit"
				data-trackable="submit"
				type="submit"
				disabled={isDisabled}
			>
				{ label }
			</button>
		</div>
	);
}

Submit.propTypes = {
	id: PropTypes.string,
	isCentered: PropTypes.bool,
	isDisabled: PropTypes.bool,
	backButtonUrl: PropTypes.string,
	label: PropTypes.string
};
