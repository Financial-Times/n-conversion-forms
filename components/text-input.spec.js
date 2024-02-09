import { TextInput } from './index';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Text Input', () => {
	it('renders with default props', () => {
		const props = {};

		const component = mount(TextInput(props));
		const element = component.find('input');

		expect(element.exists()).toBe(true);
	});

	it('renders a field with custom field id', () => {
		const props = { fieldId: 'customFieldId' };

		const component = mount(TextInput(props));
		const element = component.find('#customFieldId');

		expect(element.exists()).toBe(true);
	});

	it('renders with an error', () => {
		const props = { hasError: true, errorText: 'Invalid value' };

		const component = mount(TextInput(props));
		const element = component.find('.o-forms-input--invalid');
		const errorMsg = component.find('.o-forms-input__error');

		expect(element.exists()).toBe(true);
		expect(errorMsg.text()).toBe('Invalid value');
	});

	it('renders a field with custom input id', () => {
		const props = { inputId: 'customInputId' };

		const component = mount(TextInput(props));
		const element = component.find('input#customInputId');

		expect(element.exists()).toBe(true);
	});

	it('renders a field with custom input name', () => {
		const CUSTOM_INPUT_NAME = 'customInputName';
		const props = { inputName: CUSTOM_INPUT_NAME };

		const component = mount(TextInput(props));
		const element = component.find('input');

		expect(element.prop('name')).toBe(CUSTOM_INPUT_NAME);
	});

	it('renders with a custom value', () => {
		const props = { value: 'foobar' };

		const component = mount(TextInput(props));
		const element = component.find('input');

		expect(element.prop('defaultValue')).toBe('foobar');
	});

	it('renders with disabled input', () => {
		const props = { isDisabled: true };

		const component = mount(TextInput(props));
		const element = component.find('input[disabled=true]');

		expect(element.exists()).toBe(true);
	});

	it('renders with default label wording', () => {
		const props = {};

		const component = mount(TextInput(props));
		const label = component.find('.o-forms-title__main');

		expect(label.text()).toBe('');
	});

	it('renders with custom label wording', () => {
		const props = { label: 'Code' };

		const component = mount(TextInput(props));
		const label = component.find('.o-forms-title__main');

		expect(label.text()).toBe('Code');
	});

	it('renders with custom description wording', () => {
		const props = { description: 'Description text' };

		const component = mount(TextInput(props));
		const description = component.find('.o-forms-title__prompt');

		expect(description.text()).toBe('Description text');
	});

	it('renders as required field', () => {
		const props = { isRequired: true };

		const component = mount(TextInput(props));
		const element = component.find('input[required=true]');

		expect(element.exists()).toBe(true);
	});

	it('renders as optional field', () => {
		const props = { isRequired: false };

		const component = mount(TextInput(props));
		const element = component.find('input[required=true]');

		expect(element.exists()).toBe(false);
	});
});
