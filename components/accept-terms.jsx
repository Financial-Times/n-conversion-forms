import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_AGE_RESTRICTION = '16';

export function AcceptTerms ({
	hasError = false,
	isSignup = false,
	isRegister = false,
	isChecked = false,
	isB2b = false,
	ageRestriction = DEFAULT_AGE_RESTRICTION,
	isEmbedded = false,
	isCorpSignup = false,
	isTrial = false,
	isTransition = false,
	transitionType = null,
	isPrintProduct = false,
	specialTerms = null
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--checkbox',
		{ 'o-forms-input--invalid': hasError }
	]);

	const divProps = {
		id: 'acceptTermsField',
		className: 'o-forms-field',
		'data-validate': 'required,checked',
		...(isSignup && { 'data-trackable': 'sign-up-terms' }),
		...(isRegister && { 'data-trackable': 'register-up-terms' })
	};

	const inputProps = {
		id: 'termsAcceptance',
		type: 'checkbox',
		name: 'termsAcceptance',
		value: 'true',
		'data-trackable': 'field-terms',
		'aria-required': 'true',
		required: true,
		...(isChecked && { defaultChecked: true })
	};

	const b2bTerms = isB2b && (
		<span id="terms-b2b" className="o-forms-input__label">
			By submitting this form, you indicate your consent to also being contacted by Financial Times by email, post, or phone about our other products, services or special offers unless you untick this box.
		</span>
	);

	const defaultTerms = !isB2b && (
		<span id="terms-default" className="o-forms-input__label">
			I confirm I am {ageRestriction} years or older and have read and agree to the{' '}
			<a
				className="ncf__link--external"
				href="http://help.ft.com/help/legal-privacy/terms-conditions/"
				target={ isEmbedded ? '_top' : '_blank' }
				rel="noopener noreferrer"
				data-trackable="terms-and-conditions"
			>Terms &amp; Conditions</a>.
		</span>
	);

	const corpSignupTerms = isCorpSignup && (
		<React.Fragment>
			<span className="terms-corp-signup o-forms-input__label">Your organisation’s administrator(s) may view basic usage and profile data about your account and have the ability to set up myFT topic follows on your behalf.</span>
			<span className="terms-corp-signup o-forms-input__label">Basic usage and profile data about your account can include; for example, your job title and profile information, the date you last visited, volume of content consumed, etc.</span>
			<span className="terms-corp-signup o-forms-input__label">myFT topics may be selected on your behalf by your company administrator or FT representative for you to follow. You can unfollow these topics or unsubscribe from the myFT digest through the Contact preferences section on myFT.</span>
			{ isTrial && (<span className="terms-corp-signup o-forms-input__label">This trial is to demonstrate the value of a group subscription and we’ll contact you during your trial.</span>) }
		</React.Fragment>
	);

	const transitionTerms = isTransition && (
		<React.Fragment>
			<span className="terms-transition o-forms-input__label">I give consent for my chosen payment method to be charged automatically at the end of each subscription term until I cancel it by contacting <a className="ncf__link--external" href="https://help.ft.com/help/contact-us/" target="_blank" rel="noopener noreferrer">customer service through chat, phone or email</a>.</span>
			{
				transitionType === 'immediate'
					? (<span className="terms-transition terms-transition--immediate o-forms-input__label">By placing my order, my subscription will start immediately. Cancellation notice would take effect at the end of the subscription period and previously paid amounts are non-refundable.</span>)
					: (<span className="terms-transition terms-transition--other o-forms-input__label">By placing my order, I acknowledge that my subscription will start on the date given above. Any cancellation notice received after that date will take effect at the end of my subscription term and previously paid amounts are non-refundable.</span>)
			}
			<span className="terms-transition o-forms-input__label">Find out more about our cancellation policy in our <a className="ncf__link--external" href="http://help.ft.com/help/legal-privacy/terms-conditions/" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>.</span>
		</React.Fragment>
	);

	const signupTerms = isSignup && (
		<React.Fragment>
			{
				isPrintProduct
					? (
						<React.Fragment>
							<span className="terms-print o-forms-input__label">Credit for delivery suspensions is only available for hand-delivered subscriptions and is limited to a maximum of 24 issues per yearly subscription terms (4 issues per yearly FT Weekend subscription term).</span>
							<span className="terms-print o-forms-input__label">Find out more about your delivery start date in our <a className="ncf__link--external" href="http://help.ft.com/help/legal-privacy/terms-conditions/" target={ isEmbedded ? '_top' : '_blank' } rel="noopener noreferrer">Terms &amp; Conditions</a>.</span>
						</React.Fragment>
					)
					: (
						<React.Fragment>
							<span className="terms-signup o-forms-input__label">I give consent for my chosen payment method to be charged automatically at the end of each subscription term until I cancel it by contacting <a className="ncf__link--external" href="https://help.ft.com/help/contact-us/" target={ isEmbedded ? '_top' : '_blank' } rel="noopener noreferrer">customer service through chat, phone or email</a>.</span>
							<span className="terms-signup o-forms-input__label">By placing my order, my subscription will start immediately. Cancellation notice would take effect at the end of the subscription period and previously paid amounts are non-refundable.</span>
							<span className="terms-signup o-forms-input__label">Find out more about our cancellation policy in our <a className="ncf__link--external" href="http://help.ft.com/help/legal-privacy/terms-conditions/" target={ isEmbedded ? '_top' : '_blank' } rel="noopener noreferrer">Terms &amp; Conditions</a>.</span>
						</React.Fragment>
					)
			}

			{ specialTerms && (<span id="terms-special" className="o-forms-input__label">{specialTerms}</span>) }
		</React.Fragment>
	);

	return (
		<div {...divProps}>
			<span className="o-forms-title n-ui-hide">
				<span className="o-forms-title__main">Terms</span>
			</span>
			<span className={inputWrapperClassName}>
				<label htmlFor={inputProps.id}>
					<input {...inputProps} />
					{ b2bTerms }

					{ defaultTerms }

					{ corpSignupTerms }

					{ transitionTerms }

					{ signupTerms }
				</label>
				<span className="o-forms-input__error">Please accept our terms &amp; conditions</span>
			</span>
		</div>
	);
}

AcceptTerms.propTypes = {
	hasError: PropTypes.bool,
	isSignup: PropTypes.bool,
	isRegister: PropTypes.bool,
	isChecked: PropTypes.bool,
	isB2b: PropTypes.bool,
	ageRestriction: PropTypes.string,
	isEmbedded: PropTypes.bool,
	isCorpSignup: PropTypes.bool,
	isTrial: PropTypes.bool,
	isTransition: PropTypes.bool,
	transitionType: PropTypes.string,
	isPrintProduct: PropTypes.bool,
	specialTerms: PropTypes.string
};
