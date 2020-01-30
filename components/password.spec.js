import { mount } from 'enzyme';
import { Password } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};
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

	it('can have a different label', () => {
		const props = {
			label: 'Current password',
			inputId: 'passwordWithCustomLabel',
		};

		const renderedPassword = mount(Password(props));
		const inputElement = renderedPassword.find(`label[htmlFor="${props.inputId}"] .o-forms-title__main`);
		expect(inputElement.text()).toBe(props.label);

	});

	it('can have different placeholder text', () => {
		const props = {
			placeholder: 'Please enter your current password',
			inputId: 'passwordWithCustomPlaceholder',
		};

		const renderedPassword = mount(Password(props));
		const inputElement = renderedPassword.find(`#${props.inputId}`);
		expect(inputElement.prop('placeholder')).toBe(props.placeholder);
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

	it('can have different description text', () => {
		const props = {
			description: 'Keep this a secret!',
			inputId: 'passwordWithCustomDescription',
		};

		const renderedPassword = mount(Password(props));
		const passwordDescription = renderedPassword.find('.o-forms-title__prompt');
		expect(passwordDescription.text()).toBe(props.description);
	});

	it('can render without a description', () => {
		const props = {
			showDescription: false,
			inputId: 'passwordWithoutDescription',
		};

		const renderedPassword = mount(Password(props));
		const inputElement = renderedPassword.find(`#${props.inputId}`);
		expect(renderedPassword.exists('.o-forms-title__prompt')).toBe(false);
		expect(inputElement.prop('aria-describedby')).toBeUndefined();
	});

	it('can render without the show password checkbox', () => {
		const props = {
			hasShowPassword: false,
			inputId: 'passwordWithoutShowPassword',
		};

		const renderedPassword = mount(Password(props));
		expect(renderedPassword.exists('input[data-trackable="field-show-password"]')).toBe(false);
	});
});
