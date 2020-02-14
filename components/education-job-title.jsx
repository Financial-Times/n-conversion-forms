import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function EducationJobTitle ({
	value = '',
	isDisabled = false,
	hasError = false,
	fieldId = 'jobTitleField',
	inputId = 'jobTitle',
	inputName = 'jobTitle',
	isUSContract = false,
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError }
	]);

	const availableJobTitles = ['Faculty/Other'].concat(
		isUSContract ? ['Graduate Student', 'Undergraduate Student'] : ['Student']
	);

	return (
		<label
			id={fieldId}
			className="o-forms-field"
			data-validate="required"
			htmlFor={inputId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">Occupation</span>
			</span>

			<span className={inputWrapperClassName}>
				<select
					id={inputId}
					name={inputName}
					data-trackable="job-title"
					aria-required="true"
					required
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Select your occupation</option>
					{availableJobTitles.map((jobTitle, index) => {
						return <option key={index}>{jobTitle}</option>;
					})}
				</select>
				<span className="o-forms-input__error">Please enter your occupation.</span>
			</span>
		</label>
	);
};

EducationJobTitle.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	fieldId: PropTypes.string,
	inputId: PropTypes.string,
	inputName: PropTypes.string,
};
