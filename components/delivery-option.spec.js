import { DeliveryOption } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('DeliveryOption', () => {
	it('renders with minimum mandatory props', () => {
		const props = {
			country: 'GBR',
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true,
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true,
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true,
				},
			],
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});

	it('renders with a context of being single', () => {
		const props = {
			country: 'GBR',
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true,
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true,
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true,
				},
			],
			isSingle: true,
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});

	it('renders without unrecognised delivery options', () => {
		const props = {
			country: 'GBR',
			options: [
				{
					value: 'PV',
					isSelected: true,
					isValidDeliveryOption: true,
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true,
				},
				{
					value: 'FOOBAR',
					isSelected: false,
					isValidDeliveryOption: false,
				},
				{
					value: 'EV',
					isSelected: false,
					isValidDeliveryOption: true,
				},
			],
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});

	it('renders with USA print offer', () => {
		const props = {
			country: 'USA',
			productCode: 'NWE',
			options: [
				{
					value: 'HD',
					isSelected: true,
					isValidDeliveryOption: true,
					mailDelivery: false,
					deliveryOnPublicationDate: true,
					flightMarket: false,
				},
				{
					value: 'HD',
					isSelected: false,
					isValidDeliveryOption: true,
					mailDelivery: true,
				},
			],
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});

	it('renders with country CAN print offer HD and mailDelivery false', () => {
		const props = {
			country: 'CAN',
			productCode: 'N6D',
			options: [
				{
					value: 'HD',
					isSelected: true,
					isValidDeliveryOption: true,
					mailDelivery: false,
					deliveryOnPublicationDate: true,
					flightMarket: false,
				},
			],
		};

		expect(DeliveryOption).toRenderCorrectly(props);
	});
});
