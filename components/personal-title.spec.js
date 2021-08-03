import { PersonalTitle } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { defaultPersonalTitles } from './personal-title';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('PersonalTitle', () => {
	it('render a select with a label', () => {
		const props = {
			options: defaultPersonalTitles
		};

		expect(PersonalTitle).toRenderCorrectly(props);
	});

	it('can render an initial selected value', () => {
		const props = {
			options: defaultPersonalTitles,
			value: 'mr',
		};

		expect(PersonalTitle).toRenderCorrectly(props);
	});

	it('can render a disable select', () => {
		const props = {
			options: defaultPersonalTitles,
			isDisabled: true,
		};

		expect(PersonalTitle).toRenderCorrectly(props);
	});

	it('can render an error message', () => {
		const props = {
			options: defaultPersonalTitles,
			hasError: true,
		};

		expect(PersonalTitle).toRenderCorrectly(props);
	});

	it('can override id and name for select', () => {
		const props = {
			selectId: 'selectId',
			selectName: 'selectName',
		};
		const component = mount(PersonalTitle(props));
		const select = component.find('select#selectId');

		expect(select.exists()).toBe(true);
	});

	it('can override id for field', () => {
		const props = {
			fieldId: 'fieldID',
		};
		const component = mount(PersonalTitle(props));
		const field = component.find('#fieldID');

		expect(field.exists()).toBe(true);
	});

	it('renders with default label wording', () => {
		const props = {};

		const component = mount(PersonalTitle(props));

		expect(component.find('.o-forms-title__main').text()).toEqual(
			'Title'
		);
	});

	it('renders with custom label wording', () => {
		const props = { fieldLabel: 'PersonalTitle' };

		const component = mount(PersonalTitle(props));

		expect(component.find('.o-forms-title__main').text()).toEqual('PersonalTitle');
	});

	it('renders with optional title class, when not required', () => {
		const props = { isRequired: false };
		const component = mount(PersonalTitle(props));

		expect(component.find('.o-forms-title.o-forms-field--optional').length).toEqual(1);
	});
});
