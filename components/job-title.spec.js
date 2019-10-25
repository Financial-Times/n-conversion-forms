import JobTitle from './job-title';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const context = {
};
expect.extend(expectToRenderAs);

describe('JobTitle', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('job-title.html');
	});

	it('render a select with a label', () => {
		const props = {};

		expect(JobTitle).toRenderAs(context, props);
	});

	it('can render an initial selected value', () => {
		const props = {
			value: 'Super hero',
		};

		expect(JobTitle).toRenderAs(context, props);
	});

	it('can render a disable input', () => {
		const props = {
			isDisabled: true
		};

		expect(JobTitle).toRenderAs(context, props);
	});

	it('can render an error message', () => {
		const props = {
			hasError: true,
		};

		expect(JobTitle).toRenderAs(context, props);
	});

	it('can override id and name for input', () => {
		const props = {
			inputId: 'inputId',
			inputName: 'inputName',
		};
		const component = mount(JobTitle(props));
		const input = component.find('input#inputId');

		expect(input.exists()).toBe(true);
	});

	it('can override id for field', () => {
		const props = {
			fieldId: 'fieldID',
		};
		const component = mount(JobTitle(props));
		const field = component.find('#fieldID');

		expect(field.exists()).toBe(true);
	});
});
