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
	country = 'GBR'
}) {
	const divClassNames = classNames([{ ncf__hidden: isHidden }]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const addressLine1Placeholder = {
		GBR: 'e.g. 10 Elm Street',
		USA: 'e.g. 10 Elm St.',
		CAN: 'e.g. 36 Poirier Blvd.'
	};

	return (
		<div id={fieldId} data-validate="required" className={divClassNames}>
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
			<label
				className="o-forms-field o-forms-field--optional"
				htmlFor="deliveryAddressLine3"
			>
				<span className="o-forms-title">
					<span className="o-forms-title__main">Apt/Floor/Suite</span>
				</span>
				<span className={inputWrapperClassNames}>
					<input
						type="text"
						id="deliveryAddressLine3"
						name="deliveryAddressLine3"
						data-trackable="field-deliveryAddressLine3"
						autoComplete="address-line3"
						placeholder="e.g. Apt. 1"
						maxLength={50}
						disabled={isDisabled}
						defaultValue={line3}
					/>
				</span>
			</label>
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
						placeholder=""
						maxLength={50}
						disabled={isDisabled}
						defaultValue={line2}
					/>
				</span>
			</label>
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
	country: PropTypes.oneOf(['GBR', 'USA', 'CAN']),
};
