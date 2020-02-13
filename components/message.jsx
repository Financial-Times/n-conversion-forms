import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Message ({ title, message, additional = [], actions = null, name, isNotice, isError, isSuccess, isInform, isStaticMessage, isHidden }) {

	const additionalMessages = additional.map((text, index) => {
		return <p className="o-message__content--additional" key={index}>{text}</p>;
	});

	const oMessageClassNames = classNames({
		'o-message': true,
		'o-message--inner': !isStaticMessage,
		'o-message--notice': isNotice && !isStaticMessage,
		'o-message--alert': !isNotice && !isStaticMessage,
		'o-message--error': isError,
		'o-message--success': !isError && isSuccess,
		'o-message--inform': !isError && !isSuccess && isInform,
		'o-message--neutral': !isError && !isSuccess && !isInform,
	});

	const ncfClassNames = classNames(
		'ncf__message',
		{ 'ncf__hidden': isHidden }
	);

	const callToActionsList = actions ? (
		<div className="o-message__actions">
			{actions.map(({ link, isSecondary, text }, index) => {
				return <a href={link} key={index} className={isSecondary ? 'o-message__actions__secondary' : 'o-message__actions__primary'}>{text}</a>;
			})}
		</div>
	) : null;

	return (
		<div className={ncfClassNames} data-message-name={name}>
			<div className={oMessageClassNames} data-o-component="o-message">
				<div className="o-message__container" >
					<div className="o-message__content">
						<p className="o-message__content-main">
							{title ? <span className="o-message__content-highlight">{title}</span> : null}
							<span className="o-message__content-detail">{message}</span>
						</p>
						{additionalMessages}
						{callToActionsList}
					</div>
				</div >
			</div >
		</div >
	);
}

const actionType = PropTypes.shape({
	link: PropTypes.string.isRequired,
	isSecondary: PropTypes.bool,
	text: PropTypes.string
});
Message.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string.isRequired,
	additional: PropTypes.arrayOf(PropTypes.string),
	actions: PropTypes.arrayOf(actionType),
	name: PropTypes.string,
	isNotice: PropTypes.bool,
	isError: PropTypes.bool,
	isSuccess: PropTypes.bool,
	isInform: PropTypes.bool,
	isHidden: PropTypes.bool,
};
