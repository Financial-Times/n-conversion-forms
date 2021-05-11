import { DeliveryPostcode } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Delivery Postcode', () => {
	it('renders a postcode input with a label set as Postcode', () => {
		const props = {
			postcodeReference: 'Postcode',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});

	it('renders a postcode input with a label set as Zip Code', () => {
		const props = {
			country: 'USA',
			postcodeReference: 'Zip Code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});

	it('renders a postcode input with a label set as Zip Code with USA in lower case', () => {
		const props = {
			country: 'usa',
			postcodeReference: 'Zip Code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});

	it('renders a postcode input with a label set as postal code', () => {
		const props = {
			country: 'CAN',
			postcodeReference: 'Postal Code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});

	it('renders a postcode input with default label', () => {
		const props = {
			postcodeReference: 'Postcode',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});

	it('renders a disable input', () => {
		const props = {
			postcodeReference: 'Postcode',
			pattern: 'whatever',
			isDisabled: true,
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});

	it('renders different styles', () => {
		const props = {
			postcodeReference: 'Postcode',
			pattern: 'whatever',
			hasError: true,
			isHidden: true,
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});

	it('renders with link to change the value', () => {
		const props = {
			country: 'USA',
			postcodeReference: 'Zip Code',
			pattern: 'whatever',
			changePostcodeUrl: 'http://local.ft.com',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});
});
