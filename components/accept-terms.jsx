import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

const DEFAULT_AGE_RESTRICTION = '16';

function AcceptTerms ({
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
	const divClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError }
	]);

	const divProps = {
		id: 'acceptTermsField',
		className: divClassName,
		'data-ui-item': 'multi',
		'data-ui-item-name': 'acceptTerms',
		'data-validate': 'required,checked',
		...(isSignup && { 'data-trackable': 'sign-up-terms' }),
		...(isRegister && { 'data-trackable': 'register-up-terms' })
	}

	const inputProps = {
		id: "termsAcceptance",
		type: "checkbox",
		name: "termsAcceptance",
		value: "true",
		className: "o-forms__checkbox js-item__value js-field__input",
		'data-trackable': "field-terms",
		'aria-required': "true",
		required: true,
		...(isChecked && { defaultChecked: true })
	}

	const b2bTerms = isB2b && (
		<p id="terms-b2b">
			By submitting this form, you indicate your consent to also being contacted by Financial Times by email, post, or phone about our other products, services or special offers unless you untick this box.
		</p>
	);

	const defaultTerms = !isB2b && (
		<p id="terms-default">
			I confirm I am {ageRestriction} years or older and have read and agree to the
			<a
				className="ncf__link--external"
				href="http://help.ft.com/help/legal-privacy/terms-conditions/"
				target={ isEmbedded ? '_top' : '_blank' }
				rel="noopener"
				data-trackable="terms-and-conditions"
			>Terms &amp; Conditions</a>.
		</p>
	);

	const corpSignupTerms = isCorpSignup && (
		<React.Fragment>
			<p className="terms-corp-signup">Your organisation’s administrator(s) may view basic usage and profile data about your account and have the ability to set up myFT topic follows on your behalf.</p>
			<p className="terms-corp-signup">Basic usage and profile data about your account can include; for example, your job title and profile information, the date you last visited, volume of content consumed, etc.</p>
			<p className="terms-corp-signup">myFT topics may be selected on your behalf by your company administrator or FT representative for you to follow. You can unfollow these topics or unsubscribe from the myFT digest through the Contact preferences section on myFT.</p>
			{ isTrial && (<p className="terms-corp-signup">This trial is to demonstrate the value of a group subscription and we’ll contact you during your trial.</p>) }
		</React.Fragment>
	);

	const transitionTerms = isTransition && (
		<React.Fragment>
			<p className="terms-transition">I give consent for my chosen payment method to be charged automatically at the end of each subscription term until I cancel it by contacting <a className="ncf__link--external" href="https://help.ft.com/help/contact-us/" target="_blank" rel="noopener">customer service through chat, phone or email</a>.</p>
			{
				transitionType === 'immediate'
					? (<p className="terms-transition terms-transition--immediate">By placing my order, my subscription will start immediately. Cancellation notice would take effect at the end of the subscription period and previously paid amounts are non-refundable.</p>)
					: (<p className="terms-transition  terms-transition--other">By placing my order, I acknowledge that my subscription will start on the date given above. Any cancellation notice received after that date will take effect at the end of my subscription term and previously paid amounts are non-refundable.</p>)
			}
			<p className="terms-transition">Find out more about our cancellation policy in our <a className="ncf__link--external" href="http://help.ft.com/help/legal-privacy/terms-conditions/" target="_blank" rel="noopener">Terms &amp; Conditions</a>.</p>
		</React.Fragment>
	);

	const signupTerms = isSignup && (
		<React.Fragment>
			{
				isPrintProduct
					? (
						<React.Fragment>
							<p className="terms-print">Credit for delivery suspensions is only available for hand-delivered subscriptions and is limited to a maximum of 24 issues per yearly subscription terms (4 issues per yearly FT Weekend subscription term).</p>
							<p className="terms-print">Find out more about your delivery start date in our <a className="ncf__link--external" href="http://help.ft.com/help/legal-privacy/terms-conditions/" target={ isEmbedded ? '_top' : '_blank' } rel="noopener">Terms &amp; Conditions</a>.</p>
						</React.Fragment>
					)
					: (
						<React.Fragment>
							<p className="terms-signup">I give consent for my chosen payment method to be charged automatically at the end of each subscription term until I cancel it by contacting <a className="ncf__link--external" href="https://help.ft.com/help/contact-us/" target={ isEmbedded ? '_top' : '_blank' } rel="noopener">customer service through chat, phone or email</a>.</p>
							<p className="terms-signup">By placing my order, my subscription will start immediately. Cancellation notice would take effect at the end of the subscription period and previously paid amounts are non-refundable.</p>
							<p className="terms-signup">Find out more about our cancellation policy in our <a className="ncf__link--external" href="http://help.ft.com/help/legal-privacy/terms-conditions/" target={ isEmbedded ? '_top' : '_blank' } rel="noopener">Terms &amp; Conditions</a>.</p>
						</React.Fragment>
					)
			}

			{ specialTerms && (<p id="terms-special">{specialTerms}</p>) }
		</React.Fragment>
	);

	return (
		<div {...divProps}>

			<input {...inputProps} />

			<label htmlFor="termsAcceptance" className="o-forms__label ncf__terms">
				{ b2bTerms }

				{ defaultTerms }

				{ corpSignupTerms }

				{ transitionTerms }

				{ signupTerms }
			</label>

			<div className="o-forms__errortext">Please accept our terms &amp; conditions</div>

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
}

export default AcceptTerms;
