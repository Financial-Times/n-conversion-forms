import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getMonthNameByIndex = index => {
	return new Date(null, index, null).toLocaleDateString('en', { month: 'long' });
};

export function GraduationDate ({
	value,
	isDisabled = false,
	isRequired = false,
	hasError = false,
}) {
	const currentYear = (new Date()).getUTCFullYear();
	const earliestSelectableYear = currentYear - 4;
	const defaultValues = value && value.trim().match(/^([0-9]{4})-(0[0-9]|1[012])-[0-9]{2}$/);
	const defaultMonth = defaultValues && defaultValues[2];
	const defaultYear = defaultValues && defaultValues[1];
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<label
			id="graduationDateField"
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor="graduationDateMonth"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Gradiation date</span>
			</span>
			<span className={inputWrapperClassNames}>
				<select
					id="graduationDateMonth"
					name="graduationDateMonth"
					required={isRequired}
					aria-required={isRequired}
					disabled={isDisabled}
					defaultValue={defaultMonth}
				>
					{Array.from({ length: 12 }, (_, index) => {
						return <option key={index} value={(index + 1).toString(10).padStart(2, '0')}>{getMonthNameByIndex(index + 1)}</option>;
					})}
				</select>
				<select
					id="graduationDateYear"
					name="graduationDateYear"
					required={isRequired}
					aria-required={isRequired}
					disabled={isDisabled}
					defaultValue={defaultYear}
				>
					{Array.from({ length: 9 }, (_, index) => {
						return <option key={index} value={earliestSelectableYear + index}>{earliestSelectableYear + index}</option>;
					})}
				</select>
				<span className="o-forms-input__error">Please select a valid graduation date</span>
			</span>
		</label>
	);
};

GraduationDate.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	hasError: PropTypes.bool,
};
