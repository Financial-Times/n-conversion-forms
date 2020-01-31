import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.responsibilities.responsibilities;

export function Responsibility ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'responsibilityField',
	selectId = 'responsibility',
	selectName = 'responsibility',
	options = defaultOptions
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label id={fieldId} className="o-forms-field ncf__validation-error" data-validate="required" htmlFor={selectId}>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Which best describes your job responsibility?</span>
			</span>

			<span className={inputWrapperClassName}>
				<select
					id={selectId}
					name={selectName}
					data-trackable="field-responsibility"
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Please select a job responsibility</option>

					{options.map(({ code, description }) => {
						return <option key={code} value={code}>{description}</option>;
					})}
				</select>
				<span className="o-forms-input__error">Please select your responsibility</span>
			</span>
		</label>
	);
}

Responsibility.propTypes = {
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
