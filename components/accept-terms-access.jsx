import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_AGE_RESTRICTION = '16';
const DEFAULT_PRIVACY_POLICIES_POSITION = 'top';

export function AcceptTerms({
	withPrivacyPolicyTerms = false,
	hasError = false,
	isSignup = false,
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

	const privacyPolicyTerms = (
		<div className="privacy-policy-terms">
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

	return (
		<div {...divProps}>
			{withPrivacyPolicyTerms ? (
				privacyPolicyTerms
			) : (
				<>
					<h1>TESTING</h1>
					{/* <ul className="o-typography-list ncf__accept-terms-list">
						{b2bTerms}
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
					</label> */}
				</>
			)}
		</div>
	);
}

AcceptTerms.propTypes = {
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
