import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.industries.industries;

export function JobFunction ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'jobFunctionField',
	selectId = 'jobFunction',
	selectName = 'jobFunction',
	options = defaultOptions,
	fieldLabel = 'What is your job function?',
	isRequired = true,
}) {
	const inpiutWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);

	const fieldTitleClassName = classNames([
		'o-forms-title',
		{ 'o-forms-field--optional': !isRequired },
	]);

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			htmlFor={selectId}
		>
			<span className={fieldTitleClassName}>
				<span className="o-forms-title__main">{fieldLabel}</span>
			</span>
			<span className={inpiutWrapperClassName}>
				<select
					id={selectId}
					name={selectName}
					data-trackable="jobFunction"
					aria-required={isRequired}
					required={isRequired}
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Please select a job function</option>
					{options.map(({ code, description }) => {
						return (
							<option key={code} value={code}>
								{description}
							</option>
						);
					})}
				</select>
				<span className="o-forms-input__error">
					Please select your job function
				</span>
			</span>
		</label>
	);
}

JobFunction.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	fieldId: PropTypes.string,
	selectId: PropTypes.string,
	selectName: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string,
			description: PropTypes.string,
		})
	),
	fieldLabel: PropTypes.string,
	isRequired: PropTypes.bool,
};
