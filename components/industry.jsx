import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.industries.industries;

export default function Industry ({
	value,
	isDisabled = false,
	hasError = false,
	fieldId = 'industryField',
	selectId = 'industry',
	selectName = 'industry',
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
		data-ui-item-name="industry"
		data-validate="required">
		<label htmlFor="industry" className="o-forms__label">In which industry do you work?</label>
		<select id={selectId} name={selectName} className="o-forms__select js-field__input js-item__value"
			data-trackable="field-industry"
			aria-required="true" required
			disabled={isDisabled}
			defaultValue={value}
		>
			<option value="">Please select an industry</option>
			{options.map(({ code, description }) => {
				return <option key={code} value={code}>{description}</option>;
			})}
		</select >
		<div className="o-forms__errortext" >Please select your company’s industry</div >
	</div >);

}

Industry.propTypes = {
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
