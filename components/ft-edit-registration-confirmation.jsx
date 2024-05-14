import React from 'react';
import PropTypes from 'prop-types';

/***
 * This component has been created for a trial feature for the FT Edit app to be used inside
 * next-subscribe. This can be removed after the trial. The trial is beginning May 2024, please
 * reach out to light-apps channel if we dont reach out first, as to when this can be deleted.
 */
const EMAIL_DEFAULT_TEXT = 'bob@gmail.com';

export function FTEditRegistrationConfirmation({
	email = EMAIL_DEFAULT_TEXT,
	articleUrl = '',
	hubUrl = '/',
}) {
	return (
		<div className="ncf">
			<div className="ncf__center ncf__margin">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<h1 className="ncf__header ncf__header--confirmation">Success</h1>
				<p className="ncf_confirmation--message">
					Thank you for registering for FT Edit.
				</p>
				<p className="ncf__confirmation--message margin-top-x4 ">
					Enjoy 30 days of great journalism. We’ve sent confirmation to
					<div>
						<strong>{email}</strong>.
					</div>
				</p>
			</div>

			<a
				href={hubUrl}
				target="_parent"
				className=" ncf__confirmation--finish ncf__button ncf__button--submit"
				data-trackable="register-finish-head-to-ft-edit-hub"
			>
				Explore FT Edit
			</a>

			{articleUrl && (
				<a
					href={articleUrl}
					target="_parent"
					className=" ncf__confirmation--finish-article-read ncf__button ncf__button--secondary reduce-bottom-spacing"
					data-trackable="register-finish-head-to-article"
				>
					Continue reading
				</a>
			)}
		</div>
	);
}

FTEditRegistrationConfirmation.propTypes = {
	email: PropTypes.string,
	articleUrl: PropTypes.string,
	hubUrl: PropTypes.string,
};
