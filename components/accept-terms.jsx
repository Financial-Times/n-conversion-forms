import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_AGE_RESTRICTION = '16';
const DEFAULT_PRIVACY_POLICIES_POSITION = 'top';

export function AcceptTerms({
	isAuthFirstAccount = false,
	isAuthFirstPayment = false,
	hasError = false,
	isSignup = false,
	isRegister = false,
	isChecked = false,
	isB2b = false,
	isB2cPartnership = false,
	ageRestriction = DEFAULT_AGE_RESTRICTION,
	isEmbedded = false,
	isCorpSignup = false,
	isTrial = false,
	isTransition = false,
	transitionType = null,
	isPrintProduct = false,
	specialTerms = null,
	isSingleTerm = false,
	isDeferredBilling = false,
	hideConfirmTermsAndConditions = false,
	children,
	privacyPoliciesPosition = DEFAULT_PRIVACY_POLICIES_POSITION,
}) {
	const divProps = {
		id: 'acceptTermsField',
		className: 'o-forms-field o-layout-typography ncf__validation-error',
		'data-validate': 'required,checked',
		...(isSignup && { 'data-trackable': 'sign-up-terms' }),
		...(isRegister && { 'data-trackable': 'register-up-terms' }),
	};

	const labelClassName = classNames([
		'o-forms-input',
		'o-forms-input--checkbox',
		{
			'o-forms-input--invalid': hasError,
		},
	]);

	const inputProps = {
		id: 'termsAcceptance',
		type: 'checkbox',
		name: 'termsAcceptance',
		value: 'true',
		'data-trackable': 'field-terms',
		'aria-required': 'true',
		required: true,
		...(isChecked && { defaultChecked: true }),
	};

	const authFirstStepTerms = (
		<div className="auth-first-step-terms">
			<span className={`consent-text--${privacyPoliciesPosition}`}>
				For more information about how we use your data, please refer to our{' '}
				<a
					className="ncf__link--external"
					href="https://help.ft.com/legal-privacy/privacy-policy/"
					target="_blank"
					rel="noopener noreferrer"
					data-trackable="privacy-policy-info"
				>
					privacy
				</a>{' '}
				and&nbsp;
				<a
					className="ncf__link--external"
					href="https://help.ft.com/legal-privacy/cookies/"
					target="_blank"
					rel="noopener noreferrer"
					data-trackable="cookies-info"
				>
					cookie
				</a>{' '}
				policies.
			</span>
			{!hideConfirmTermsAndConditions && (
				<label className={labelClassName} htmlFor="termsAcceptance">
					<input {...inputProps} />
					<span className="o-forms-input__label">
						I confirm that I am {ageRestriction} years or older and agree to the
						full{' '}
						<a
							className="ncf__link--external"
							href="http://help.ft.com/help/legal-privacy/terms-conditions/"
							target={isEmbedded ? '_top' : '_blank'}
							rel="noopener noreferrer"
							data-trackable="terms-and-conditions"
						>
							Terms &amp; Conditions
						</a>
						.
					</span>
					<p className="o-forms-input__error">
						Please accept our terms &amp; conditions
					</p>
				</label>
			)}
			{children && <div className="children-container">{children}</div>}
		</div>
	);

	const registerTerms = (
		<label className={labelClassName} htmlFor="termsAcceptance">
			<input {...inputProps} />
			<span className="o-forms-input__label terms-register">
				I confirm I am {ageRestriction} years or older and have read and agree
				to the{' '}
				<a
					className="ncf__link--external"
					href="http://help.ft.com/help/legal-privacy/terms-conditions/"
					target={isEmbedded ? '_top' : '_blank'}
					rel="noopener noreferrer"
					data-trackable="terms-and-conditions"
				>
					Terms &amp; Conditions
				</a>
				.
			</span>
			<p className="o-forms-input__error">
				Please accept our terms &amp; conditions
			</p>
		</label>
	);

	const b2bTerms = isB2b ? (
		<li>
			<span className="terms-b2b">
				By submitting this form, you indicate your consent to also being
				contacted by Financial Times by email, post, or phone about our other
				products, services or special offers unless you untick this box.
			</span>
		</li>
	) : (
		<li>
			<span className="terms-default">
				I confirm I am {ageRestriction} years or older and have read and agree
				to the{' '}
				<a
					className="ncf__link--external"
					href="http://help.ft.com/help/legal-privacy/terms-conditions/"
					target={isEmbedded ? '_top' : '_blank'}
					rel="noopener noreferrer"
					data-trackable="terms-and-conditions"
				>
					Terms &amp; Conditions
				</a>
				.
			</span>
		</li>
	);

	const corpSignupTerms = isCorpSignup && (
		<>
			<li>
				<span className="terms-corp-signup">
					Your organisation’s administrator(s) may view basic usage and profile
					data about your account and have the ability to set up myFT topic
					follows on your behalf.
				</span>
			</li>
			<li>
				<span className="terms-corp-signup">
					Basic usage and profile data about your account can include; for
					example, your job title and profile information, the date you last
					visited, volume of content consumed, etc.
				</span>
			</li>
			<li>
				<span className="terms-corp-signup">
					myFT topics may be selected on your behalf by your company
					administrator or FT representative for you to follow. You can unfollow
					these topics or unsubscribe from the myFT digest through the Contact
					preferences section on myFT.
				</span>
			</li>
			{isTrial && (
				<li>
					<span className="terms-corp-signup">
						This trial is to demonstrate the value of a group subscription and
						we’ll contact you during your trial.
					</span>
				</li>
			)}
		</>
	);

	const transitionTerms = isTransition && (
		<>
			{!isSingleTerm && (
				<li>
					<span className="terms-transition">
						I give consent for my chosen payment method to be charged
						automatically at the end of each subscription term until I cancel it
						by contacting{' '}
						<a
							className="ncf__link--external"
							href="https://help.ft.com/help/contact-us/"
							target="_blank"
							rel="noopener noreferrer"
						>
							customer care through chat, phone or email
						</a>
						.
					</span>
				</li>
			)}
			{transitionType === 'immediate' ? (
				<li>
					<span className="terms-transition terms-transition--immediate">
						By placing my order, my subscription will start immediately and I am
						aware and agree that I will therefore lose my statutory right to
						cancel my subscription within 14 days of acceptance of my order. Any
						notice of cancellation that I provide will only take effect at the
						end of my subscription period and previously paid amounts are
						non-refundable, except in the event that there is a fault in the
						provision of the services.
					</span>
				</li>
			) : (
				<li>
					<span className="terms-transition terms-transition--other">
						By placing my order, I acknowledge that my subscription will start
						{isSingleTerm
							? ' and the chosen payment method will be charged '
							: ' '}
						on the date given above. Any cancellation notice received after that
						date will take effect at the end of my subscription term and
						previously paid amounts are non-refundable.
					</span>
				</li>
			)}
			<li>
				<span className="terms-transition">
					Find out more about our cancellation policy in our{' '}
					<a
						className="ncf__link--external"
						href="http://help.ft.com/help/legal-privacy/terms-conditions/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Terms &amp; Conditions
					</a>
					.
				</span>
			</li>
		</>
	);

	const printSignupTermText = isTrial
		? 'Credits for delivery suspension or delivery failure are not available during introductory offer periods.'
		: 'Credit for delivery suspensions is only available for hand-delivered subscriptions and is limited to a maximum of 24 issues per yearly subscription terms (4 issues per yearly FT Weekend subscription term).';

	const signupTerms = isSignup && (
		<>
			{isPrintProduct ? (
				<>
					<li>
						<span className="terms-print">{printSignupTermText}</span>
					</li>
					<li>
						<span className="terms-print">
							Find out more about your delivery start date in our{' '}
							<a
								className="ncf__link--external"
								href="http://help.ft.com/help/legal-privacy/terms-conditions/"
								target={isEmbedded ? '_top' : '_blank'}
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>
							.
						</span>
					</li>
				</>
			) : (
				<>
					<li>
						<span className="terms-signup">
							I give consent for my chosen payment method to be charged
							automatically at the end of each subscription term until I cancel
							it by contacting{' '}
							<a
								className="ncf__link--external"
								href="https://help.ft.com/help/contact-us/"
								target={isEmbedded ? '_top' : '_blank'}
								rel="noopener noreferrer"
							>
								customer care through chat, phone or email
							</a>
							.
						</span>
					</li>
					<li>
						<span className="terms-signup">
							By placing my order, my subscription will start immediately and I
							am aware and agree that I will therefore lose my statutory right
							to cancel my subscription within 14 days of acceptance of my
							order. Any notice of cancellation that I provide will only take
							effect at the end of my subscription period and previously paid
							amounts are non-refundable, except in the event that there is a
							fault in the provision of the services.
						</span>
					</li>
					<li>
						<span className="terms-signup">
							Find out more about our cancellation policy in our{' '}
							<a
								className="ncf__link--external"
								href="https://help.ft.com/legal-privacy/terms-and-conditions/"
								target={isEmbedded ? '_top' : '_blank'}
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>
							.
						</span>
					</li>
				</>
			)}

			{specialTerms && (
				<li>
					<span className="terms-special">{specialTerms}</span>
				</li>
			)}
		</>
	);

	const deferredBillingTerms = isDeferredBilling && (
		<li>
			<span className="terms-deferred">
				Please note if you fail to make payment for your deferred billing plan
				within due date your subscription will be automatically cancelled.
			</span>
		</li>
	);

	const b2cPartnershipTerms = (
		<label className={[labelClassName, 'checkbox-two-lines'].join(' ')}>
			<input {...inputProps} />
			<span className="o-forms-input__label">
				I confirm I am {ageRestriction} years or older and have read and agree
				to the{' '}
				<a
					className="ncf__link--external"
					href="http://help.ft.com/help/legal-privacy/terms-conditions/"
					target={isEmbedded ? '_top' : '_blank'}
					rel="noopener noreferrer"
					data-trackable="terms-and-conditions"
				>
					Terms &amp; Conditions
				</a>
				.
			</span>
			<p className="o-forms-input__error">
				Please accept our terms &amp; conditions
			</p>
		</label>
	);

	return (
		<div {...divProps}>
			{isB2cPartnership ? (
				b2cPartnershipTerms
			) : isRegister ? (
				registerTerms
			) : isAuthFirstAccount ? (
				authFirstStepTerms
			) : (
				<>
					<ul className="o-typography-list ncf__accept-terms-list">
						{!isAuthFirstPayment && b2bTerms}
						{corpSignupTerms}
						{transitionTerms}
						{signupTerms}
						{deferredBillingTerms}
					</ul>
					<label className={labelClassName} htmlFor="termsAcceptance">
						<input {...inputProps} />
						<span className="o-forms-input__label">
							I agree to the above terms &amp; conditions.
						</span>
						<p className="o-forms-input__error">
							Please accept our terms &amp; conditions
						</p>
					</label>
				</>
			)}
		</div>
	);
}

AcceptTerms.propTypes = {
	hasError: PropTypes.bool,
	isSignup: PropTypes.bool,
	isRegister: PropTypes.bool,
	isChecked: PropTypes.bool,
	isB2b: PropTypes.bool,
	isB2cPartnership: PropTypes.bool,
	ageRestriction: PropTypes.string,
	isEmbedded: PropTypes.bool,
	isCorpSignup: PropTypes.bool,
	isTrial: PropTypes.bool,
	isTransition: PropTypes.bool,
	transitionType: PropTypes.string,
	isPrintProduct: PropTypes.bool,
	specialTerms: PropTypes.string,
	isSingleTerm: PropTypes.bool,
	isDeferredBilling: PropTypes.bool,
	hideConfirmTermsAndConditions: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	privacyPoliciesPosition: PropTypes.oneOf(['top', 'bottom']),
};
