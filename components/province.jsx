
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { canadianProvinces } from 'n-common-static-data';
const defaultProvinces = canadianProvinces.provinces;

function Province ({
	value,
	fieldId = 'provinceField',
	selectId = 'province',
	hasError = false,
	isHidden = false,
	isBillingProvince = false,
	isDisabled = false,
	provinces = defaultProvinces
}) {
	const divClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError },
		{ 'n-ui-hide': isHidden }
	]);

	return (
		<div
			id={fieldId}
			className={divClassName}
			data-ui-item="form-field"
			data-ui-item-name="province"
			data-validate="required"
		>
			<label htmlFor="province" className="o-forms__label">{ isBillingProvince ? 'Billing ' : '' }Province</label>

			<select
				id={selectId}
				className="o-forms__select js-field__input js-item__value"
				aria-required="true"
				required
				name={isBillingProvince ? 'billingProvince' : 'province'}
				data-trackable="field-province"
				disabled={isDisabled}
				defaultValue={value}
			>
				<option disabled value="">Please select a province</option>

				{
					provinces.map(({ code, name }) => {
						return (<option key={code} value={code}>{name}</option>);
					})
				}
			</select>

			<div className="o-forms__errortext">Please select your province.</div>
		</div>
	);
}

Province.PropTypes = {
	value: PropTypes.string,
	fieldId: PropTypes.string,
	selectId: PropTypes.string,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool,
	isBillingProvince: PropTypes.bool,
	isDisabled: PropTypes.bool,
	provinces: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		name: PropTypes.string,
	}))
};

export default Province;
