import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const CONSENT_AGE = 16;
export function DeferredBillingTerms ({ isDeferredBilling = false, checkBoxTrackableAttr = 'field-terms', trackableAttr = 'deferred-billing-terms', errorMessage = 'Please accept our terms &amp; conditions', inputId = 'accept-deferred-billing-terms', fieldId = 'accept-deferred-terms', isChecked = false, hasError = false }) {
	const labelClassName = classNames([
		'o-forms-input',
		'o-forms-input--checkbox',
		{ 'o-forms-input--invalid': hasError },
	]);

	const inputProps = {
		id: `${inputId}`,
		type: 'checkbox',
		name: `${inputId}`,
		value: 'true',
		'data-trackable': checkBoxTrackableAttr,
		'aria-required': 'true',
		required: true,
		...(isChecked && { defaultChecked: true }),
	};
	const divProps = {
		id: 'acceptTermsField',
		className: 'o-forms-field o-layout-typography ncf__validation-error',
		'data-validate': 'required,checked',
		...(isChecked && { 'data-trackable': trackableAttr }),
	};
	return isDeferredBilling && (<>
		<p className={labelClassName}>
			<span className="ncf__paragraph">
				I confirm I am {CONSENT_AGE} years or older and have read and agree to the
				{' '}
				<a
					className="ncf__link--external"
					href="https://help.ft.com/legal-privacy/terms-and-conditions/"
					title="FT Legal Terms and Conditions help page"
					target="_blank"
					rel="noopener noreferrer"
					data-trackable="terms-and-conditions"
				>
					Terms &amp; Conditions
				</a>
				.
			</span>
		</p>
		<p className={labelClassName}>
			<span className="ncf__paragraph">
				I give consent for my chosen payment method to be charged automatically at the end of each subscription term until I cancel it by contacting Customer Care through chat, phone or email.
			</span>
		</p>
		<p className={labelClassName}>
			<span className="ncf__paragraph">
				By placing my order, I acknowledge that my subscription will start on the date given above. Any cancellation notice received after that date will take effect at the end of my subscription term and previously paid amounts are non-refundable.
			</span>
		</p>
		<p className={labelClassName}>
			<span className="ncf__paragraph">
				Find out more about our cancellation policy in our {' '}
				<a
					className="ncf__link--external"
					href="https://help.ft.com/legal-privacy/terms-and-conditions/"
					title="FT Legal Terms and Conditions help page"
					target="_blank"
					rel="noopener noreferrer"
					data-trackable="terms-and-conditions"
				>
					Terms &amp; Conditions
				</a>
				.
			</span>
		</p>
		<p className={labelClassName}>
			<span className="ncf__paragraph">
				Please note that if you fail to make payment for your Deferred Billing Plan within the due date your subscription will be automatically cancelled.
				{' '}	<a
					className="ncf__link--external"
					href="https://help.ft.com/legal-privacy/terms-and-conditions/"
					title="FT Legal Terms and Conditions help page"
					target="_blank"
					rel="noopener noreferrer"
					data-trackable="terms-and-conditions"
				>
					Terms &amp; Conditions
				</a>
				.
			</span>
		</p>
		<div {...divProps}>
			<label className={labelClassName} htmlFor={inputId} id={fieldId}>
				<input {...inputProps} />
				<span className="o-forms-input__label">
					I agree with terms &amp; conditions.

				</span>
				<p className="o-forms-input__error">
					{errorMessage}
				</p>
			</label>
		</div>
	</>);

};

DeferredBillingTerms.propTypes = {
	hasError: PropTypes.bool,
	isChecked: PropTypes.bool,
	isDeferredBilling: PropTypes.bool,
	fieldId: PropTypes.string,
	inputId: PropTypes.string,
	trackableAttr: PropTypes.string,
	errorMessage: PropTypes.string
};
