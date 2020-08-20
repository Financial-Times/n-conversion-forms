import { DeliveryOption } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryOption', () => {
	it('renders with minimum mandatory props', () => {
		const props = {
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true
				}
			]
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});

	it('renders with a context of being single', () => {
		const props = {
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true
				}
			],
			isSingle: true
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});

	it('renders without unrecognised delivery options', () => {
		const props = {
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true
				},
				{
					value: 'FOOBAR',
					isSelected: false,
					isValidDeliveryOption: false
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true
				}
			]
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});
});
