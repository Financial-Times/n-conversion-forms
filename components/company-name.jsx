import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CompanyName ({
	fieldId = 'companyNameField',
	hasError = false,
	inputId = 'companyName',
	inputName = 'company',
	value = '',
	isDisabled = false
}) {
	const divClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError }
	]);

	const divProps = {
		id: fieldId,
		className: divClassName,
		'data-ui-item': 'form-field',
		'data-ui-item-name': 'companyName',
		'data-validate': 'required'
	}

	const inputProps = {
		type: 'text',
		id: inputId,
		name: inputName,
		placeholder: 'Enter your company name',
		autoComplete: 'organization',
		className: 'o-forms__text js-field__input js-item__value',
		'data-trackable': 'company-name',
		'aria-required': 'true',
		required: true,
		disabled: isDisabled,
		defaultValue: value
	}

	return (
		<div {...divProps}>
			<label htmlFor="companyName" className="o-forms__label">Company name</label>

			<input {...inputProps} />

			<div className="o-forms__errortext">Please enter your company name.</div>
		</div>
	);
}

CompanyName.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
	isDisabled: PropTypes.bool
};

export default CompanyName;
