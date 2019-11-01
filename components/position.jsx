import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.positions.positions;

export default function Position ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'positionField',
	selectId = 'position',
	selectName = 'position',
	options = defaultOptions
}) {

	const fieldClassName = classNames([
		'o-forms o-forms--wide ncf__field js-field',
		{ 'o-forms--error': hasError }
	]);

	return (<div
		id={fieldId}
		className={fieldClassName}
		data-ui-item="select"
		data-ui-item-name="position"
		data-validate="required">
		<label htmlFor="position" className="o-forms__label">What’s your job position?</label>
		<select id={selectId} name={selectName} className="o-forms__select js-field__input js-item__value"
			data-trackable="field-position"
			aria-required="true" required
			disabled={isDisabled}
			defaultValue={value}
		>
			<option value="">Please select a job position</option>
			{options.map(({ code, description }) => {
				return <option key={code} value={code}>{description}</option>;
			})}
		</select >
		<div className="o-forms__errortext" >Please select your position</div >
	</div >);

}

Position.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	hasError: PropTypes.bool,
	fieldId: PropTypes.string,
	selectId: PropTypes.string,
	selectName: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		description: PropTypes.string,
	}))
};
