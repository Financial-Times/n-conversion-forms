import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.positions.positions;

export function Position ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'positionField',
	selectId = 'position',
	selectName = 'position',
	options = defaultOptions
}) {

	const inputWrapperClassNames = classNames([
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
				<span className="o-forms-title__main">What’s your job position?</span>
			</span>
			<span className={inputWrapperClassNames}>
				<select id={selectId}
					name={selectName}
					data-trackable="field-position"
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Please select a job position</option>
					{options.map(({ code, description }) => {
						return <option key={code} value={code}>{description}</option>;
					})}
				</select>
				<span className="o-forms-input__error">Please select your position</span>
			</span>
		</label>
	);
}

Position.propTypes = {
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
