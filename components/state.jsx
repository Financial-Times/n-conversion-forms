import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { americanStates } from 'n-common-static-data';
const defaultStates = americanStates.states;

function State ({
	value,
	fieldId = 'stateField',
	selectId = 'state',
	hasError = false,
	isHidden = false,
	isBillingState = false,
	isDisabled = false,
	states = defaultStates
}) {
	const divClassName = classNames([
		'o-forms',
		'o-forms--wide',
		'su-field',
		'js-field',
		{ 'o-forms--error': hasError },
		{ 'n-ui-hide': isHidden }
	]);

	return (
		<div
			id={fieldId}
			className={divClassName}
			data-validate="required"
		>
			<label htmlFor="state" className="o-forms__label">{ isBillingState ? 'Billing ' : '' }State</label>

			<select
				id={selectId}
				className="o-forms__select js-field__input js-item__value"
				aria-required="true"
				required
				name={isBillingState ? 'billingState' : 'state'}
				data-trackable="field-state"
				disabled={isDisabled}
				defaultValue={value}
			>
				<option disabled value="">Please select a state</option>

				{
					states.map(({ code, name }) => {
						return (<option key={code} value={code}>{name}</option>);
					})
				}
			</select>

			<div className="o-forms__errortext">Please select your state</div>
		</div>
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
	states: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string,
		name: PropTypes.string,
	}))
};

export default State;
