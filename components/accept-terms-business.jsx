import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function AcceptTermsBusiness({
	hasError = false,
	isB2b = false,
	isEmbedded = false,
	isTrial = false,
}) {
	const divProps = {
		id: 'acceptTermsField',
		className: 'o-forms-field o-layout-typography ncf__validation-error',
		'data-validate': 'required,checked',
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
				I confirm I am 16 years or older and have read and agree to the{' '}
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

	const corpSignupTerms = (
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

	return (
		<div {...divProps}>
			<ul className="o-typography-list ncf__accept-terms-list">
				{b2bTerms}
				{corpSignupTerms}
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
		</div>
	);
}

AcceptTermsBusiness.propTypes = {
	hasError: PropTypes.bool,
	isChecked: PropTypes.bool,
	isB2b: PropTypes.bool,
	isEmbedded: PropTypes.bool,
	isTrial: PropTypes.bool,
};
