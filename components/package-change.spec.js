import { PackageChange } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('PackageChange', () => {
	it('render with defaults', () => {
		const props = {
			changePackageUrl: 'https://www.ft.com',
			currentPackage: 'Trial',
		};

		expect(PackageChange).toRenderCorrectly(props);
	});

	it('renders with description', () => {
		const props = {
			changePackageUrl: 'https://www.ft.com',
			currentPackage: 'Trial',
			packageDescription: 'Personalised email briefings and alerts',
		};

		expect(PackageChange).toRenderCorrectly(props);
	});

	['annual'].forEach((term) => {
		describe(`${term}`, () => {
			it('render with defaults', () => {
				const props = {
					changePackageUrl: 'https://www.ft.com',
					currentPackage: 'Trial',
					terms: [
						{
							name: term,
							price: '£1.00',
							weeklyPrice: '£1.00',
						},
					],
				};

				expect(PackageChange).toRenderCorrectly(props);
			});

			it('render with discount', () => {
				const props = {
					changePackageUrl: 'https://www.ft.com',
					currentPackage: 'Trial',
					terms: [
						{
							name: term,
							price: '£1.00',
							weeklyPrice: '£1.00',
							discount: '25%',
						},
					],
				};

				expect(PackageChange).toRenderCorrectly(props);
			});

			it('render with trialPrice', () => {
				const props = {
					changePackageUrl: 'https://www.ft.com',
					currentPackage: 'Trial',
					terms: [
						{
							name: term,
							price: '£1.00',
							weeklyPrice: '£1.00',
							trialPrice: '£1.00',
						},
					],
				};

				expect(PackageChange).toRenderCorrectly(props);
			});

			it('render when is7DayPassExperiment is true', () => {
				const props = {
					changePackageUrl: 'https://www.ft.com',
					currentPackage: 'Trial',
					is7DayPassExperiment: true,
					terms: [
						{
							name: term,
							price: '£4.99',
							weeklyPrice: '£4.99',
						},
					],
				};

				expect(PackageChange).toRenderCorrectly(props);
			});
		});
	});
});
