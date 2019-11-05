import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function DecisionMaker ({
	hasError = false,
	value = 'yes'
}) {
	const fieldsetClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'o-forms--inline',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError }
	]);

	const decisionMakerYesInputProps = {
		type: 'radio',
		id: 'decisionMakerYes',
		name: 'decisionMaker',
		value: 'yes',
		className: 'o-forms__radio-button',
		...((value === 'yes') && { defaultChecked: true })
	};

	const decisionMakerNoInputProps = {
		type: 'radio',
		id: 'decisionMakerNo',
		name: 'decisionMaker',
		value: 'no',
		className: 'o-forms__radio-button o-forms__radio-button--negative',
		...((value === 'no') && { defaultChecked: true })
	};

	return (
		<fieldset
			id="decisionMakerField"
			className={fieldsetClassName}
			data-ui-item="form-field"
			data-ui-item-name="decisionMaker"
			data-validate="required"
		>
			{/* Duplicate legend so it is the first element of a fieldset for A11Y	 */}
			<legend className="o-normalise-visually-hidden">Are you a manager with direct reports?</legend>

			<div className="o-forms__inline-container ncf__field--min-content">
				<div className="o-forms__label">Are you a manager with direct reports?</div>
				<div className="o-forms__group o-forms__group--inline-together">
					<input {...decisionMakerYesInputProps} />
					<label htmlFor="decisionMakerYes" className="o-forms__label">Yes</label>
					<input {...decisionMakerNoInputProps} />
					<label htmlFor="decisionMakerNo" className="o-forms__label">No</label>
				</div>
			</div>

			<div className="o-forms__errortext">Please select an option</div>
		</fieldset>
	);
}

DecisionMaker.PropTypes = {
	hasError: PropTypes.bool,
	value: PropTypes.string
}

export default DecisionMaker;
