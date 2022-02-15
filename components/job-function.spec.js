import { JobFunction } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.industries.industries;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('JobFunction', () => {
	it('render a select with a label', () => {
		const props = {
			options: defaultOptions,
		};

		expect(JobFunction).toRenderCorrectly(props);
	});

	it('can render an initial selected value', () => {
		const props = {
			options: defaultOptions,
			value: 'DEF',
		};

		expect(JobFunction).toRenderCorrectly(props);
	});

	it('can render a disable select', () => {
		const props = {
			options: defaultOptions,
			isDisabled: true,
		};

		expect(JobFunction).toRenderCorrectly(props);
	});

	it('can render an error message', () => {
		const props = {
			options: defaultOptions,
			hasError: true,
		};

		expect(JobFunction).toRenderCorrectly(props);
	});

	it('can override id and name for select', () => {
		const props = {
			selectId: 'selectId',
			selectName: 'selectName',
		};
		const component = mount(JobFunction(props));
		const select = component.find('select#selectId');

		expect(select.exists()).toBe(true);
	});

	it('can override id for field', () => {
		const props = {
			fieldId: 'fieldID',
		};
		const component = mount(JobFunction(props));
		const field = component.find('#fieldID');

		expect(field.exists()).toBe(true);
	});

	it('renders with default label wording', () => {
		const props = {};

		const component = mount(JobFunction(props));

		expect(component.find('.o-forms-title__main').text()).toEqual(
			'What is your job function?'
		);
	});

	it('renders with custom label wording', () => {
		const props = { fieldLabel: 'Industry' };

		const component = mount(JobFunction(props));

		expect(component.find('.o-forms-title__main').text()).toEqual('Industry');
	});

	it('renders with optional title class, when not required', () => {
		const props = { isRequired: false };
		const component = mount(JobFunction(props));

		expect(
			component.find('.o-forms-title.o-forms-field--optional').length
		).toEqual(1);
	});
});
