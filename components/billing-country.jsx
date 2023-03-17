import React from 'react';
import PropTypes from 'prop-types';
import { Country } from './country';

export function BillingCountry({
	fieldId = 'billingCountryField',
	filterList = [],
	hasError = false,
	inputId = 'billingCountry',
	isDisabled = false,
	value,
}) {
	return (
		<Country
			dataTrackable="field-billing-country"
			fieldId={fieldId}
			filterList={filterList}
			hasError={hasError}
			inputId={inputId}
			isB2b={false}
			isDisabled={isDisabled}
			isPlaceholderDisabled={true}
			label="Billing Country"
			value={value}
		/>
	);
}

BillingCountry.propTypes = {
	fieldId: PropTypes.string,
	filterList: PropTypes.arrayOf(PropTypes.string),
	hasError: PropTypes.bool,
	inputId: PropTypes.string,
	isDisabled: PropTypes.bool,
	value: PropTypes.string,
};
