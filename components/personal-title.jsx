import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function PersonalTitle ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'title',
	selectId = 'title',
	selectName = 'title',
	options = [
		{ code: 'Mr', description: 'Mr' },
		{ code: 'Mrs', description: 'Mrs' },
		{ code: 'Miss', description: 'Miss' },
		{ code: 'Ms', description: 'Ms' },
	],
	fieldLabel = 'Title',
	isRequired = true,
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

	return (
		<label
			id={fieldId}
			className="o-forms-field ncf__validation-error"
			htmlFor={selectId}
		>
			<span className={fieldTitleClassName}>
				<span className="o-forms-title__main">{fieldLabel}</span>
			</span>
			<span className={inputWrapperClassName}>
				<select
					id={selectId}
					name={selectName}
					data-trackable="title"
					aria-required={isRequired}
					required={isRequired}
					disabled={isDisabled}
					defaultValue={value}
				>
					<option value="">Please select a title</option>
					{options.map(({ code, description }) => {
						return (
							<option key={code} value={code}>
								{description}
							</option>
						);
					})}
				</select>
				<span className="o-forms-input__error">
					Please select your personal title
				</span>
			</span>
		</label>
	);
}

PersonalTitle.propTypes = {
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

