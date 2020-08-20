import { Responsibility } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.responsibilities.responsibilities;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('Responsibility', () => {
	it('render a select with a label', () => {
		const props = {
			options: defaultOptions
		};

		expect(Responsibility).toRenderCorrectly(props);

	});

	it('can render an initial selected value', () => {
		const props = {
			options: defaultOptions,
			value: 'FIN',
		};

		expect(Responsibility).toRenderCorrectly(props);
	});

	it('can render a disable select', () => {
		const props = {
			options: defaultOptions,
			isDisabled: true
		};

		expect(Responsibility).toRenderCorrectly(props);
	});

	it('can render an error message', () => {
		const props = {
			options: defaultOptions,
			hasError: true,
		};

		expect(Responsibility).toRenderCorrectly(props);
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
