import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_AGE_RESTRICTION = '16';

export function AcceptTermsB2B({
	hasError = false,
	isSignup = false,
	isChecked = false,
	isB2b = false,
	ageRestriction = DEFAULT_AGE_RESTRICTION,
	isEmbedded = false,
	isCorpSignup = false,
	isTrial = false,
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

	/* where?  */
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
			{b2bTerms}
			{corpSignupTerms}
			{b2cPartnershipTerms}
		</div>
	);
}

AcceptTermsB2B.propTypes = {
	withPrivacyPolicyTerms: PropTypes.bool,
	hasError: PropTypes.bool,
	isSignup: PropTypes.bool,
	isChecked: PropTypes.bool,
	isB2b: PropTypes.bool,
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
