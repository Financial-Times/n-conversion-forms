import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { canadianProvinces } from 'n-common-static-data';
const defaultProvinces = canadianProvinces.provinces;

export function Province({
	value,
	fieldId = 'provinceField',
	selectId = 'province',
	hasError = false,
	isHidden = false,
	isBillingProvince = false,
	isDisabled = false,
	provinces = defaultProvinces,
}) {
	const fieldClassNames = classNames([
		'o-forms-field',
		{ ncf__hidden: isHidden },
	]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<label
			id={fieldId}
			className={fieldClassNames}
			data-validate="required"
			htmlFor={selectId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					{isBillingProvince ? 'Billing ' : ''}Province
				</span>
			</span>
			<span className={inputWrapperClassNames}>
				<select
					id={selectId}
					aria-required="true"
					required
					name={isBillingProvince ? 'billingProvince' : 'province'}
					data-trackable="field-province"
					disabled={isDisabled}
					defaultValue={value}
				>
					<option disabled value="">
						Please select a province
					</option>

					{provinces.map(({ code, name }) => {
						return (
							<option key={code} value={code}>
								{name}
							</option>
						);
					})}
				</select>
				<span className="o-forms-input__error">
					Please select your province.
				</span>
			</span>
		</label>
	);
}

Province.propTypes = {
	value: PropTypes.string,
	fieldId: PropTypes.string,
	selectId: PropTypes.string,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool,
	isBillingProvince: PropTypes.bool,
	isDisabled: PropTypes.bool,
	provinces: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string,
			name: PropTypes.string,
		})
	),
};
