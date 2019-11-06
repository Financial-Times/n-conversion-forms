import State from './state';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';
import { americanStates } from 'n-common-static-data';
const defaultStates = americanStates.states;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const context = {};
expect.extend(expectToRenderAs);

const {
	registerHelper,
	unregisterHelper,
} = require('../test/helpers');

describe('State', () => {
	let states;
	beforeAll(async () => {
		registerHelper('ncf-common-data', function ({ fn }) {
			return fn(Object.assign({}, { states }, this));
		});
		context.template = await fetchPartialAsString('state.html');
	});

	afterAll(() => {
		unregisterHelper('ncf-common-data');
	});

	it('render a select with a label', () => {
		const props = {
			states: defaultStates
		};

		expect(State).toRenderAs(context, props);

	});

	it('can render an initial selected value', () => {
		const props = {
			states: defaultStates,
			value: 'AL',
		};

		expect(State).toRenderAs(context, props);
	});

	it('can render a disabled select', () => {
		const props = {
			states: defaultStates,
			isDisabled: true
		};

		expect(State).toRenderAs(context, props);
	});

	it('can render an error message', () => {
		const props = {
			states: defaultStates,
			hasError: true,
		};

		expect(State).toRenderAs(context, props);
	});

	it('can apply class to hide the component', () => {
		const props = {
			states: defaultStates,
			isHidden: true,
		};

		expect(State).toRenderAs(context, props);
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
