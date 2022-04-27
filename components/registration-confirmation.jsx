import React from 'react';
import PropTypes from 'prop-types';

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

export function RegistrationConfirmation ({ email = EMAIL_DEFAULT_TEXT }) {
	return (
		<div className="ncf">
			<div className="ncf__center ncf__margin">
				<div className="ncf__icon ncf__icon--tick ncf__icon--large"></div>
				<h1 className="ncf__header ncf__header--confirmation">Success</h1>
				<p className="ncf__paragraph ncf__confirmation--message">
					We’ve sent confirmation to {email}.
				</p>
			</div>

			<div className="ncf__divider-horizontal" />

			<div className="ncf__confirmation--links ncf__margin">
				<div className="ncf__confirmation--socials">
					<b>Breaking news alerts, direct to your lock screen</b>
					<p className="ncf__confirmation--mobile">
						{/* TODO: Once the store links are done, switch this sentence */}
						{/* Download our apps or follow us on our socials */}
						Find us in the app and google play stores or follow us on our
						socials
					</p>
					<p className="ncf__confirmation--desktop">
						Find us in the app and google play stores or follow us on our
						socials
					</p>
					<section
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
					</section>
				</div>
				<div className="ncf__confirmation--alerts">
					<b>
						Set up email alerts in
						<span aria-label="myFT" className="icon-myft" />
					</b>

					<p>
						Choose the content you want to follow by personalising your alerts
						for the most important topics and additional newsletters
					</p>
					<a
						href={'/myft'}
						className="margin-top-x4 ncf__button ncf__button--secondary"
						data-trackable="register-personalise-my-alerts"
					>
						Personalise my alerts
					</a>
				</div>
			</div>

			<a
				href={'/'}
				target="_parent"
				className="ncf__confirmation--finish ncf__button ncf__button--submit"
				data-trackable="register-finish"
			>
				Finish
			</a>
		</div>
	);
}

RegistrationConfirmation.propTypes = {
	email: PropTypes.string,
};
