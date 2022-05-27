import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const postcodeLabel = {
	USA: 'Zip Code',
	CAN: 'Postal Code',
	HKG: 'Postal Code', //check
	JPN: 'Postal Code',
	SGP: 'Postal Code',
	KOR: 'Postal Code',
	IND: 'Postal Code',
	TWN: 'Postal Code',
	MYS: 'Postal Code',
	CHN: 'Postal Code',
	PHL: 'Postal Code',
	THA: 'Postal Code',
	IDN: 'Postal Code',
	FRA: 'Postal Code',
	LUX: 'Postal Code',
	MCO: 'Postal Code',
	ARE: 'Postal Code', //check
	AUT: 'Postal Code',
	BEL: 'Postal Code',
	DNK: 'Postal Code',
	FIN: 'Postal Code',
	DEU: 'Postal Code',
	GRC: 'Postal Code',
	ISL: 'Postal Code',//check
	ITA: 'Postal Code',
	LIE: 'Postal Code',
	NLD: 'Postal Code',
	NOR: 'Postal Code',
	POL: 'Postal Code',
	PRT: 'Postal Code',
	ESP: 'Postal Code',
	SWE: 'Postal Code',
	CHE: 'Postal Code',
	CZE: 'Postal Code',
	SVN: 'Postal Code',
	HUN: 'Postal Code',
	ROU: 'Postal Code',
	HRV: 'Postal Code',
	SVK: 'Postal Code',
	LTU: 'Postal Code',
	BGR: 'Postal Code',
	RUS: 'Postal Code',
	ZAF: 'Postal Code',
	QAT: 'Postal Code',//check
};

const promptLabel = {
	USA: 'Please enter your 5 digit Zip Code',
	CAN: 'Please enter your 6 digit postal code',
	HKG: '',//check
	JPN: 'Please enter your 6 digit postal code',
	SGP: 'Please enter your 6 digit postal code',
	KOR: 'Please enter your 6 digit postal code',
	IND: 'Please enter your 6 digit postal code',
	TWN: 'Please enter your 6 digit postal code',
	MYS: 'Please enter your 6 digit postal code',
	CHN: 'Please enter your 6 digit postal code',
	PHL: 'Please enter your 6 digit postal code',
	THA: 'Please enter your 6 digit postal code',
	IDN: 'Please enter your 6 digit postal code',
	FRA: 'Please enter your 6 digit postal code',
	LUX: 'Please enter your 6 digit postal code',
	MCO: 'Please enter your 6 digit postal code',
	ARE: 'Please enter your 6 digit postal code', //check
	AUT: 'Please enter your 6 digit postal code',
	BEL: 'Please enter your 6 digit postal code',
	DNK: 'Please enter your 6 digit postal code',
	FIN: 'Please enter your 6 digit postal code',
	DEU: 'Please enter your 6 digit postal code',
	GRC: 'Please enter your 6 digit postal code',
	ISL: 'Please enter your 6 digit postal code',//check
	ITA: 'Please enter your 6 digit postal code',
	LIE: 'Please enter your 6 digit postal code',
	NLD: 'Please enter your 6 digit postal code',
	NOR: 'Please enter your 6 digit postal code',
	POL: 'Please enter your 6 digit postal code',
	PRT: 'Please enter your 6 digit postal code',
	ESP: 'Please enter your 6 digit postal code',
	SWE: 'Please enter your 6 digit postal code',
	CHE: 'Please enter your 6 digit postal code',
	CZE: 'Please enter your 6 digit postal code',
	SVN: 'Please enter your 6 digit postal code',
	HUN: 'Please enter your 6 digit postal code',
	ROU: 'Please enter your 6 digit postal code',
	HRV: 'Please enter your 6 digit postal code',
	SVK: 'Please enter your 6 digit postal code',
	LTU: 'Please enter your 6 digit postal code',
	BGR: 'Please enter your 6 digit postal code',
	RUS: 'Please enter your 6 digit postal code',
	ZAF: 'Please enter your 6 digit postal code',
	QAT: 'Please enter your 6 digit postal code',//check
};

const placeholderLabel = {
	USA: 'e.g. 60411',
	CAN: 'e.g. M4W 2C6',
	HKG: '',
	JPN: 'e.g. 100-0001',
	SGP: 'e.g. 58416',
	KOR: 'e.g. 46500',
	IND: 'e.g. 401107',
	TWN: 'e.g. 100',
	MYS: 'e.g. 59100',
	CHN: 'e.g. 610000',
	PHL: 'e.g. 2799',
	THA: 'e.g. 10330',
	IDN: 'e.g. 55165',
	FRA: 'e.g. 95000',
	LUX: 'e.g. 1009',
	MCO: 'e.g. 98000',
	ARE: 'e.g. M4W 2C6', //check
	AUT: 'e.g. 17087',
	BEL: 'e.g. 6596',
	DNK: 'e.g. 1819',
	FIN: 'e.g. 39500',
	DEU: 'e.g. 17087',
	GRC: 'e.g. 241 00',
	ISL: 'e.g. M4W 2C6',//check
	ITA: 'e.g. 23844',
	LIE: 'e.g. 9480',
	NLD: 'e.g. 6971 HJ',
	NOR: 'e.g. 1608',
	POL: 'e.g. 43-190',
	PRT: 'e.g. 2525-517',
	ESP: 'e.g. 37752',
	SWE: 'e.g. 260 38',
	CHE: 'e.g. 9424',
	CZE: 'e.g. 00 100',
	SVN: 'e.g. 8263',
	HUN: 'e.g. 3821',
	ROU: 'e.g. 71234',
	HRV: 'e.g. 10000',
	SVK: 'e.g. 98401',
	LTU: 'e.g. LT-12345',
	BGR: 'e.g. 4000',
	RUS: 'e.g. 191028',
	ZAF: 'e.g. 5189',
	QAT: 'e.g. M4W 2C6',//check
};

export function DeliveryPostcode ({
	value = '',
	country = '',
	isDisabled = false,
	hasError = false,
	isHidden = false,
	pattern,
	additionalFieldInformation,
	changePostcodeUrl = '',
}) {
	const postcodeReference = postcodeLabel[country.toUpperCase()] || 'Postcode';
	const promptReference = promptLabel[country.toUpperCase()];
	const placeholderReference =
		placeholderLabel[country.toUpperCase()] ||
		`Enter your ${postcodeReference}`;

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const deliveryPostcodeFieldClassNames = classNames([
		'o-forms-field',
		{ ncf__hidden: isHidden },
	]);

	const fieldErrorClassNames = classNames([
		'o-forms-input__error',
		{
			'additional-field-information__with-field-error':
				additionalFieldInformation,
		},
	]);

	return (
		<label
			id="deliveryPostcodeField"
			className={deliveryPostcodeFieldClassNames}
			data-validate="required"
			htmlFor="deliveryPostcode"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					<span data-reference="postcode">{postcodeReference}</span>
				</span>
				<span className="o-forms-title__prompt">{promptReference}</span>
			</span>

			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id="deliveryPostcode"
					name="deliveryPostcode"
					defaultValue={`${value}`}
					placeholder={placeholderReference}
					autoComplete="postal-code"
					data-trackable="delivery-postcode"
					aria-required="true"
					required
					pattern={pattern}
					disabled={isDisabled}
				/>
				<span className={fieldErrorClassNames}>
					Please enter a valid{' '}
					<span data-reference="postcode">{postcodeReference}</span>.
				</span>
				{additionalFieldInformation ? (
					<p className="additional-field-information">
						{additionalFieldInformation}
					</p>
				) : null}
				{changePostcodeUrl ? (
					<a
						href={changePostcodeUrl}
						style={{ fontSize: '12px' }}
						className="change-postcode-url"
						data-trackable="change-progress"
					>
						{`Change ${postcodeReference}`}
					</a>
				) : null}
			</span>
		</label>
	);
}

DeliveryPostcode.propTypes = {
	country: PropTypes.string,
	value: PropTypes.string,
	pattern: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool,
	additionalFieldInformation: PropTypes.node,
	changePostcodeUrl: PropTypes.string,
};
