import CompanyName from './company-name';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const context = {};

expect.extend(expectToRenderAs);

describe('CompanyName', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('company-name.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(CompanyName).toRenderAs(context, props);
	});

	it('renders a field with custom div id', () => {
		const props = { fieldId: 'customFieldId' };

		const component = mount(CompanyName(props));

		const element = component.find('div#customFieldId');

		expect(element.exists()).toBe(true);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(CompanyName).toRenderAs(context, props);
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

		expect(CompanyName).toRenderAs(context, props);
	});

	it('renders with disabled input', () => {
		const props = { isDisabled: true };

		expect(CompanyName).toRenderAs(context, props);
	});
});
