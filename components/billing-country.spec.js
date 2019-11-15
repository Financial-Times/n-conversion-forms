import { BillingCountry } from './index';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';
import ncfCountries from '../helpers/ncf-countries';
import { registerHelper } from '../test/helpers';

const context = {};

expect.extend(expectToRenderAs);

describe('Country', () => {
	beforeAll(async () => {
		registerHelper('ncf-countries', ncfCountries);
		context.template = await fetchPartialAsString('billing-country.html');
	});

	it('renders with default props', () => {
		const props = {};

		expect(BillingCountry).toRenderAs(context, props);
	});

	it('renders with small filterList', () => {
		const props = {
			filterList: ['GBR']
		};

		expect(BillingCountry).toRenderAs(context, props);
	});

	it('renders with large filterList', () => {
		const props = {
			filterList: [
				'AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG',
				'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB',
			]
		};

		expect(BillingCountry).toRenderAs(context, props);
	});

	it('renders with hasError', () => {
		const props = {
			hasError: true
		};

		expect(BillingCountry).toRenderAs(context, props);
	});

	it('renders with isDisabled', () => {
		const props = {
			isDisabled: true
		};

		expect(BillingCountry).toRenderAs(context, props);
	});

	it('renders with value', () => {
		const props = {
			value: 'GBR'
		};

		expect(BillingCountry).toRenderAs(context, props);
	});
});
