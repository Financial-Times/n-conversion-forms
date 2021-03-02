import { DeliveryAddressType } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryAddressType', () => {
	it('renders with default props', () => {
		const props = {};

		expect(DeliveryAddressType).toRenderCorrectly(props);
	});

	it('renders with all props', () => {
		const props = {
			fieldId: 'customField',
			imputName: 'customName',
			value: 'company',
		};

		expect(DeliveryAddressType).toRenderCorrectly(props);
	});
});
