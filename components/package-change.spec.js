import { PackageChange } from './index';
import { expectToRenderCorrectly } from '../test-jest/helpers/expect-to-render-correctly';

expect.extend(expectToRenderCorrectly);

describe('PackageChange', () => {
	it('render with defaults', () => {
		const props = {
			changePackageUrl: 'https://www.ft.com',
			currentPackage: 'Trial'
		};

		expect(PackageChange).toRenderCorrectly(props);
	});
});
