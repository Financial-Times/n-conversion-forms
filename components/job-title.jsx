import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function JobTitle({
	value = '',
	isDisabled = false,
	hasError = false,
	fieldId = 'jobTitleField',
	inputId = 'jobTitle',
	inputName = 'jobTitle',
	isRequired = true,
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--text',
		{ 'o-forms-input--invalid': hasError },
	]);

	const fieldTitleClassName = classNames([
		'o-forms-title',
		{ 'o-forms-field--optional': !isRequired }
	]);

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className={fieldTitleClassName}>
				<span className="o-forms-title__main">Job title</span>
			</span>
			<span className={inputWrapperClassName}>
				<input
					type="text"
					id={inputId}
					name={inputName}
					placeholder="Enter your job title"
					autoComplete="organization-title"
					data-trackable="job-title"
					aria-required={isRequired}
					required={isRequired}
					disabled={isDisabled}
					defaultValue={value}
				/>
				<span className="o-forms-input__error">
					Please enter your job title.
				</span>
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
