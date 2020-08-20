import { BillingCountry } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('Country', () => {

	it('renders with default props', () => {
		const props = {};

		expect(BillingCountry).toRenderCorrectly(props);
	});

	it('renders with small filterList', () => {
		const props = {
			filterList: ['GBR']
		};

		expect(BillingCountry).toRenderCorrectly(props);
	});

	it('renders with large filterList', () => {
		const props = {
			filterList: [
				'AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG',
				'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB',
			]
		};

		expect(BillingCountry).toRenderCorrectly(props);
	});

	it('renders with hasError', () => {
		const props = {
			hasError: true
		};

		expect(BillingCountry).toRenderCorrectly(props);
	});

	it('renders with isDisabled', () => {
		const props = {
			isDisabled: true
		};

		expect(BillingCountry).toRenderCorrectly(props);
	});

	it('renders with value', () => {
		const props = {
			value: 'GBR'
		};

		expect(BillingCountry).toRenderCorrectly(props);
	});
});
