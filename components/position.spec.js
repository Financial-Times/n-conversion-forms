import { Position } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { demographics } from 'n-common-static-data';
const defaultOptions = demographics.positions.positions;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('Position', () => {
	it('render a select with a label', () => {
		const props = {
			options: defaultOptions
		};

		expect(Position).toRenderCorrectly(props);
	});

	it('can render an initial selected value', () => {
		const props = {
			options: defaultOptions,
			value: 'CP',
		};

		expect(Position).toRenderCorrectly(props);
	});

	it('can render a disable select', () => {
		const props = {
			options: defaultOptions,
			isDisabled: true
		};

		expect(Position).toRenderCorrectly(props);
	});

	it('can render an error message', () => {
		const props = {
			options: defaultOptions,
			hasError: true,
		};

		expect(Position).toRenderCorrectly(props);
	});

	it('can override ids and name for field and select', () => {
		const props = {
			fieldId: 'fieldID',
			selectId: 'selectId',
			selectName: 'selectName',
		};
		const component = mount(Position(props));

		const field = component.find('#fieldID');
		expect(field.exists()).toBe(true);

		const select = component.find('select#selectId');
		expect(select.exists()).toBe(true);
	});
});
