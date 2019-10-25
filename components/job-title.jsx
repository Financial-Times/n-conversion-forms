import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

export default function JobTitle ({
	value = '',
	isDisabled = false,
	hasError = false,
	fieldId = 'jobTitleField',
	inputId = 'jobTitle',
	inputName = 'jobTitle',
}) {

	const fieldClassName = classNames([
		'o-forms o-forms--wide ncf__field js-field',
		{ 'o-forms--error': hasError }
	]);

	return (<div
		id={fieldId}
		className={fieldClassName} data-ui-item="form-field" data-ui-item-name="jobTitle" data-validate="required">
		<label htmlFor="jobTitle" className="o-forms__label">Job title</label>
		<input type="text" id={inputId} name={inputName} placeholder="Enter your job title"
			className="o-forms__text js-field__input js-item__value"
			data-trackable="job-title"
			aria-required="true" required
			disabled={isDisabled}
			defaultValue={value} />
		<div className="o-forms__errortext">Please enter your job title.</div>
	</div>
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
