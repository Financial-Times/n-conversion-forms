import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';

export function Responsibility({
	value,
	isDisabled = false,
	isRequired = true,
	hasError = false,
	fieldId = 'responsibilityField',
	selectId = 'responsibility',
	selectName = 'responsibility',
	options = demographics.responsibilities.responsibilities,
	fieldLabel = 'Which best describes your job responsibility?',
}) {
	const inputWrapperClassName = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);

	const fieldTitleClassName = classNames([
		'o-forms-title',
		{ 'o-forms-field--optional': !isRequired },
	]);

	options.sort((a, b) => a.description.localeCompare(b.description));

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			data-validate="required"
			htmlFor={selectId}
		>
			<span className={fieldTitleClassName}>
				<span className="o-forms-title__main">{fieldLabel}</span>
			</span>

			<span className={inputWrapperClassName}>
				<select
					id={selectId}
					name={selectName}
					data-trackable="responsibility"
					aria-required={isRequired}
					required={isRequired}
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Please select a job responsibility</option>

					{options.map(({ code, description }) => {
						return (
							<option key={code} value={code}>
								{description}
							</option>
						);
					})}
				</select>
				<span className="o-forms-input__error">
					Please select your responsibility
				</span>
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
	isB2B: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string,
			description: PropTypes.string,
		})
	),
};
