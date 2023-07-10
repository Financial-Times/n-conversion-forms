import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function AcceptTermsPrivacyPolicy({
	hasError = false,
	isEmbedded = false,
	children,
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

	return (
		<div {...divProps}>
			<div className="privacy-policy-terms">
				<label className={labelClassName} htmlFor="termsAcceptance">
					<input {...inputProps} />
					<span className="o-forms-input__label">
						I confirm that I am 16 years or older and agree to the full{' '}
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

				{children && <div className="children-container">{children}</div>}

				<span className={`consent-text--bottom`}>
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
			</div>
		</div>
	);
}

AcceptTermsPrivacyPolicy.propTypes = {
	hasError: PropTypes.bool,
	isEmbedded: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};
