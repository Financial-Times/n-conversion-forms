import { LastName } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('Last name', () => {
	it('render a field with default settings', () => {
		const props = {};
		expect(LastName).toRenderCorrectly(props);
	});

	it('render a field with value', () => {
		const props = {
			value: 'some value',
		};
		expect(LastName).toRenderCorrectly(props);
	});

	it('render a disabled field', () => {
		const props = {
			isDisabled: true,
		};
		expect(LastName).toRenderCorrectly(props);
	});

	it('render a field with default error', () => {
		const props = {
			hasError: true,
		};
		expect(LastName).toRenderCorrectly(props);
	});

	it('render a field with custom error', () => {
		const props = {
			errorText: 'some error happened',
			fieldId: 'fieldId',
			hasError: true,
		};
		const component = mount(LastName(props));
		const element = component.find('#fieldId .o-forms-input__error').first();
		expect(element.text()).toBe(props.errorText);
	});

	it('render a field with custom data-trackable', () => {
		const props = {
			dataTrackable: 'test-data-trackable',
			inputId: 'inputId',
		};
		const component = mount(LastName(props));
		const actualValue = component.find('#inputId').prop('data-trackable');
		expect(actualValue).toBe(props.dataTrackable);
	});

	it('render a field with custom id', () => {
		const props = {
			fieldId: 'fieldId',
		};
		const component = mount(LastName(props));
		const element = component.find('#fieldId');
		expect(element.exists()).toBe(true);
	});

	it('render a field with custom input id', () => {
		const props = {
			inputId: 'inputId',
		};
		const component = mount(LastName(props));
		const element = component.find('input#inputId');
		expect(element.exists()).toBe(true);
	});

	it('render a field with custom label', () => {
		const props = {
			fieldId: 'fieldId',
			label: 'test label',
		};
		const component = mount(LastName(props));
		const element = component.find('.o-forms-title__main').first();
		expect(element.text()).toBe(props.label);
	});

	it('render a field with custom placeholder text', () => {
		const props = {
			inputId: 'inputId',
			placeHolder: 'test placeholder',
		};
		const component = mount(LastName(props));
		const actualValue = component.find('#inputId').prop('placeholder');
		expect(actualValue).toBe(props.placeHolder);
	});
});
