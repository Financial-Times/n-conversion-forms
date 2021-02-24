import { DeliveryPOBox } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

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
});
