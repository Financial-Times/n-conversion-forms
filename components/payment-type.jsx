import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Loader } from './loader';

export function PaymentType({
	enableApplepay = false,
	enableCreditcard = false,
	enableDirectdebit = false,
	enablePaypal = false,
	showLoaderOnInit = false,
	fieldId = 'paymentTypeField',
	inputId = 'paymentType',
	value,
}) {
	const createSecuritySeal = () => {
		return (
			<div
				className="ncf__security-seal"
				dangerouslySetInnerHTML={{
					__html: `
				<!-- NOTE: this won\'t display on local.ft.com (yet it will still take up space. I know.) -->
				<!--- DO NOT EDIT - GlobalSign SSL Site Seal Code - DO NOT EDIT --->
				<!-- Disabled until we can get a version from GlobalSign that works better than this one. Currently it doesn\'t always load correctly. -->
				<!-- <table width=125 border=0 cellspacing=0 cellpadding=0 title="CLICK TO VERIFY: This site uses a GlobalSign SSL Certificate to secure your personal information.">
					<tr>
						<td><span id="ss_img_wrapper_gmogs_image_110-45_en_dblue"><a href="https://www.globalsign.com/" target=_blank title="GlobalSign Site Seal" rel="nofollow"><img alt="SSL" border=0 id="ss_img" src="//seal.globalsign.com/SiteSeal/images/gs_noscript_110-45_en.gif"></a></span>
							<script type="text/javascript" src="//seal.globalsign.com/SiteSeal/gmogs_image_110-45_en_dblue.js"></script>
						</td>
					</tr>
				</table> -->
				<!--- DO NOT EDIT - GlobalSign SSL Site Seal Code - DO NOT EDIT --->
			`,
				}}
			/>
		);
	};

	const createPaymentTypes = () => {
		const paymentTypes = [
			{
				id: 'creditcard',
				label: 'Credit / Debit Card',
				hide: !enableCreditcard,
			},
			{ id: 'paypal', label: 'PayPal', hide: !enablePaypal },
			{ id: 'directdebit', label: 'Direct Debit', hide: !enableDirectdebit },
			{ id: 'applepay', label: 'Apple Pay', hide: !enableApplepay },
		];
		return paymentTypes.map((type) => {
			const inputProps = {
				type: 'radio',
				name: inputId,
				value: type.id,
				id: type.id,
				'aria-label': type.label,
				...(value === type.id && { defaultChecked: true }),
			};
			const className = classNames([
				'o-forms-input--radio-box__container',
				'ncf__payment-type',
				`ncf__payment-type--${type.id}`,
				{ ncf__hidden: type.hide },
			]);
			return (
				<div key={type.id} className={className}>
					<label htmlFor={inputProps.id}>
						<input {...inputProps} />
						<span className="o-forms-input__label" aria-hidden="true">
							{type.label}
						</span>
					</label>
				</div>
			);
		});
	};

	const createDirectDebitPanel = () => {
		return (
			enableDirectdebit && (
				<div className="ncf__payment-type-panel ncf__payment-type-panel--directdebit ncf__hidden">
					<div
						id="directDebitGuarantee"
						className="ncf__directdebit-guarantee"
						data-o-component="o-expander"
						data-o-expander-shrink-to="hidden"
						data-o-expander-expanded-toggle-text="guarantee"
						data-o-expander-collapsed-toggle-text="guarantee"
						role="tabpanel"
					>
						<p>Direct Debit is only supported in the UK</p>
						<p>
							Your payments are protected by the Direct Debit{' '}
							<button
								type="button"
								className="ncf__directdebit-guarantee-toggle o-expander__toggle"
							>
								guarantee
							</button>
						</p>
						<ul className="ncf__directdebit-guarantee-list o-expander__content">
							<li>
								This Guarantee is offered by all banks and building societies
								that accept instructions to pay Direct Debits.
							</li>
							<li>
								If there are any changes to the amount, date or frequency of
								your Direct Debit GoCardless re: The Financial Times will notify
								you 3 working days in advance of your account being debited or
								as otherwise agreed. If you request GoCardless Ltd re: The
								Financial Times to collect a payment, confirmation of the amount
								and date will be given to you at the time of the request.
							</li>
							<li>
								If an error is made in the payment of your Direct Debit, by
								GoCardless Ltd re: The Financial Times or your bank or building
								society, you are entitled to a full and immediate refund of the
								amount paid from your bank or building society.
							</li>
							<li>
								If you receive a refund you are not entitled to, you must pay it
								back when GoCardless Ltd re: The Financial Times asks you to.
							</li>
							<li>
								You can cancel a Direct Debit at any time by simply contacting
								your bank or building society. Written confirmation may be
								required. Please also notify us.
							</li>
						</ul>
					</div>
				</div>
			)
		);
	};

	const createZuoraPanel = () => {
		return (
			(enableDirectdebit || enableCreditcard) && (
				<div className="ncf__payment-type-panel ncf__payment-type-panel--creditcard ncf__payment-type-panel--directdebit ncf__hidden">
					<div className="ncf__zuora-payment-overlay ncf__hidden"></div>
					<div id="zuora_payment" className="ncf__zuora-payment">
						<iframe
							id="z_hppm_iframe"
							title="Zuora Payment"
							overflow="visible"
							scrolling="no"
							frameBorder="0"
							allowtransparency="true"
							className="z_hppm_iframe"
							style={{ display: 'block', width: '100%' }}
						></iframe>
					</div>
					<script src="https://static.zuora.com/Resources/libs/hosted/1.3.1/zuora-min.js"></script>
				</div>
			)
		);
	};

	const createLoaderOnInit = () => {
		return (
			showLoaderOnInit && (
				<Loader
					inElement={true}
					showLoader={true}
					title="Loading payment form..."
				/>
			)
		);
	};

	return (
		<React.Fragment>
			{createSecuritySeal()}
			<div id={fieldId} className="o-forms-field">
				{createLoaderOnInit()}
				<div className="o-forms-input o-forms-input--radio-box ncf__payment-type-selector">
					{createPaymentTypes()}
				</div>

				<div className="o-forms-input__error">
					Please enter a valid payment type
				</div>

				{createDirectDebitPanel()}

				{createZuoraPanel()}
			</div>
		</React.Fragment>
	);
}

PaymentType.propTypes = {
	enableApplepay: PropTypes.bool,
	enableCreditcard: PropTypes.bool,
	enableDirectdebit: PropTypes.bool,
	enablePaypal: PropTypes.bool,
	showLoaderOnInit: PropTypes.bool,
	fieldId: PropTypes.string,
	inputId: PropTypes.string,
	value: PropTypes.string,
};
