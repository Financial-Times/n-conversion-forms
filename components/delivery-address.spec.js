import { DeliveryAddress } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

expect.extend(expectToRenderCorrectly);

describe('DeliveryAddress', () => {
	it('renders default props', () => {
		const props = {};

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with an error', () => {
		const props = { hasError: true };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with custom line 1 value', () => {
		const props = { line1: 'Line 1 text' };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with custom line 2 value', () => {
		const props = { line2: 'Line 2 text' };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with custom line 3 value', () => {
		const props = { line3: 'Line 3 text' };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with disabled input elements', () => {
		const props = { isDisabled: true };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders with hidden input elements', () => {
		const props = { isHidden: true };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	it('renders as hidden for default fieldId', () => {
		const props = { isHidden: true };

		const component = mount(DeliveryAddress(props));

		expect(
			component.find('#deliveryAddressFields').hasClass('ncf__hidden')
		).toBe(true);
	});

	it('renders with country different than default', () => {
		const props = { country: 'USA' };

		expect(DeliveryAddress).toRenderCorrectly(props);
	});

	describe('DeliveryAddressLine3', () => {
		let props = {};

		beforeEach(() => {
			props = {
				line1: 'line 1',
				line2: 'line 2',
				line3: 'APT6',
				country: 'USA',
				addressType: 'home',
			};
		});

		it('sets addressLine3 maxLenght to 6 when country is USA and address type is Home', () => {
			const deliveryAddress = mount(DeliveryAddress(props));

			expect(
				deliveryAddress.find('#deliveryAddressLine3').prop('maxLength')
			).toBe(6);
		});

		it('sets addressLine3 maxLenght to 50 when country is GBR and address type is Home', () => {
			props.country = 'GBR';
			const deliveryAddress = mount(DeliveryAddress(props));

			expect(
				deliveryAddress.find('#deliveryAddressLine3').prop('maxLength')
			).toBe(50);
		});

		it('sets addressLine3 maxLenght to 6 when country is CAN and Company', () => {
			props.country = 'CAN';
			props.addressType = 'company';
			const deliveryAddress = mount(DeliveryAddress(props));

			expect(
				deliveryAddress.find('#deliveryAddressLine3').prop('maxLength')
			).toBe(6);
		});

		it('sets addressLine3 to default maxLength when AddressType is POBox', () => {
			props.addressType = 'pobox';
			const deliveryAddress = mount(DeliveryAddress(props));

			expect(
				deliveryAddress.find('#deliveryAddressLine3').prop('maxLength')
			).toBe(50);
		});
	});
});
