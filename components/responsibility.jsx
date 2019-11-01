import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.responsibilities.responsibilities;

export default function Responsibility ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'responsibilityField',
	selectId = 'responsibility',
	selectName = 'responsibility',
	options = defaultOptions
}) {
	const fieldClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'ncf__field',
		'js-field',
		{ 'o-forms--error': hasError }
	]);

    return (
		<div
			id={fieldId}
			className={fieldClassName}
			data-ui-item="select"
			data-ui-item-name="responsibility"
			data-validate="required"
		>
			<label
				htmlFor="responsibility"
				className="o-forms__label"
			>Which best describes your job responsibility?</label>

			<select
				id={selectId}
				name={selectName}
				className="o-forms__select js-field__input js-item__value"
				data-trackable="field-responsibility"
				aria-required="true"
				required
				disabled={isDisabled}
				defaultValue={value}
			>
				<option value="">Please select a job responsibility</option>

				{options.map(({ code, description }) => {
					return <option key={code} value={code}>{description}</option>;
				})}
			</select>

			<div className="o-forms__errortext" >Please select your responsibility</div>
		</div>
	);
}

Responsibility.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.boolean,
	hasError: PropTypes.boolean,
	fieldId: PropTypes.string,
	selectId: PropTypes.string,
	selectName: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		description: PropTypes.string,
	}))
};
