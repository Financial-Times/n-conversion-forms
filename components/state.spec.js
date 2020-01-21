import { State } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { americanStates } from 'n-common-static-data';
const defaultStates = americanStates.states;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('State', () => {
	it('render a select with a label', () => {
		const props = {
			states: defaultStates
		};

		expect(State).toRenderCorrectly(props);

	});

	it('can render an initial selected value', () => {
		const props = {
			states: defaultStates,
			value: 'AL',
		};

		expect(State).toRenderCorrectly(props);
	});

	it('can render a disabled select', () => {
		const props = {
			states: defaultStates,
			isDisabled: true
		};

		expect(State).toRenderCorrectly(props);
	});

	it('can render an error message', () => {
		const props = {
			states: defaultStates,
			hasError: true,
		};

		expect(State).toRenderCorrectly(props);
	});

	it('can apply class to hide the component', () => {
		const props = {
			states: defaultStates,
			isHidden: true,
		};

		expect(State).toRenderCorrectly(props);
	});

	it('can override ID for field', () => {
		const props = {
			fieldId: 'fieldID',
		};
		const component = mount(State(props));
		const field = component.find('#fieldID');

		expect(field.exists()).toBe(true);
	});

	it('can override ID for select', () => {
		const props = {
			selectId: 'selectId'
		};
		const component = mount(State(props));
		const select = component.find('select#selectId');

		expect(select.exists()).toBe(true);
	});

	it('applies context-specific name if is billing state', () => {
		const props = {
			isBillingState: true
		};
		const component = mount(State(props));
		const selectElementName = component.find('select#state').prop('name');

		expect(selectElementName).toBe('billingState');
	});

	it('applies context-specific name if is not billing state', () => {
		const props = {
			isBillingState: false
		};
		const component = mount(State(props));
		const selectElementName = component.find('select#state').prop('name');

		expect(selectElementName).toBe('state');
	});
});
