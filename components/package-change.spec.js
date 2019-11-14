import PackageChange from './package-change';
import { expectToRenderAs } from '../test-jest/helpers/expect-to-render-as';
import { fetchPartialAsString } from '../test-jest/helpers/fetch-hbs-as-string';

const context = {};

expect.extend(expectToRenderAs);

describe('PackageChange', () => {
	beforeAll(async () => {
		context.template = await fetchPartialAsString('package-change.html');
	});

	it('render with defaults', () => {
		const props = {
			changePackageUrl: 'https://www.ft.com',
			currentPackage: 'Trial'
		};

		expect(PackageChange).toRenderAs(context, props);
	});

	['annual'].forEach(term => {
		describe(`${term}`, () => {
			it('render with defaults', () => {
				const props = {
					changePackageUrl: 'https://www.ft.com',
					currentPackage: 'Trial',
					terms: [{
						name: term,
						price: '£1.00',
						weeklyPrice: '£1.00'
					}]
				};

				expect(PackageChange).toRenderAs(context, props);
			});

			it('render with discount', () => {
				const props = {
					changePackageUrl: 'https://www.ft.com',
					currentPackage: 'Trial',
					terms: [{
						name: term,
						price: '£1.00',
						weeklyPrice: '£1.00',
						discount: '25%'
					}]
				};

				expect(PackageChange).toRenderAs(context, props);
			});

			it('render with trialPrice', () => {
				const props = {
					changePackageUrl: 'https://www.ft.com',
					currentPackage: 'Trial',
					terms: [{
						name: term,
						price: '£1.00',
						weeklyPrice: '£1.00',
						trialPrice: '£1.00'
					}]
				};

				expect(PackageChange).toRenderAs(context, props);
			});
		});
	});
});
