import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AcceptTermsAccess } from './accept-terms-access';

const DEFAULT_AGE_RESTRICTION = '16';
const DEFAULT_PRIVACY_POLICIES_POSITION = 'top';

export function AcceptTermsPayments({
	withPrivacyPolicyTerms = false,
	hasError = false,
	isSignup = false,
	isEmbedded = false,
	isTrial = false,
	isPrintProduct = false,
}) {
	const divProps = {
		id: 'acceptTermsField',
		className: 'o-forms-field o-layout-typography ncf__validation-error',
		'data-validate': 'required,checked',
		...(isSignup && { 'data-trackable': 'sign-up-terms' }),
	};

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

	const deferredBillingTerms = isDeferredBilling && (
		<li>
			<span className="terms-deferred">
				Please note if you fail to make payment for your deferred billing plan
				within due date your subscription will be automatically cancelled.
			</span>
		</li>
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
		</>
	);

	return (
		<div {...divProps}>
			{signupTerms}
			{/* transitionTerms and deferredBillingTerms used in next-retention, condition to render? */}
			{transitionTerms}
			{deferredBillingTerms}
		</div>
	);
}

AcceptTermsPayments.propTypes = {
	withPrivacyPolicyTerms: PropTypes.bool,
	hasError: PropTypes.bool,
	isSignup: PropTypes.bool,
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
	isSingleTerm: PropTypes.bool,
	isDeferredBilling: PropTypes.bool,
	hideConfirmTermsAndConditions: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	privacyPoliciesPosition: PropTypes.oneOf(['top', 'bottom']),
};
