import { Position } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';
import { demographics } from 'n-common-static-data';
const B2CPositions = demographics.positions.positions;

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('Position', () => {
	it('render a select with a label', () => {
		const props = {
			options: B2CPositions,
		};

		expect(Position).toRenderCorrectly(props);
	});

	it('can render an initial selected value', () => {
		const props = {
			options: B2CPositions,
			value: 'CP',
		};

		expect(Position).toRenderCorrectly(props);
	});

	it('can render a disable select', () => {
		const props = {
			options: B2CPositions,
			isDisabled: true,
		};

		expect(Position).toRenderCorrectly(props);
	});

	it('can render an error message', () => {
		const props = {
			options: B2CPositions,
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

	it('renders with optional title class, when not required', () => {
		const props = { isRequired: false };
		const component = mount(Position(props));

		expect(
			component.find('.o-forms-title.o-forms-field--optional')
		).toHaveLength(1);
	});
});
