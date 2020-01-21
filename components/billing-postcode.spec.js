import { BillingPostcode } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';


expect.extend(expectToRenderCorrectly);

describe('Billing Postcode', () => {
	it('render a postcode input with a label', () => {
		const props = {
			postcodeReference: 'ZipCode',
		};

		expect(BillingPostcode).toRenderCorrectly(props);

	});

	it('can render a disable input', () => {
		const props = {
			postcodeReference: 'ZipCode',
			isDisabled: true,
		};

		expect(BillingPostcode).toRenderCorrectly(props);

	});

	it('can render a pattern attribute', () => {
		const props = {
			postcodeReference: 'ZipCode',
			pattern: 'Whatever'
		};

		expect(BillingPostcode).toRenderCorrectly(props);

	});

	it('can render as an Error', () => {
		const props = {
			postcodeReference: 'ZipCode',
			hasError: true,
		};

		expect(BillingPostcode).toRenderCorrectly(props);
	});

	it('can render as an hidden field', () => {
		const props = {
			postcodeReference: 'ZipCode',
			isHidden: true,
		};

		expect(BillingPostcode).toRenderCorrectly(props);
	});
});
