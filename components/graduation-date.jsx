import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getMonthNameByIndex = index => {
	return new Date(null, index, null).toLocaleDateString('en', { month: 'long' });
};

export const Compliance = () => (
	<div id="graduationDateCompliance" className="ncf__field">
		<p>
			<span className="ncf__line-break">We use the information you provide, and may share it with your </span>
			<span className="ncf__line-break">institution, for the purposes of administering your </span>
			<span className="ncf__line-break">institution&apos;s licence for <a className="ncf__link--external" href="https://ft.com/" title="Financial Times" target="_blank" rel="noopener noreferrer">FT.com.</a> </span>
			<span className="ncf__line-break">We may also use it to ensure our communications </span>
			<span className="ncf__line-break">to you are more relevant. If you do not wish us to do so, </span>
			<span className="ncf__line-break">you can amend your preferences at any time <a className="ncf__link--external" href="http://www.ft.com/myft/alerts/" title="Financial Times" target="_blank" rel="noopener noreferrer">here</a></span>
		</p>
	</div>
);

export function GraduationDate ({
	value,
	isDisabled = false,
	isRequired = false,
	hasError = false,
}) {
	const currentYear = (new Date()).getUTCFullYear();
	const earliestSelectableYear = currentYear - 4;
	const defaultValues = value && value.trim().match(/^([0-9]{4})-(0[0-9]|1[012])-[0-9]{2}$/);
	const [, defaultYear, defaultMonth] = defaultValues || [];
	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<div
			id="graduationDateField"
			className="o-forms-field ncf__validation-error ncf__graduation-date"
			data-validate="required"
		>
			<span className="o-forms-title" role="group" aria-labelledby="graduationTitleMain">
				<span className="o-forms-title__main" id="graduationTitleMain">Expected graduation date</span>
			</span>
			<div className={inputWrapperClassNames}>
				<div className="ncf__graduation-date__select-wrapper">
					<span>
						<label htmlFor="graduationDateMonth">Month</label>
						<select
							id="graduationDateMonth"
							name="graduationDateMonth"
							required={isRequired}
							aria-required={isRequired}
							disabled={isDisabled}
							defaultValue={defaultMonth}
						>
							{Array.from({ length: 12 }, (_, index) => {
								return (
									<option
										key={index}
										value={(index + 1).toString(10).padStart(2, '0')}
									>
										{getMonthNameByIndex(index + 1)}
									</option>
								);
							})}
						</select>
					</span>
					<span>
						<label htmlFor="graduationDateYear">Year</label>
						<select
							id="graduationDateYear"
							name="graduationDateYear"
							required={isRequired}
							aria-required={isRequired}
							disabled={isDisabled}
							defaultValue={defaultYear}
						>
							{Array.from({ length: 9 }, (_, index) => {
								const value = earliestSelectableYear + index;
								return (
									<option key={index} value={value}>
										{value}
									</option>
								);
							})}
						</select>
					</span>
				</div>
				<span className="o-forms-input__error">
					Please select a valid graduation date
				</span>
			</div>
			<Compliance />
		</div>
	);
};

GraduationDate.propTypes = {
	value: PropTypes.string,
	isDisabled: PropTypes.bool,
	isRequired: PropTypes.bool,
	hasError: PropTypes.bool,
};
