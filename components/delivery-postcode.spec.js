import { DeliveryPostcode } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Delivery Postcode', () => {
	it('render a postcode input with a label set as postcode', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);

	});

	it('render a postcode input with a label set as Zip Code', () => {
		const props = {
			country: 'USA',
			postcodeReference: 'Zip Code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);

	});

	it('render a postcode input with a label set as Zip Code with USA in lower case', () => {
		const props = {
			country: 'usa',
			postcodeReference: 'Zip Code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);

	});

	it('render a postcode input with a label set as postal code', () => {
		const props = {
			country: 'CAN',
			postcodeReference: 'postal code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);

	});

	it('render a postcode input with default label', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);

	});

	it('render a disable input', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
			isDisabled: true,
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);

	});

	it('render different styles', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
			hasError: true,
			isHidden: true,
		};

		expect(DeliveryPostcode).toRenderCorrectly(props);
	});
});
