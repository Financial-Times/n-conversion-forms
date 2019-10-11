import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Message({ title, message, additional = [], actions = null, name, isNotice, isError, isSuccess, isInform, isHidden }) {

	const additionalMessages = additional.map((text, index) => {
		return <p className="o-message__content--additional" key={index}>{text}</p>
	})

	const oMessageClassNames = classNames({
		'o-message': true,
		'o-message--notice-inner': isNotice,
		'o-message--alert-inner': !isNotice,
		'o-message--error': isError,
		'o-message--success': !isError && isSuccess,
		'o-message--inform': !isError && isSuccess,
		'o-message--inform': !isError && !isSuccess && isInform,
		'o-message--neutral': !isError && !isSuccess && !isInform,
	});

	const ncfClassNames = classNames(
		'ncf__message', 'o-forms', 'o-forms--wide', { ' n-ui-hide': isHidden }
	)

	let callToActionsList = null;
	if (actions) {
		const callToActionElements = actions.map(({ link, isSecondary, text }, index) => {
			return <a href={link} key={index} className={isSecondary ? 'o-message__actions__secondary' : 'o-message__actions__primary'}>{text}</a>
		});
		callToActionsList = <div className="o-message__actions">{callToActionElements}</div>;
	}

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

Message.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string.isRequired,
	additional: PropTypes.arrayOf(PropTypes.string),
	actions: PropTypes.arrayOf({
		link: PropTypes.string.isRequired,
		isSecondary: PropTypes.bool,
		text: PropTypes.string
	}),
	name: PropTypes.string,
	isNotice: PropTypes.bool,
	isError: PropTypes.bool,
	isSuccess: PropTypes.bool,
	isInform: PropTypes.bool,
	isHidden: PropTypes.bool,
};

export default Message;
