import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.industries.industries;

export function Industry ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'industryField',
	selectId = 'industry',
	selectName = 'industry',
	options = defaultOptions
}) {

	const inpiutWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={selectId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">In which industry do you work?</span>
			</span>
			<span className={inpiutWrapperClassName}>
				<select id={selectId}
					name={selectName}
					data-trackable="field-industry"
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Please select an industry</option>
					{options.map(({ code, description }) => {
						return <option key={code} value={code}>{description}</option>;
					})}
				</select>
				<span className="o-forms-input__error" >Please select your company’s industry</span>
			</span>
		</label>
	);
}

Industry.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	fieldId: PropTypes.string,
	selectId: PropTypes.string,
	selectName: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		description: PropTypes.string,
	}))
};
