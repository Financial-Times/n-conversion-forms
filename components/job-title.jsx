import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function JobTitle ({
	value = '',
	isDisabled = false,
	hasError = false,
	fieldId = 'jobTitleField',
	inputId = 'jobTitle',
	inputName = 'jobTitle',
}) {

	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError }
	]);

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Job title</span>
			</span>
			<span className={inputWrapperClassName}>
				<input type="text"
					id={inputId}
					name={inputName}
					placeholder="Enter your job title"
					data-trackable="job-title"
					aria-required="true" required
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">Please enter your job title.</span>
			</span>
		</label>
	);
}

JobTitle.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	fieldId: PropTypes.string,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
};
