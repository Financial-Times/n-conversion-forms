import { DeliveryAddressType } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryAddressType', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeliveryAddressType).toRenderCorrectly(props);
	});

	it('renders with home value selected', () => {
		const props = { value: 'home' };

		expect(DeliveryAddressType).toRenderCorrectly(props);
	});

	it('renders with company value selected', () => {
		const props = { value: 'company' };

		expect(DeliveryAddressType).toRenderCorrectly(props);
	});

	it('renders with pobox value selected', () => {
		const props = { value: 'pobox' };

		expect(DeliveryAddressType).toRenderCorrectly(props);
	});
});
