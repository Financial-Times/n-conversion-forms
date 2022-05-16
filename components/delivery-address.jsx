import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryAddress ({
	fieldId = 'deliveryAddressFields',
	hasError = false,
	line1 = '',
	line2 = '',
	line3 = '',
	isDisabled = false,
	isHidden = false,
	country = 'GBR',
}) {
	const divClassNames = classNames([{ ncf__hidden: isHidden }]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const addressLine3Title = {
		GBR: 'Address line 3',
		USA: 'APT/FL/STE',
		CAN: 'APT/FL/STE',
		BEL: 'Address line 3',
		DNK: 'Address line 3',
		FIN: 'Address line 3',
		DEU: 'Address line 3',
		GRC: 'Address line 3',
		ISL: 'Address line 3',
		ITA: 'Address line 3',
		LIE: 'Address line 3',
		NLD: 'Address line 3',
		NOR: 'Address line 3',
		POL: 'Address line 3',
		PRT: 'Address line 3',
		ESP: 'Address line 3',
		SWE: 'Address line 3',
		CHE: 'Address line 3',
	};

	const addressLine3Prompt = {
		USA: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
		CAN: 'Max. 6 characters. Please enter “Apartment 2C” as “Apt 2C”, “Floor 10 as FL 10”',
	};

	const addressLine3Placeholder = {
		USA: 'e.g Apt 2C / FL 10 / STE 50',
		CAN: 'e.g Apt 2C / FL 10 / STE 50',
		BEL: ' ',
		DNK: ' ',
		FIN: ' ',
		DEU: ' ',
		GRC: ' ',
		ISL: ' ',
		ITA: ' ',
		LIE: ' ',
		NLD: ' ',
		NOR: ' ',
		POL: ' ',
		PRT: ' ',
		ESP: ' ',
		SWE: ' ',
		CHE: ' ',
	};

	const addressLine1Placeholder = {
		GBR: 'e.g. 10 Elm Street',
		USA: 'e.g. 10 Elm St.',
		CAN: 'e.g. 36 Poirier Blvd.',
		BEL: 'Street and House Number',
		DNK: 'Street and House Number',
		FIN: 'Street and House Number',
		DEU: 'Street and House Number',
		GRC: 'Street and House Number',
		ISL: 'Street and House Number',
		ITA: 'Street and House Number',
		LIE: 'Street and House Number',
		NLD: 'Street and House Number',
		NOR: 'Street and House Number',
		POL: 'Street and House Number',
		PRT: 'Street and House Number',
		ESP: 'Street and House Number',
		SWE: 'Street and House Number',
		CHE: 'Street and House Number',
	};

	const addressLine2Placeholder = {
		BEL: 'Apt No./Floor/Building',
		DNK: 'Apt No./Floor/Building',
		FIN: 'Apt No./Floor/Building',
		DEU: 'Apt No./Floor/Building',
		GRC: 'Apt No./Floor/Building',
		ISL: 'Apt No./Floor/Building',
		ITA: 'Apt No./Floor/Building',
		LIE: 'Apt No./Floor/Building',
		NLD: 'Apt No./Floor/Building',
		NOR: 'Apt No./Floor/Building',
		POL: 'Apt No./Floor/Building',
		PRT: 'Apt No./Floor/Building',
		ESP: 'Apt No./Floor/Building',
		SWE: 'Apt No./Floor/Building',
		CHE: 'Apt No./Floor/Building',
	};

	const addressLine1 = (
		<label
			className="o-forms-field ncf__validation-error"
			htmlFor="deliveryAddressLine1"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Address line 1</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id="deliveryAddressLine1"
					name="deliveryAddressLine1"
					data-trackable="field-deliveryAddressLine1"
					autoComplete="address-line1"
					placeholder={addressLine1Placeholder[country]}
					maxLength={50}
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={line1}
				/>
				<span className="o-forms-input__error">
					Please enter a valid address
				</span>
			</span>
		</label>
	);

	const addressLine2 = (
		<label
			className="o-forms-field o-forms-field--optional"
			htmlFor="deliveryAddressLine2"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Address line 2</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id="deliveryAddressLine2"
					name="deliveryAddressLine2"
					data-trackable="field-deliveryAddressLine2"
					autoComplete="address-line2"
					placeholder={addressLine2Placeholder[country] || ''}
					maxLength={50}
					disabled={isDisabled}
					defaultValue={line2}
				/>
			</span>
		</label>
	);

	const addressLine3 = (
		<label
			className="o-forms-field o-forms-field--optional"
			htmlFor="deliveryAddressLine3"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					{addressLine3Title[country]}
				</span>
				<span className="o-forms-title__prompt">
					{addressLine3Prompt[country]}
				</span>
			</span>
			<span className={inputWrapperClassNames}>
				<input
					type="text"
					id="deliveryAddressLine3"
					name="deliveryAddressLine3"
					data-trackable="field-deliveryAddressLine3"
					autoComplete="address-line3"
					placeholder={addressLine3Placeholder[country] || 'e.g. Apt. 1'}
					maxLength={50}
					disabled={isDisabled}
					defaultValue={line3}
				/>
			</span>
		</label>
	);

	const addressLines = {
		GBR: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		USA: (
			<>
				{' '}
				{addressLine1}
				{addressLine3}
				{addressLine2}{' '}
			</>
		),
		CAN: (
			<>
				{' '}
				{addressLine1}
				{addressLine3}
				{addressLine2}{' '}
			</>
		),

		BEL: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		DNK:(
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		FIN: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		DEU: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		GRC: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		ISL: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		ITA: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		LIE: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		NLD: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		NOR: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		POL: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		PRT: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		ESP: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		SWE: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
		CHE: (
			<>
				{' '}
				{addressLine1}
				{addressLine2}
				{addressLine3}{' '}
			</>
		),
	};

	return (
		<div id={fieldId} data-validate="required" className={divClassNames}>
			{addressLines[country]}
		</div>
	);
}

DeliveryAddress.propTypes = {
	fieldId: PropTypes.string,
	hasError: PropTypes.bool,
	line1: PropTypes.string,
	line2: PropTypes.string,
	line3: PropTypes.string,
	isDisabled: PropTypes.bool,
	isHidden: PropTypes.bool,
	country: PropTypes.oneOf(['GBR', 'USA', 'CAN', 'BEL', 'DNK', 'FIN', 'DEU', 'GRC', 'ISL', 'ITA', 'LIE', 'NLD', 'NOR', 'POL', 'PRT', 'ESP', 'SWE', 'CHE']),
};
