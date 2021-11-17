import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.positions.positions;

export function Position({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'positionField',
	selectId = 'position',
	selectName = 'position',
	options = defaultOptions,
	isRequired = true,
	fieldLabel = 'What’s your job position?',
}) {
	const inputWrapperClassNames = classNames([
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
			data-validate={isRequired ? 'required' : ''}
			htmlFor={selectId}
		>
			<span className={fieldTitleClassName}>
				<span className="o-forms-title__main">{fieldLabel}</span>
			</span>
			<span className={inputWrapperClassNames}>
				<select
					id={selectId}
					name={selectName}
					data-trackable="position"
					aria-required={isRequired}
					required={isRequired}
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Please select a job position</option>
					{options.map(({ code, description }) => {
						return (
							<option key={code} value={code}>
								{description}
							</option>
						);
					})}
				</select>
				<span className="o-forms-input__error">
					Please select your position
				</span>
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
	options: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string,
			description: PropTypes.string,
		})
	),
	isRequired: PropTypes.bool,
	fieldLabel: PropTypes.string,
};
