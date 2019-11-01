import Responsibility from './responsibility';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.responsibilities.responsibilities;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const context = {};
expect.extend(expectToRenderAs);

const {
	registerHelper,
	unregisterHelper,
} = require('../test/helpers');

describe('Responsibility', () => {
	let options;
	beforeAll(async () => {
		registerHelper('ncf-common-data', function ({ fn }) {
			return fn(Object.assign({}, { options }, this));
		});
		context.template = await fetchPartialAsString('responsibility.html');
	});

	afterAll(() => {
		unregisterHelper('ncf-common-data');
	});

	it('render a select with a label', () => {
		const props = {
			options: defaultOptions
		};

		expect(Responsibility).toRenderAs(context, props);

	});

	it('can render an initial selected value', () => {
		const props = {
			options: defaultOptions,
			value: 'FIN',
		};

		expect(Responsibility).toRenderAs(context, props);
	});

	it('can render a disable select', () => {
		const props = {
			options: defaultOptions,
			isDisabled: true
		};

		expect(Responsibility).toRenderAs(context, props);
	});

	it('can render an error message', () => {
		const props = {
			options: defaultOptions,
			hasError: true,
		};

		expect(Responsibility).toRenderAs(context, props);
	});

	it('can override id and name for select', () => {
		const props = {
			selectId: 'selectId',
			selectName: 'selectName',
		};
		const component = mount(Responsibility(props));
		const select = component.find('select#selectId');

		expect(select.exists()).toBe(true);
	});

	it('can override id for field', () => {
		const props = {
			fieldId: 'fieldID',
		};
		const component = mount(Responsibility(props));
		const field = component.find('#fieldID');

		expect(field.exists()).toBe(true);
	});
});
