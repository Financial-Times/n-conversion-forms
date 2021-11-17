import { DeliveryPOBox } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('DeliveryPOBox', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeliveryPOBox).toRenderCorrectly(props);
	});

	it('renders with a custom props values', () => {
		const props = {
			value: 'PO Box 1054',
			fieldId: 'customFieldId',
			inputId: 'customInputId',
			maxlength: 30,
			hasError: true,
			isDisabled: true,
			country: 'USA',
		};

		expect(DeliveryPOBox).toRenderCorrectly(props);
	});

	it('renders with hidden input elements', () => {
		const props = { isHidden: true };

		expect(DeliveryPOBox).toRenderCorrectly(props);
	});

	it('renders as hidden for default fieldId', () => {
		const props = { isHidden: true };

		const component = mount(DeliveryPOBox(props));

		expect(component.find('#deliveryPOBoxField').hasClass('ncf__hidden')).toBe(
			true
		);
	});
});
