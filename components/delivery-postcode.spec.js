import { DeliveryPostcode } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {
};

expect.extend(expectToRenderAs);

describe('Delivery Postcode', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('delivery-postcode.html');
	});

	it('render a postcode input with a label set as postcode', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderAs(context, props);

	});

	it('render a postcode input with a label set as Zip Code', () => {
		const props = {
			country: 'USA',
			postcodeReference: 'Zip Code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderAs(context, props);

	});

	it('render a postcode input with a label set as Zip Code with USA in lower case', () => {
		const props = {
			country: 'usa',
			postcodeReference: 'Zip Code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderAs(context, props);

	});

	it('render a postcode input with a label set as postal code', () => {
		const props = {
			country: 'CAN',
			postcodeReference: 'postal code',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderAs(context, props);

	});

	it('render a postcode input with default label', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
		};

		expect(DeliveryPostcode).toRenderAs(context, props);

	});

	it('render a disable input', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
			isDisabled: true,
		};

		expect(DeliveryPostcode).toRenderAs(context, props);

	});

	it('render different styles', () => {
		const props = {
			postcodeReference: 'postcode',
			pattern: 'whatever',
			hasError: true,
			isHidden: true,
		};

		expect(DeliveryPostcode).toRenderAs(context, props);
	});
});
