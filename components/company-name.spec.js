import { CompanyName } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('CompanyName', () => {
	it('renders with default props', () => {
		const props = {};

		expect(CompanyName).toRenderCorrectly(props);
	});

	it('renders a field with custom field id', () => {
		const props = { fieldId: 'customFieldId' };

		const component = mount(CompanyName(props));

		const element = component.find('#customFieldId');

		expect(element.exists()).toBe(true);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(CompanyName).toRenderCorrectly(props);
	});

	it('renders a field with custom input id', () => {
		const props = { inputId: 'customInputId' };

		const component = mount(CompanyName(props));

		const element = component.find('input#customInputId');

		expect(element.exists()).toBe(true);
	});

	it('renders a field with custom input name', () => {
		const CUSTOM_INPUT_NAME = 'customInputName';

		const props = { inputName: CUSTOM_INPUT_NAME };

		const component = mount(CompanyName(props));

		const renderedNameValue = component.find('input#companyName').prop('name');

		expect(renderedNameValue).toBe(CUSTOM_INPUT_NAME);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		expect(CompanyName).toRenderCorrectly(props);
	});

	it('renders with disabled input', () => {
		const props = { isDisabled: true };

		expect(CompanyName).toRenderCorrectly(props);
	});

	it('renders with default label wording', () => {
		const props = {};

		const component = mount(CompanyName(props));

		expect(component.find('.o-forms-title__main').text()).toBe('Company name');
	});

	it('renders with custom label wording', () => {
		const props = { fieldLabel: 'Organisation name' };

		const component = mount(CompanyName(props));

		expect(component.find('.o-forms-title__main').text()).toBe(
			'Organisation name'
		);
	});

	it('renders as required field', () => {
		const component = mount(CompanyName({}));

		expect(
			component.find('#companyNameField').hasClass('o-forms-field--optional')
		).toBe(false);
		expect(component.find('input#companyName').prop('required')).toBe(true);
	});

	it('renders with optional field', () => {
		const props = { isRequired: false };

		expect(CompanyName).toRenderCorrectly(props);
	});

	it('renders as optional field', () => {
		const props = { isRequired: false };

		const component = mount(CompanyName(props));

		expect(
			component.find('#companyNameField').hasClass('o-forms-field--optional')
		).toBe(true);
		expect(component.find('input#companyName').prop('required')).toBe(false);
	});

	it('renders as hidden', () => {
		const props = { isHidden: true };

		const component = mount(CompanyName(props));

		expect(component.find('#companyNameField').hasClass('ncf__hidden')).toBe(
			true
		);
	});
});
