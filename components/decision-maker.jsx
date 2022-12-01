import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function DecisionMaker({ hasError = false, value = 'yes' }) {
	const radioButtonsWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--radio-box',
		'o-forms-input--inline',
		{ 'o-forms-input--invalid': hasError },
	]);

	const decisionMakerYesInputProps = {
		type: 'radio',
		id: 'decisionMakerYes',
		name: 'decisionMaker',
		'aria-label': 'Yes',
		value: 'yes',
		...(value === 'yes' && { defaultChecked: true }),
	};

	const decisionMakerNoInputProps = {
		type: 'radio',
		id: 'decisionMakerNo',
		name: 'decisionMaker',
		'aria-label': 'No',
		value: 'no',
		...(value === 'no' && { defaultChecked: true }),
	};

	return (
		<div
			id="decisionMakerField"
			role="group"
			aria-labelledby="decisionMakerFieldLabel"
			className="o-forms-field o-forms-field--inline"
			data-validate="required"
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main" id="decisionMakerFieldLabel">
					Are you a manager with direct reports?
				</span>
			</span>

			<span className={radioButtonsWrapperClassNames}>
				<div className="o-forms-input--radio-box__container">
					<label htmlFor={decisionMakerYesInputProps.id}>
						<input {...decisionMakerYesInputProps} />
						<span className="o-forms-input__label" aria-hidden="true">
							Yes
						</span>
					</label>
					<label htmlFor={decisionMakerNoInputProps.id}>
						<input {...decisionMakerNoInputProps} />
						<span
							className="o-forms-input__label o-forms-input__label--negative"
							aria-hidden="true"
						>
							No
						</span>
					</label>
				</div>
				<span className="o-forms-input__error">Please select an option</span>
			</span>
		</div>
	);
}

DecisionMaker.propTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string,
};
