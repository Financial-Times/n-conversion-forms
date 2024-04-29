import React from 'react';
import PropTypes from 'prop-types';

/***
 * This component has been created for a trial feature for the FT Edit app to be used inside
 * next-subscribe. This can be removed after the trial. The trial is beginning May 2024, please
 * reach out to light-apps channel if we dont reach out first, as to when this can be deleted.
 */
const EMAIL_DEFAULT_TEXT = 'your email';

const SOCIALS = [
	{
		name: 'instagram',
		link: 'https://www.instagram.com/financialtimes',
	},
	{
		name: 'linkedin',
		link: 'https://www.linkedin.com/company/financial-times',
	},
	{
		name: 'twitter',
		link: 'https://twitter.com/FT',
	},
	{
		name: 'facebook',
		link: 'https://www.facebook.com/financialtimes',
	},
];

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
				<p className="ncf__FT_Edit_confirmation--message">
					Thank you for registering for FT Edit.
				</p>
				<p className="ncf__FT_Edit_confirmation--message margin-top-x4 ">
					Enjoy 30 days of great journalism. We’ve sent confirmation to {email}.
				</p>
			</div>

			<div className="ncf__divider-horizontal" />

			<div className="ncf__FT_Edit_confirmation--links ncf__margin">
				<div className="ncf__FT_Edit_confirmation--socials">
					<b>Breaking news alerts, direct to your lock screen</b>
					<p className="ncf__FT_Edit_confirmation--mobile">
						Download our apps or follow us on our socials
					</p>
					<p className="ncf__FT_Edit_confirmation--desktop">
						Find us in the app stores or follow us on our socials
					</p>
					<div className="ncf__FT_Edit_confirmation--badges">
						<div
							className="o-social-follow"
							aria-label="Follow on social media"
						>
							{SOCIALS.map(({ name, link }) => (
								<a
									key={name}
									href={link}
									className={`o-social-follow-icon o-social-follow-icon--${name}`}
									target="_blank"
									rel="noopener noreferrer"
									data-trackable={`register-social-${name}`}
								>
									<span className="o-social-follow-icon__label">on {name}</span>
								</a>
							))}
						</div>
						<div
							className="ncf__FT_Edit_confirmation--mobile ncf__FT_Edit_confirmation--app-badges"
							aria-label="Download the app"
						>
							<a
								key="apple-ft-edit"
								href="https://apps.apple.com/gb/app/ft-edit-by-the-financial-times/id1574510369"
								className={`ncf-icon ncf-icon--apple`}
								target="_blank"
								rel="noopener noreferrer"
								data-trackable={`register-app-apple-ft-edit`}
							>
								<span className="o-social-follow-icon__label">on apple</span>
							</a>
						</div>
					</div>
				</div>
				<div className="ncf__FT_Edit_confirmation--alerts">
					<b>
						Set up email alerts in
						<span aria-label="myFT" className="ncf-icon ncf-icon--myft" />
					</b>

					<p>
						Choose the content you want to follow by personalising your alerts
						for the most important topics and additional newsletters
					</p>
					<a
						href="/myft"
						className="margin-top-x4 ncf__button ncf__button--secondary"
						data-trackable="register-personalise-my-alerts"
					>
						Personalise my alerts
					</a>
				</div>
			</div>

			<a
				href={hubUrl}
				target="_parent"
				className=" ncf__FT_Edit_confirmation--finish ncf__button ncf__button--submit"
				data-trackable="register-finish-head-to-ft-edit-hub"
			>
				Explore our FT Edit hub
			</a>

			{articleUrl && (
				<a
					href={articleUrl}
					target="_parent"
					className=" ncf__FT_Edit_confirmation--finish-article-read ncf__button ncf__button--secondary reduce-bottom-spacing"
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
