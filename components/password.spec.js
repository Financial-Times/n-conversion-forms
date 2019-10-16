import Password from './password';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const context = {
};

expect.extend(expectToRenderAs);

describe('Password', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('password.html');
	});

	it('render a password input with a label where input ID and Name are the same', () => {
		const props = {};

		expect(Password).toRenderAs(context, props);

		const renderedPassword = mount(Password(props));
		const inputElement = renderedPassword.find('#password');
		expect(inputElement.prop('name')).toBe('password');

	});

	it('can have an input ID different from an input name', () => {
		const props = {
			inputId: 'i-m-kebab-case',
			inputName: 'ImPascalCase',
		};

		const renderedPassword = mount(Password(props));
		const inputElement = renderedPassword.find(`#${props.inputId}`);
		expect(inputElement.prop('name')).toBe(props.inputName);

	});

	it('can render a disable input', () => {
		const props = {
			isDisabled: true,
		};

		expect(Password).toRenderAs(context, props);

	});

	it('can render a pattern attribute', () => {
		const props = {
			pattern: 'Whatever'
		};

		expect(Password).toRenderAs(context, props);

	});

	it('can render as an Error', () => {
		const props = {
			hasError: true,
		};

		expect(Password).toRenderAs(context, props);
	});

	it('can render as an Unknown user', () => {
		const props = {
			unknownUser: true,
		};

		expect(Password).toRenderAs(context, props);
	});
});
