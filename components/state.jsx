import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { americanStates } from 'n-common-static-data';
const defaultStates = americanStates.states;

export function State({
	value,
	fieldId = 'stateField',
	selectId = 'state',
	hasError = false,
	isHidden = false,
	isBillingState = false,
	isDisabled = false,
	states = defaultStates,
}) {
	const fieldClassNames = classNames([
		'o-forms-field',
		{ ncf__hidden: isHidden },
	]);

	const inputWrapperClassNames = classNames([
		'o-forms-input',
		'o-forms-input--select',
		{ 'o-forms-input--invalid': hasError },
	]);

	return (
		<label
			id={fieldId}
			className={fieldClassNames}
			data-validate="required"
			htmlFor={selectId}
		>
			<span className="o-forms-title">
				<span className="o-forms-title__main">
					{isBillingState ? 'Billing ' : ''}State
				</span>
			</span>

			<span className={inputWrapperClassNames}>
				<select
					id={selectId}
					aria-required="true"
					required
					name={isBillingState ? 'billingState' : 'state'}
					data-trackable="field-state"
					disabled={isDisabled}
					defaultValue={value}
				>
					<option disabled value="">
						Please select a state
					</option>

					{states.map(({ code, name }) => {
						return (
							<option key={code} value={code}>
								{name}
							</option>
						);
					})}
				</select>
				<span className="o-forms-input__error">Please select your state</span>
			</span>
		</label>
	);
}

State.propTypes = {
	value: PropTypes.string,
	fieldId: PropTypes.string,
	selectId: PropTypes.string,
	hasError: PropTypes.bool,
	isHidden: PropTypes.bool,
	isBillingState: PropTypes.bool,
	isDisabled: PropTypes.bool,
	states: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.string,
			name: PropTypes.string,
		})
	),
};
