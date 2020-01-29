import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DeliveryAddress ({
	hasError = false,
	line1 = '',
	line2 = '',
	line3 = '',
	isDisabled = false,
	maxLength
}) {
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<div id="deliveryAddressFields" data-validate="required">
			<label className="o-forms-field" htmlFor="deliveryAddressLine1">
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
						placeholder="e.g. 10 Elm Street"
						aria-required="true"
						maxLength={maxLength}
						required
						disabled={isDisabled}
						defaultValue={line1}
					/>
				</span>
			</label>
			<label className="o-forms-field o-forms-field--optional" htmlFor="deliveryAddressLine2">
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
						placeholder="e.g. Apartment 1"
						maxLength={maxLength}
						disabled={isDisabled}
						defaultValue={line2}
					/>
				</span>
			</label>
			<label className="o-forms-field o-forms-field--optional" htmlFor="deliveryAddressLine3">
				<span className="o-forms-title">
					<span className="o-forms-title__main">Address line 3</span>
				</span>
				<span className={inputWrapperClassNames}>
					<input
						type="text"
						id="deliveryAddressLine3"
						name="deliveryAddressLine3"
						data-trackable="field-deliveryAddressLine3"
						autoComplete="address-line3"
						placeholder=""
						maxLength={maxLength}
						disabled={isDisabled}
						defaultValue={line3}
					/>
				</span>
			</label>
		</div>
	);
}

DeliveryAddress.propTypes = {
	hasError: PropTypes.bool,
	line1: PropTypes.string,
	line2: PropTypes.string,
	line3: PropTypes.string,
	isDisabled: PropTypes.bool
};
